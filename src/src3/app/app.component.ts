import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Book } from './book.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'My Library';
  books:Book[]=[{title:"enter title",author:"enter author name"}]
  library(data:NgForm){
     console.log(data.value)
    this.books.push(data.value);
  }
  delete(id:number)
  {
    this.books.splice(id,1);
  }
}
