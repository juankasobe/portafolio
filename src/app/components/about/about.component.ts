import { Component } from '@angular/core';
import { aboutContent } from '../../content/portfolio-content';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  protected readonly about = aboutContent;
}
