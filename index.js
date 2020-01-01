#!/usr/bin/env node


//@ts-check
'use strict';


//@ts-ignore
const Mustache = require('mustache');
const File_System = require('fs');
const Path = require('path');

/**
 * Copy of View configurations that is passed about
 * @extends Helpers
 * @typedef {Object} View
 * @see Helpers - For helper functions that are added to View
 * @property {boolean} ghf - GitLab/Hub Flavored MarkDown
 * @property {string} name -
 * @property {string} author -
 * @property {string} description -
 * @property {string} license -
 * @property {string} code_of_conduct -
 * @property {string[]} languages -
 * @property {string} funding.key -
 * @property {string} funding.url -
 * @property {Object[]} files.in_path -
 * @property {Object[]} files.out_path -
 * @property {Object[]} files.partials -
 */
//@ts-ignore
const View = require('./dataView.json');


/**
 * Adds helper functions to `View` configurations
 * @typedef {Object} Helpers
 * @interface Helpers
 */
const Helpers = {
  /**
   * @returns {string} - Results from `Mustache.render` on found license `include.mustache` file
   * @this {View|View.license} - AKA the `license` value from `dataView.json` configurations
   */
  includeLicense: function() {
    let license_include_path;
    if (typeof this === 'object') {
      license_include_path = Path.join(__dirname, '.mustache', 'licenses', this.license, 'include.mustache');
    } else {
      license_include_path = Path.join(__dirname, '.mustache', 'licenses', this, 'include.mustache');
    }

    if (!File_System.existsSync(license_include_path)) {
      throw new ReferenceError(`Cannot find license -> ${license_include_path}`);
    }

    const license_data = File_System.readFileSync(license_include_path);
    return Mustache.render(license_data.toString(), View);
  },

  /**
   * @function includeConduct
   * @returns {render_callback}
   * @this {View} - AKA `dataView.json` configurations
   */
  includeConduct: function() {
    let conduct_include_path;
    if (typeof this === 'object') {
      conduct_include_path = Path.join(__dirname,
                                       '.mustache',
                                       'codes_of_conduct',
                                       this.code_of_conduct,
                                       'include.mustache');
    } else {
      conduct_include_path = Path.join(__dirname,
                                       '.mustache',
                                       'codes_of_conduct',
                                       this,
                                       'include.mustache');
    }

    if (!File_System.existsSync(conduct_include_path)) {
      throw new ReferenceError(`Cannot find conduct file -> ${conduct_include_path}`);
    }

    const conduct_data = File_System.readFileSync(conduct_include_path);
    return Mustache.render(conduct_data.toString(), View);
  },

  /**
   * @function stripForID
   * @returns {render_callback}
   * @this {View} - AKA `dataView.json` configurations
   */
  stripForID: () => {
    /**
     * @function render_callback
     * @param {string} text - Text that is encased within Mustache tag
     * @param {View} render - Reference to `View` configurations
     */
    const render_callback = (text, render) => {
      if (!!render.gfm) {
        return render(text).trim()
                           .toLowerCase()
                           .replace(/<[^>]*>?/gm, '--')
                           .replace(/[^a-z0-9_\- ]/g, '')
                           .replace(/ +/g, '-');
      }
      return render(text).trim()
                         .toLowerCase()
                         .replace(/[^a-z0-9_\- ]/g, '')
                         .replace(/ +/g, '-');
    }
    return render_callback;
  },

  /**
   * @function toTitleCase
   * @returns {render_callback}
   * @this {View} - AKA `dataView.json` configurations
   */
  toTitleCase: () => {
    /**
     * @function render_callback
     * @param {string} text - Text that is encased within Mustache tag
     * @param {View} render - Reference to `View` configurations
     */
    const render_callback = (text, render) => render(text).trim()
                                                          .replace(/<[^>]*>?/gm, '--')
                                                          .replace(/[^a-zA-Z0-9_\- ]/g, '')
                                                          .replace(/ +/g, '-')
                                                          .replace(/-/g, ' ')
                                                          .replace(/\b\w/g, l => l.toUpperCase());
    return render_callback;
  },

  /**
   * @function toLowerCase
   * @returns {render_callback}
   * @this {View}
   */
  toLowerCase: () => {
    /**
     * @function render_callback
     * @param {string} text - Text that is encased within Mustache tag
     * @param {View} render - Reference to `View` configurations
     */
    const render_callback = (text, render) => render(text).trim().toLowerCase();
    return render_callback;
  },

  /**
   * @function renderPartialsPath
   * @returns {render_callback}
   * @this {View}
   */
  renderPartialsPath: () => {
    /**
     * @function render_callback
     * @param {string} text - Text that is encased within Mustache tag
     * @param {View} render - Reference to `View` configurations
     */
    const render_callback = (text, render) => {
      const partials_path_list = render(text).replace(/\//g, Path.sep);
      const partials_abs_path = Path.join(__dirname, '.mustache', 'partials', partials_path_list);
      if (File_System.existsSync(partials_abs_path)) {
        return render(File_System.readFileSync(partials_abs_path).toString());
      } else {
        console.error(`Cannot find file -> ${partials_abs_path}`);
      }
    }
    return render_callback;
  }

};


/**
 * Main class for this file
 * @param {View} view
 * @param {Helpers} helpers
 */
class App {
  /**
   * @param {any} view
   * @param {Object} helpers
   */
  constructor(view, helpers) {
    this.view = view;

    Object.keys(helpers).forEach((key) => {
      if (!(key in view)) {
        this.view[key] = helpers[key];
      }
    });

    this.output_directory = view.output_directory ? view.output_directory : __dirname;
  }

  /**
   *
   */
  _renderConduct() {
    const in_path = Path.join(__dirname,
                              '.mustache',
                              'codes_of_conduct',
                              this.view.code_of_conduct,
                              'CODE_OF_CONDUCT.md');

    const conduct_data = File_System.readFileSync(in_path);

    const out_path = Path.join(this.output_directory, 'CODE_OF_CONDUCT.md')

    File_System.writeFile(out_path, Mustache.render(conduct_data.toString(), this.view), {'encoding': 'utf8'}, (err) => {
      if (err) {
        throw err;
      }

      console.log(`Wrote file -> ${out_path}`);
    });
  }

  /**
   * @param {String} directory_path
   */
  _makeDirectories(directory_path) {
    let checked_directory_path = '';
    directory_path.split(Path.sep).forEach((directory) => {
      if (directory !== '/' && !!directory) {
        checked_directory_path += `${Path.sep}${directory}`;
        if (!File_System.existsSync(checked_directory_path)) {
          console.log(`Making directory -> ${checked_directory_path}`);
          File_System.mkdirSync(checked_directory_path);
        }
      }
    });
  }

  /**
   * @param {string[]} partials_paths
   */
  _objectifyPartials(partials_paths) {
    const objectified_partials = {};
    if (!partials_paths) {
      return objectified_partials;
    }

    partials_paths.forEach((partials_path) => {
      const {name} = Path.parse(partials_path);

      console.log(`Reading ${name} from -> ${partials_path}`);

      File_System.readFile(partials_path, (err, data) => {
        if (err) {
          throw err;
        }

        objectified_partials[name] = data.toString();
      });
    });
    return objectified_partials;
  }

  /**
   *
   */
  renderFiles() {
    this.view.files.forEach(({in_path, out_path, partials, tags}) => {
      const objectified_partials = this._objectifyPartials(partials);
      File_System.readFile(in_path, (err, data) => {
        if (err) {
          throw err;
        }

        const rendered_mustache = Mustache.render(data.toString(), this.view, objectified_partials, tags);

        const full_out_path = Path.join(this.output_directory, out_path);

        this._makeDirectories(Path.dirname(full_out_path));

        File_System.writeFile(full_out_path, rendered_mustache, {'encoding': 'utf8'}, (err) => {
          if (err) {
            throw err;
          }

          console.log(`Wrote file -> ${out_path}`);
        });
      });
    });

    if (this.view.code_of_conduct) {
      this._renderConduct();
    }

    if (this.view.license) {
      const src_path = Path.join(__dirname, '.mustache', 'licenses', this.view.license, 'LICENSE');

      const dest_path = Path.join(this.output_directory, 'LICENSE');

      File_System.copyFile(src_path, dest_path, (err) => {
        if (err) {
          throw err;
        }

        console.log(`Copied file to -> ${dest_path}`);
      });
    }
  }

}


const main_app = new App(View, Helpers);
main_app.renderFiles();


/**
 * Returns call back function that parses text encapsulated by mustache tags
 * @callback render_callback
 * @param {string} text - Text that is encased within Mustache tag
 * @param {View} render - Reference to `View` configurations
 */
