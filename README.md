# Vue Consoles 
>Vue 기반의 Window Console Log Plugin 

## Install 
```shell
npm i -s vue-consoles 
yarn add vue-consoles 
```

## Usage
### - Settings
```js
// main.js
import VueConsoles from "vue-consoles";
...

Vue.use(VueConsoles, options);
```

### - Using
```js
// example.vue
export default {
  created() {
    this.$log('TEST VUE-CONSOLES LOG', 'LOG')
    this.$warn('TEST VUE-CONSOLES LOG', 'WARN')
    this.$error('TEST VUE-CONSOLES LOG', 'ERROR')
  }
};
```
## Options
- ing...

## TODO
- [ ] using in vuex  
- [ ] History Cashe
