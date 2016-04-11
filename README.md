[![Join the chat at https://gitter.im/mimacom/angular2-sneak-peek](https://badges.gitter.im/mimacom/angular2-sneak-peek.svg)](https://gitter.im/mimacom/angular2-sneak-peek?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Build Status](https://travis-ci.org/mimacom/angular2-sneak-peek.svg?branch=master)](https://travis-ci.org/mimacom/angular2-sneak-peek)
### Requirements

  * git
  * node (version >= 4.0), npm
  * some editor

### Quick start
```bash
# clone our repo
$ git clone https://github.com/mimacom/angular2-sneak-peek.git

# change directory to repo
$ cd angular2-sneak-peek

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```
go to [http://localhost:8080](http://localhost:8080) in your browser.

### File Structure
```
angular2-sneak-peek
│   .editorconfig
│   .gitignore
│   package.json
│   README.md
│   tsconfig.json
│   tslint.json
│   typedoc.json
│   typings.json
│   webpack.config.js
│
└───src
    │   bootstrap.ts
    │   vendor.ts
    │
    ├───app
    │       app.html
    │       app.scss
    │       app.component.ts
    │
    ├───public
    │   │   index.html
    │   │
    │   └───img
    ├───shims
    │       shims_for_IE.js
    │
    └───style
            main.scss
```

# License
 [MIT](/LICENSE)
