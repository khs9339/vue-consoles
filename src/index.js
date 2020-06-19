export default {
  install (Vue, opt) {
    try {
      if (!console) throw new Error('Not Found Window Console');
      if (!opt.buildEnv[opt.currentEnv]) throw new Error('This Environment is not available');
      const prefix = chgPreFix(opt);
      const logs = opt.buildEnv[opt.currentEnv] === true ? opt.console : opt.buildEnv[opt.currentEnv];

      opt.console.forEach((key) => {
        Object.defineProperty(Vue.prototype, `$${key}`, {
          enumerable: false,
          configurable: false,
          get () {
            return logs.includes(key) ? console[key].bind(this, ...prefix, '::', key.toUpperCase(), '::') : (msg) => {};
          }
        })
      })
    } catch (err) {
      opt.console.forEach(key => {
        Vue.prototype[`$${key}`] = (msg = '') => {};
      })
    }
  }
}