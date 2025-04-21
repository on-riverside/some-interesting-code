var person = { gender: 'male', age: '25', name: 'hello world', height: 28, weight: 32 };
function Observe(target) {
  if (typeof target !== 'object' || target == null) {
      return target
  }
  for (var key in target) {
      defineReactive(target, key, target[key])
  }
}
function defineReactive(target, key, value) {
  Object.defineProperty(target, key, {
      get: function () {
          return value
      },
      set: function (newVal) {
          if (newVal !== value) {
              value = newVal
              // some render function eg:_render(ul)
          }

      }

  })
}
Observe(person)