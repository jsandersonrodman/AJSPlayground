import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
  }
  getCards(){
    return this.http.get('https://api.trello.com/1/boards/5bcddd825e131e5beaf49066/cards?key=6e256664ca3f037548b6d6fb1c1012ef&token=d4e4a3251e0b22449e624ae21946577e62320de4c7b294357ab1200447692e37');
  }
}
