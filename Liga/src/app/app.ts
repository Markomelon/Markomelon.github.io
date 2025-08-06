import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTab, MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, MatTab],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Liga');
}
