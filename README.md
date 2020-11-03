
# vue-linkify-text
[![GitHub open issues](https://img.shields.io/github/issues/nasum/vue-linkify-text.svg?maxAge=2592000)](https://github.com/nasum/vue-linkify-text/issues)
[![Npm version](https://img.shields.io/npm/v/vue-linkify-text.svg?maxAge=2592000)](https://www.npmjs.com/package/vue-linkify-text)

## Usage
```HTML
<LinkifyText :text="hello https://example.com"></LinkifyText>
```

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import VueLinkifyText from "@/index";

const app = createApp(App);
app.use(VueLinkifyText);
app.mount("#app");
```
## API

## Installation
```
npm install vue-linkify-text
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```
