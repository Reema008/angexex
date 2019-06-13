import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ""
  author = ""
  idCount:number = 0;
  libArray = [];

  addObject(){
    this.idCount = this.idCount + 1
    this.libArray.push({
      id:this.idCount,
      title: this.title,
      author:this.author
    })
    this.title = ""
    this.author = ""
  }
  delByID(num){
    this.libArray = this.libArray.filter((item) => item.id !== num);
  }
  
}
