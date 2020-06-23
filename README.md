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

Vue.use(VueConsoles, {
  currentEnv: 'local',
  prefix: ['VUE-CONSOLES', '_ENV_'],
  console: ['log', 'warn', 'error'],
  buildEnv: {
    local: true,
    dev: true,
    tst: ['warn', 'error'],
    pre: ['error'],
    prod: false
  },
}) 
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
| Key | Value | Type | Description |
| --- |:---:|:---:|---|
| `currentEnv` | key of buildEnv | String | Current Build Env( ex: dev ) |
| prefix | Any | Array | Log Prefix Keyword <br><b>Reserved Key</b> <br>`_ENV_`: `currentEnv`<br>`_TIME_`: now Time(TZ) |
|console|['log', 'info', 'warn', 'error', 'dir', 'table']| Array | Define the consolelogs you will use in your project |
| buildEnv | {`key`: Boolean or Array } | Object | Console settings to use by project environment <br> `false`: Can't not used <br>`true`: Use all types set in console <br> `Array`: Use only the set type. |

## TODO
- [ ] using in vuex  
- [ ] History Cashe
