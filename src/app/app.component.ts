import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
value:number = 0;

getValue(event :any){
  this.value = parseInt(event.target.value);
}

incr(){
  this.value = this.value + 5;
}
decr(){
  this.value = this.value - 1;
}

}
