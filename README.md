# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
局域网问题：
config/index.js修改host: 'localhost'为host: '0.0.0.0'

发布github问题：
问题：config/index.js修改：assetsPublicPath:'/' 为 assetsPublicPath:'./'
buld/utils.js修改在if（options.extract）{fallback:xxx后加publicPath:'../../'}

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
