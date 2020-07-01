import Vue from 'vue';
import plugin from '../src/index'

const $currentEnv = 'local'
  , $prefix = 'VUE-CONSOLES';

Vue.use(plugin, {
  currentEnv: $currentEnv,
  prefix: [$prefix, '_ENV_'],
  buildEnv: {
    local: true,
    dev: true,
    tst: true,
    pre: ['error'],
    production: ['error']
  },
}) 


describe('Vue Console log TEST', () => {
  describe('Create $log Check', () => {
    const vm = new Vue()
    test('$Log TEST', () => {
      expect(vm.$log).toBeDefined()
    });
    
    test('calls consoles with "hello"', () => {
      const msg = 'hello'
      const level = ['log', 'info', 'debug', 'warn', 'error']
      level.forEach(key => {
        console[key] = jest.fn();
        vm[`$${key}`](msg);
        expect(console[key]).toHaveBeenCalledWith($prefix, $currentEnv.toUpperCase(),'::',key.toUpperCase(),'::',msg);
      })
    });
  });
});