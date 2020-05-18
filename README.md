# Build Dot GitHub
[heading__title]:
  #build-dot-github
  "&#x2B06; Top of ReadMe File"


Organization `.github` repositories grown from Mustache templates.


## [![Byte size of dot-github][badge__master__dot_github__source_code]][dot_github__master__source_code] [![Open Issues][badge__issues__dot_github]][issues__dot_github] [![Open Pull Requests][badge__pull_requests__dot_github]][pull_requests__dot_github] [![Latest commits][badge__commits__dot_github__master]][commits__dot_github__master]


------


#### Table of Contents


- [:arrow_up: Top of ReadMe File][heading__title]

- [:zap: Quick Start][heading__quick_start]

  - [:memo: Track Organization Customizations][heading__track_organization_customizations]
  - [:factory: Utilize Dot GitHub][heading__utilize]
  - [:floppy_disk: Commit and Push][heading__commit_and_push]

- [&#x1F5D2; Notes][heading__notes]

- [:card_index: Attribution][heading__attribution]

- [&#x2696; License][heading__license]


------



## Quick Start
[heading__quick_start]:
  #quick-start
  "&#9889; Perhaps as easy as one, 2.0,..."



Clone the source code of this repository somewhere...


```Bash
mkdir -vp ~/git/hub/github-utilities
cd ~/git/hub/github-utilities


git clone git@github.com:github-utilities/dot-github.git
cd dot-github
```


To update in the future , `pull` the `master` branch of this repository


```Bash
cd ~/git/hub/github-utilities/dot-github

git pull origin master
```


### Track Organization Customizations
[heading__track_organization_customizations]:
  #track-organization-customizations
  "&#x1F4DD; Suggested Git commands for having a good time customizing code from this repository"


Checkout a branch for tracking Organization customizations...


```Bash
cd ~/git/hub/github-utilities/dot-github


git checkout -b org-name
```


Modify the `dataView.json` file, usually by removing unneeded `languages` and editing lines above that...


```JSON
{
  "ghf": true,
  "output_directory": "~/git/hub/org-name/.github",
  "name": "org-name",
  "author": "your-name",
  "email": "account@host.tld",
  "description": "Quick statement on what this Organization aims to accomplish",
  "license": "AGPL-3.0",
  "code_of_conduct": "contributor-covenant",
  "funding": {
    "key": "liberapay",
    "url": "org-name"
  },
  "languages": [
    {
      "name": "Awk",
      "emoji_word": ":tophat:",
      "emoji_code": "&#x1F3A9;"
    },
    {
      "name": "Bash",
      "emoji_word": ":shell:",
      "emoji_code": "&#x1F41A;"
    },
    {
      "name": "CSS",
      "emoji_word": ":paintbrush:",
      "emoji_code": "&#x1F58C;"
    },
    {
      "name": "Docker",
      "emoji_word": ":whale2:",
      "emoji_code": "&#x1F40B;"
    },
    {
      "name": "HTML",
      "emoji_word": ":spider_web:",
      "emoji_code": "&#x1F578;"
    },
    {
      "name": "JavaScript",
      "emoji_word": ":coffee:",
      "emoji_code": "&#x2615;"
    },
    {
      "name": "Kivy",
      "emoji_word": ":snake:",
      "emoji_code": "&#x1F40D;"
    },
    {
      "name": "Liquid",
      "emoji_word": ":fountain:",
      "emoji_code": "&#x26F2;"
    },
    {
      "name": "MarkDown",
      "emoji_word": ":memo:",
      "emoji_code": "&#x1F4DD;"
    },
    {
      "name": "MustacheJS",
      "emoji_word": ":wavy_dash:",
      "emoji_code": "&#x3030;"
    },
    {
      "name": "Python",
      "emoji_word": ":snake:",
      "emoji_code": "&#x1F40D;"
    },
    {
      "name": "Rust",
      "emoji_word": ":gear:",
      "emoji_code": "&#x2699;"
    },
    {
      "name": "SCSS",
      "emoji_word": ":factory:",
      "emoji_code": "&#x1F3ED;"
    },
    {
      "name": "TypeScript",
      "emoji_word": ":symbols:",
      "emoji_code": "&#x1F523;"
    }
  ],
  "files": [
    {
      "in_path": ".mustache/.github/ISSUE_TEMPLATE/bug_report.md.mst",
      "out_path": ".github/ISSUE_TEMPLATE/bug_report.md"
    },
    {
      "in_path": ".mustache/.github/ISSUE_TEMPLATE/feature_request.md.mst",
      "out_path": ".github/ISSUE_TEMPLATE/feature_request.md"
    },
    {
      "in_path": ".mustache/.github/pull_request_template.md.mst",
      "out_path": ".github/pull_request_template.md"
    },
    {
      "in_path": ".mustache/.github/PULL_REQUEST_TEMPLATE/bug_fix.md.mst",
      "out_path": ".github/PULL_REQUEST_TEMPLATE/bug_fix.md"
    },
    {
      "in_path": ".mustache/.github/PULL_REQUEST_TEMPLATE/feature_addition.md.mst",
      "out_path": ".github/PULL_REQUEST_TEMPLATE/feature_addition.md"
    },
    {
      "in_path": ".mustache/.github/README.md.mst",
      "out_path": ".github/README.md"
    },
    {
      "in_path": ".mustache/CONTRIBUTING.md.mst",
      "out_path": "CONTRIBUTING.md",
      "partials": [
        ".mustache/partials/development-setup/linux.md.mst",
        ".mustache/partials/development-setup/windows.md.mst",
        ".mustache/partials/git-tips/branches.md.mst",
        ".mustache/partials/git-tips/commits.md.mst",
        ".mustache/partials/how-to-contribute/open-issues.md.mst",
        ".mustache/partials/how-to-contribute/report-bugs.md.mst",
        ".mustache/partials/style-guidelines/awk.md.mst",
        ".mustache/partials/style-guidelines/bash.md.mst",
        ".mustache/partials/style-guidelines/css.md.mst",
        ".mustache/partials/style-guidelines/docker.md.mst",
        ".mustache/partials/style-guidelines/html.md.mst",
        ".mustache/partials/style-guidelines/javascript.md.mst",
        ".mustache/partials/style-guidelines/liquid.md.mst",
        ".mustache/partials/style-guidelines/markdown.md.mst",
        ".mustache/partials/style-guidelines/mustachejs.md.mst",
        ".mustache/partials/style-guidelines/python.md.mst",
        ".mustache/partials/style-guidelines/rust.md.mst",
        ".mustache/partials/style-guidelines/scss.md.mst",
        ".mustache/partials/style-guidelines/typescript.md.mst"
      ]
    },
    {
      "in_path": ".mustache/FUNDING.yml.mst",
      "out_path": "FUNDING.yml"
    },
    {
      "in_path": ".mustache/SUPPORT.md.mst",
      "out_path": "SUPPORT.md"
    },
    {
      "in_path": ".mustache/SECURITY.md.mst",
      "out_path": "SECURITY.md"
    }
  ]
}
```


Add and commit changes...


```Bash
git add -A .

git commit -m 'Customizes defaults from master branch for org-name'
```


### Utilize Dot GitHub
[heading__utilize]:
  #utilize-dot-github
  "&#x1F3ED; How to make use of this submodule within another project"


Initialize a `.github` repository for your Organization...


```Bash
mkdir -vp ~/git/hub/org-name

git init ~/git/hub/org-name/.github
```


> Note, above should match the same path as defined by `output_directory` within your customized `dataView.json` file.


Issue `npm run build` from this repository...


```Bash
cd ~/git/hub/github-utilities/dot-github

npm run build
```


### Commit and Push
[heading__commit_and_push]:
  #commit-and-push
  "&#x1F4BE; It may be just this easy..."


Change directories to the `.github` repository for your Organization, and track built files...

```Bash
cd ~/git/hub/org-name/.github

git add -A .

git commit -m 'Initial commit'
```


After creating a `.github` repository on GitHub, add a remote and push


```Bash
git remote add hub git@github.com:org-name/.github.git

git push hub master
```


**:tada: Excellent :tada:** your Organization is now ready to begin unitizing documents built from this repository!


___


## Notes
[heading__notes]:
  #notes
  "&#x1F5D2; Additional things to keep in mind when developing"


Pull Requests are most welcomed to add features and/or fix bugs. for example the following four steps show how to add `lang-name` to the list of supported style guidelines within the built `CONTRIBUTING.md` file.


`0` Checkout the `master` branch of this repository and write a Mustache template...


```Bash
cd ~/git/hub/github-utilities/dot-github


git checkout master
```


**`.mustache/partials/style-guidelines/lang-name.md.mst`**


```MarkDown
- Lines of code should strive for less than `120` characters in length

- Comments within code should strive for less than `80`  characters in length

...
```


`1` Add _`lang-name`_ the list of `languages` and `partials`...


**`dataView.json` (`languages` snip)**


```JSON
...

  "languages": [
    {
      "name": "Awk",
      "emoji_word": ":tophat:",
      "emoji_code": "&#x1F3A9;"
    },
    {
      "name": "Bash",
      "emoji_word": ":shell:",
      "emoji_code": "&#x1F41A;"
    },
    {
      "name": "CSS",
      "emoji_word": ":paintbrush:",
      "emoji_code": "&#x1F58C;"
    },
    {
      "name": "Docker",
      "emoji_word": ":whale2:",
      "emoji_code": "&#x1F40B;"
    },
    {
      "name": "HTML",
      "emoji_word": ":spider_web:",
      "emoji_code": "&#x1F578;"
    },
    {
      "name": "JavaScript",
      "emoji_word": ":coffee:",
      "emoji_code": "&#x2615;"
    },
    {
      "name": "Kivy",
      "emoji_word": ":snake:",
      "emoji_code": "&#x1F40D;"
    },
    {
      "name": "lang-name",
      "emoji_word": ":frog:",
      "emoji_code": "&#x1F438;"
    }
    {
      "name": "Liquid",
      "emoji_word": ":fountain:",
      "emoji_code": "&#x26F2;"
    },
    {
      "name": "MarkDown",
      "emoji_word": ":memo:",
      "emoji_code": "&#x1F4DD;"
    },
    {
      "name": "Python",
      "emoji_word": ":snake:",
      "emoji_code": "&#x1F40D;"
    },
    {
      "name": "SCSS",
      "emoji_word": ":factory:",
      "emoji_code": "&#x1F3ED;"
    }
  ],

...
```


**`dataView.json` (`partials` snip)**


```JSON
...

    {
      "in_path": ".mustache/CONTRIBUTING.md.mst",
      "out_path": "CONTRIBUTING.md",
      "partials": [
        ".mustache/partials/development-setup/linux.md.mst",
        ".mustache/partials/development-setup/windows.md.mst",
        ".mustache/partials/git-tips/branches.md.mst",
        ".mustache/partials/git-tips/commits.md.mst",
        ".mustache/partials/how-to-contribute/open-issues.md.mst",
        ".mustache/partials/how-to-contribute/report-bugs.md.mst",
        ".mustache/partials/style-guidelines/awk.md.mst",
        ".mustache/partials/style-guidelines/bash.md.mst",
        ".mustache/partials/style-guidelines/css.md.mst",
        ".mustache/partials/style-guidelines/docker.md.mst",
        ".mustache/partials/style-guidelines/html.md.mst",
        ".mustache/partials/style-guidelines/javascript.md.mst",
        ".mustache/partials/style-guidelines/lang-name.md.mst",
        ".mustache/partials/style-guidelines/liquid.md.mst",
        ".mustache/partials/style-guidelines/markdown.md.mst",
        ".mustache/partials/style-guidelines/python.md.mst",
        ".mustache/partials/style-guidelines/scss.md.mst"
      ]
    },

...
```


`2` Add and commit changes...


```Bash
git add -A .

git commit -m 'Adds lang-name to available style guidelines'
```


`3` After forking on GitHub, add it as a remote and push changes


```Bash
git remote add fork git@github.com:your-name/dot-github.git

git push fork master
```


`4` Open a Pull Request when your changes are ready.


___


## Attribution
[heading__attribution]:
  #attribution
  "&#x1F4C7; Resources that where helpful in building this project so far."


Resources that where helpful in building this project so far


- [mustache source `readPartials`](https://github.com/janl/mustache.js/blob/master/bin/mustache#L76)

- [mustache documentation `API`](https://github.com/janl/mustache.js#api)

- [Contributor Covenant -- Code of Conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html)

- [GitHub -- Referencing Issues and Pull Requests](https://help.github.com/en/articles/basic-writing-and-formatting-syntax#referencing-issues-and-pull-requests)

- [GitHub -- `janl/mustache.js#357` -- how to print literal `{` in front of mustache variable?](https://github.com/janl/mustache.js/issues/357#issuecomment-35220756)


___


## License
[heading__license]:
  #license
  "&#x2696; Legal bits of Open Source software"


Legal bits of Open Source software


```
Dot GitHub ReadMe documenting how things like this could be utilized
Copyright (C) 2020  S0AndS0

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation; version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```



[badge__commits__dot_github__master]:
  https://img.shields.io/github/last-commit/github-utilities/dot-github/master.svg

[commits__dot_github__master]:
  https://github.com/github-utilities/dot-github/commits/master
  "&#x1F4DD; History of changes on this branch"


[dot_github__community]:
  https://github.com/github-utilities/dot-github/community
  "&#x1F331; Dedicated to functioning code"


[dot_github__gh_pages]:
  https://github.com/github-utilities/dot-github/tree/gh-pages
  "Source code examples hosted thanks to GitHub Pages!"



[badge__demo__dot_github]:
  https://img.shields.io/website/https/github-utilities.github.io/dot-github/index.html.svg?down_color=darkorange&down_message=Offline&label=Demo&logo=Demo%20Site&up_color=success&up_message=Online

[demo__dot_github]:
  https://github-utilities.github.io/dot-github/index.html
  "&#x1F52C; Check the example collection tests"


[badge__issues__dot_github]:
  https://img.shields.io/github/issues/github-utilities/dot-github.svg

[issues__dot_github]:
  https://github.com/github-utilities/dot-github/issues
  "&#x2622; Search for and _bump_ existing issues or open new issues for project maintainer to address."


[badge__pull_requests__dot_github]:
  https://img.shields.io/github/issues-pr/github-utilities/dot-github.svg

[pull_requests__dot_github]:
  https://github.com/github-utilities/dot-github/pulls
  "&#x1F3D7; Pull Request friendly, though please check the Community guidelines"


[badge__master__dot_github__source_code]:
  https://img.shields.io/github/repo-size/github-utilities/dot-github

[dot_github__master__source_code]:
  https://github.com/github-utilities/dot-github/
  "&#x2328; Project source!"
