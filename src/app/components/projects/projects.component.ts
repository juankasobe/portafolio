import { Component } from '@angular/core';
import { projectsContent } from '../../content/portfolio-content';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  protected readonly projects = projectsContent;
}
