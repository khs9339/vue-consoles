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
    this.$info('TEST VUE-CONSOLES LOG', 'INFO')
    this.$warn('TEST VUE-CONSOLES LOG', 'WARN')
    this.$error('TEST VUE-CONSOLES LOG', 'ERROR')
    this.$debug('TEST VUE-CONSOLES LOG', 'DEBUG')
  }
};
```
## Options
| Key | Value | Type | Default | Description |
| --- |:---:|:---:|:---:|---|
| `currentEnv` | key of `buildEnv` | String | local | Current Build Env( ex: dev ) |
| `prefix` | Any | Array | ['_ENV_'] | Log Prefix Keyword <br><b>Reserved Key</b> <br>`_ENV_`: `currentEnv`<br>`_TIME_`: Now Time(TZ) |
|`console`| Console type | Array | ['log', 'info', 'debug', 'warn', 'error'] | Define the console logs you will use in your project |
| `buildEnv` | {`key`: Boolean or Array } | Object | {local: true} | Console settings to use by project environment <br> `false`: Can't not used <br>`true`: Use all types set in `console` <br> `Array`: Use only the set type. |

## TODO
- [ ] using in vuex  
- [ ] History Cashe
