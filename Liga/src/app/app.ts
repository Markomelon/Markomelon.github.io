import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTab } from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  score: number;
  played: number;
}

const FAKE_DATA: PeriodicElement[] = [
  {position: 1, name: 'Nicole', score: 10, played: 5},
  {position: 2, name: 'Marko', score: 9, played: 5},
  {position: 3, name: 'Sascha', score: 8, played: 5},
  {position: 4, name: 'Dominik', score: 6, played: 4},
  {position: 5, name: 'Micha', score: 4, played: 4},
  {position: 6, name: 'Max', score: 2, played: 3},

];


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, MatTab, MatTableModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
  
})
export class App {
  protected readonly title = signal('Liga');
  displayedColumns: string[] = ['position', 'name', 'score', 'played'];
  datasource = FAKE_DATA;
}



