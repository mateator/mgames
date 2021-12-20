import { Injectable } from '@angular/core';
import { Game } from '../explore-container/interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games: Game[];
  constructor() { }
  getData(){
    // this.games = [{name:'w', description: 's',imgUrl:'a',imgUrlScreen: 's', guguelPhlay: 'a'}];
    // {name:'w', description: 's',imgUrl:'a',imgUrlScreen: 's', guguelPhlay: 'a'}
  }
}
