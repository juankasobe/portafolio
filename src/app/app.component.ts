import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    AboutComponent,
    ProyectsComponent,
    HomeComponent,
    ExperienciaComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portafolio';
}
