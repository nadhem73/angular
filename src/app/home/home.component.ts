import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  v1: string = "hello";
   v3(){
    alert("vous aver cliquer");
  }
}
