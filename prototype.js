function Human(name) {
    this.name = name
    this.kingdom = 'animal'
    this.color = ['yellow', 'white', 'brown', 'black']
    
}
Human.prototype.getName = function(){
    return this.name
}

function Chinese(name,age) {
    Human.call(this,name)
    this.color = 'yellow'
    this.age = age
}
Chinese.prototype=Object.create(Human.prototype)
Chinese.prototype.constructor = Chinese
Chinese.prototype.getAge = function(){
    return this.age
}

function Human(name='xiaoming'){
    this.name = name
    this.color = ['white','black','brown','yellow']
}
Human.prototype.getName=function(){
    console.log(this.name)
}
function Chinese(name='xiaohong',age=25){
    Human.call(this, name)
    this.age = age
    this.color = 'yellow'
}
Chinese.prototype=Object.create(Human.prototype);
Chinese.prototype.constructor= Chinese
Chinese.prototype.getAge = function (){
    console.log(this.age)
}
