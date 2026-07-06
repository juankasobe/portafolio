import { Component } from '@angular/core';
import { footerContent } from '../../content/portfolio-content';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly footer = footerContent;
}
