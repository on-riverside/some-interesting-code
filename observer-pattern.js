class Observerd {
  constructor(name, state='walking'){
      this.name=name
      this.state=state
      this.observers=[]
  }
  setObserver(observer){
      this.observers.push(observer)
  }
  setState(state){
      this.state=state
      this.observers.forEach((ob)=>{
          ob.update(this)
      })
  }
  
}
class Observer {
  constructor(){}
  update(observerd){
      console.log(observerd.name + 'is ' + observerd.state)
  }
}

class Observed{
    constructor(){
        this.observers = []
        this.state = 'eating'
    }
    addObserver(observer){
        this.observers.push(observer)
    }
    setstate(state){
        this.state = state
        this.observers.forEach((observer)=>{
            observer.update(this)
        })
    }
}
class Observer{
    constructor(){}
    update(observerd){
        console.log('he is '+ observerd.state)
    }
}

var observed1=new Observed();
var observer1=new Observer();
observed1.addObserver(observer1);
