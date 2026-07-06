import { Component } from '@angular/core';
import { heroContent } from '../../content/portfolio-content';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly hero = heroContent;
}
