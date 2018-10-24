import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trello-output',
  templateUrl: './trello-output.component.html',
  styleUrls: ['./trello-output.component.css']
})
export class TrelloOutputComponent implements OnInit {

  cards$ = new Object();
  date$ = new Date();
 
 

  constructor(private boards: DataService, private router: Router) { }

  ngOnInit() {
    this.boards.getCards().subscribe(
      boards => this.cards$ = boards
    ); 
  }
  
  
  
}
