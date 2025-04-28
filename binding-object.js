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

var person ={name:'xiaoming', gender:'male', age: 25}
function renderList(){
    listHtml = ` I am ${person.name}. i am ${person.age} years old and i am ${person.gender}`
    document.getElementsByTagName('body')[0].innerHTML = listHtml
}

function observe(obj){
    if(typeof obj !== 'object' || obj === null) return 
    for (var key in obj){
        let value =  obj[key]
        console.log('key', key)
        console.log('obj', obj)
        console.log('obj[key]', obj[key])
        
        Object.defineProperty(obj, key, {
            get: function(){
                return value
            },
            set: function(newVal){
                if(value!==newVal){
                    value=newVal
                    renderList()
                }
            }
        })
    }
    console.log('value', value)
}
observe(person)
