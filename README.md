# Vue Consoles 
>Vue 기반의 Window Console Log Plugin 

## Install 
```shell
npm i -s vue-consoles
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
    this.$log('Console log Test', 'Created'); 
  },
  mounted() {
    this.$log('Console log Test', 'Mounted'); 
  },
};
```
## Options
- ing...

## TODO
- [ ] using in vuex  
- [ ] History Cashe
