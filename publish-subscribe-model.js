class EventEmitter {
  constructor(){
      this.subscribeCenter={};
  }
  
  emit(publicEvent){
      var handlers = this.subscribeCenter[publicEvent];
      if(handlers){
          
          handlers.forEach((item)=>{
              item();
          })
      }
  }
  on(subscribeEvent, handler){
      if( !this.subscribeCenter[subscribeEvent]){
           this.subscribeCenter[subscribeEvent]=[]
      }
      this.subscribeCenter[subscribeEvent].push(handler);
      
      
  }

}


class EventEmiter{
    constructor(){
        this.subscribeCenter={}
    }
    subscribe(event, handler){
        if(!this.subscribeCenter[event]){
            this.subscribeCenter[event]=[]
        }
        this.subscribeCenter[event].push(handler)
    }
    emmit(event){
        this.subscribeCenter[event].forEach((handler)=>{
            handler();
        })
    }
}
