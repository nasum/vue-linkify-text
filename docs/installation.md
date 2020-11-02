# Installation

## Direct Download / CDN

https://unpkg.com/vue-linkify-text/dist/vue-linkify-text 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-linkify-text@{{ $version }}/dist/vue-linkify-text.js
 
Include vue-linkify-text after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-linkify-text/dist/vue-linkify-text.js"></script>
```

## NPM

```sh
$ npm install vue-linkify-text
```

## Yarn

```sh
$ yarn add vue-linkify-text
```

When used with a module system, you must explicitly install the `vue-linkify-text` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-linkify-text from 'vue-linkify-text'

Vue.use(vue-linkify-text)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-linkify-text` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-linkify-text.git node_modules/vue-linkify-text
$ cd node_modules/vue-linkify-text
$ npm install
$ npm run build
```

