"use strict"
class HardWorker {
    name;  
    get age(){ return this._age}
    set age(value){
      if((value > 100)|| (value < 1)){
       return
    }
      this._age = value;
    }
  
    get salary(){ return this._salary}
    set salary(value){
      if((value > 10000)|| (value < 100)){
       this.salary;
       return
    }
      this._salary = value;
    }
    toObject(){
      return {
      name: this.name,
      age: this.age,
      salary: this.salary
      }
    }
}
export {HardWorker};