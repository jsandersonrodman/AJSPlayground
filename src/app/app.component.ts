import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Test Site';
  date2$ = new Date();
  onStartUp();

  onStartUp(){
    console.log('THIS IS A TEST');
  }

  

}


