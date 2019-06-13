import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  res :any
  display = ""
  numArray = []
  arr=""
  operatorCount=0
  oper = ''
  title = 'Calculator';
  insertChar(num){
    this.arr=this.arr+num;
    // this.display = `${this.numArray[0]} ${this.oper} ${this.numArray[1]}  `
    this.display=`${this.arr}`
    //this.display = `${this.numArray[0]?this.numArray[0]:''} ${this.oper?this.oper:''} ${this.numArray[1]?this.numArray[1]:''}  `
  }
  insertOperator(opp){
    if(this.operatorCount==0){
    this.arr=this.arr+opp;
      this.oper = opp;
      this.operatorCount=1;
      console.log(this.oper,opp)
      //  this.display = `${this.numArray[0]} ${this.oper} ${this.numArray[1]}  `
      this.display=`${this.arr}`
      //this.display = `${this.numArray[0]?this.numArray[0]:''} ${this.oper?this.oper:''} ${this.numArray[1]?this.numArray[1]:''}  `
  }}
  evaluate(){
    this.display=`${this.arr}`
    this.numArray=this.arr.split(this.oper)
    //this.display=`${this.numArray}`
    //this.display = `${this.numArray[0]} ${this.oper} ${this.numArray[1]}  `
//     this.display = `${this.numArray[0]?this.numArray[0]:''} ${this.oper?this.oper:''} ${this.numArray[1]?this.numArray[1]:''}   `
    switch (this.oper) {
      case '+':
       this.res = Number(this.numArray[0])+ Number(this.numArray[1] )
        break;
      case '-':
       this.res = Number(this.numArray[0]) - Number(this.numArray[1])
        break;
      case '*':
      this.res = Number(this.numArray[0]) * Number(this.numArray[1])
        break;
      case '/':
      this.res = Number(this.numArray[0]) / Number(this.numArray[1])
        break;
    }
  }
  reset(){
    this.numArray = []
    this.arr=""
    this.oper = ''
    this.res =""
    this.display = ""
    this.res=undefined
    this.operatorCount=0
  }

}
