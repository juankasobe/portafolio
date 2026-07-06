import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'portafolio' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portafolio');
  });

  it('should render the portfolio owner name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Juan Carlos Soberón');
  });

  it('should render the main portfolio sections', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#home')).not.toBeNull();
    expect(compiled.querySelector('#about')).not.toBeNull();
    expect(compiled.querySelector('#proyectos')).not.toBeNull();
    expect(compiled.querySelector('#experiencia')).not.toBeNull();
  });

  it('should expose the downloadable CV link', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const cvLink = compiled.querySelector(
      'a[download="CV_Juan_Soberon.pdf"]'
    ) as HTMLAnchorElement | null;

    expect(cvLink).not.toBeNull();
    expect(cvLink?.getAttribute('href')).toBe('CV_Juan_Soberon.pdf');
    expect(cvLink?.textContent).toContain('Descargar CV');
  });

  it('should focus the public content on web and mobile development', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const pageText = compiled.textContent ?? '';

    expect(pageText).toContain('Desarrollador web y móvil enfocado en Angular e Ionic');
    expect(pageText).toContain('Angular · Ionic · MySQL');
    expect(pageText).toContain('Apps móviles');
    expect(pageText).not.toContain('videojuegos');
    expect(pageText).not.toContain('Godot');
    expect(pageText).not.toContain('Mario');
  });

  it('should present a concrete about profile without broad claims', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const pageText = compiled.textContent ?? '';

    expect(pageText).toContain('interfaces claras, responsivas y mantenibles');
    expect(pageText).toContain('Angular e Ionic');
    expect(pageText).toContain('Ingeniería en Ciencias de la Computación');
  });

  it('should render skills below the education cards in the about details column', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const aboutDetails = compiled.querySelector('.about-details');
    const educationGrid = aboutDetails?.querySelector('.education-grid');
    const skillsPanel = aboutDetails?.querySelector('.skills-panel');

    expect(aboutDetails).not.toBeNull();
    expect(educationGrid).not.toBeNull();
    expect(skillsPanel).not.toBeNull();
    expect(educationGrid?.compareDocumentPosition(skillsPanel as Node)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    );
  });

  it('should describe experience with credible support and maintenance details', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const pageText = compiled.textContent ?? '';

    expect(pageText).toContain('soporte técnico, mantenimiento y corrección de incidencias');
    expect(pageText).toContain('software e infraestructura');
    expect(pageText).toContain('sistemas empresariales');
  });

  it('should explain the domotics project value and stack', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const pageText = compiled.textContent ?? '';
    const projectLink = compiled.querySelector(
      'a[aria-label="Ver repositorio de la app de domótica en GitHub"]'
    ) as HTMLAnchorElement | null;

    expect(pageText).toContain('Control móvil para luces inteligentes');
    expect(pageText).toContain('Rol');
    expect(pageText).toContain('Ionic');
    expect(pageText).toContain('Angular');
    expect(projectLink).not.toBeNull();
    expect(projectLink?.getAttribute('href')).toBe(
      'https://github.com/juankasobe/smartHome.git'
    );
  });

});
