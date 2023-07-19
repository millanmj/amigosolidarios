import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  rowHeight: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    tiles: Tile[] = [
      {text: 'One', cols: 4, rows: 1, color: 'lightblue', rowHeight: "1:1"},
      {text: 'Two', cols: 4, rows: 1, color: 'lightgreen', rowHeight: "4:1"},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink', rowHeight: "4:1"},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', rowHeight: "4:1"},
      {text: 'Five', cols: 2, rows: 1, color: '#DDBDF1', rowHeight: "4:1"},
      {text: 'Six', cols: 2, rows: 1, color: '#DDBDF1', rowHeight: "4:1"},
    ];


}
