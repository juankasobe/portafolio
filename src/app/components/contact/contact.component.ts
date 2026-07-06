import { Component } from '@angular/core';
import { contactContent } from '../../content/portfolio-content';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  protected readonly contact = contactContent;
}
