import { Component } from '@angular/core';
import { experienceContent } from '../../content/portfolio-content';

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {
  protected readonly experience = experienceContent;
}
