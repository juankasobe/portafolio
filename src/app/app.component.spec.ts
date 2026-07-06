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
    expect(compiled.querySelector('#contacto')).not.toBeNull();
    expect(compiled.querySelector('footer')).not.toBeNull();
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

  it('should render contact information and essential links without email CTAs', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const contact = compiled.querySelector('#contacto') as HTMLElement | null;
    const mailtoLinks = compiled.querySelectorAll('a[href^="mailto:"]');
    const emailText = contact?.querySelector('.contact-email');
    const linkedinLink = contact?.querySelector(
      'a[aria-label="Ver perfil de Juan Carlos Soberón en LinkedIn"]'
    ) as HTMLAnchorElement | null;
    const githubLink = contact?.querySelector(
      'a[aria-label="Ver perfil de Juan Carlos Soberón en GitHub"]'
    ) as HTMLAnchorElement | null;
    const contactCvLink = contact?.querySelector(
      'a[download="CV_Juan_Soberon.pdf"]'
    ) as HTMLAnchorElement | null;

    expect(contact?.textContent).toContain('Conversemos sobre tu próxima interfaz web o móvil');
    expect(contact?.textContent).not.toContain('Escribirme por correo');
    expect(emailText?.textContent).toContain('juanka5200@outlook.com');
    expect(mailtoLinks.length).toBe(0);
    expect(linkedinLink?.getAttribute('href')).toBe(
      'https://www.linkedin.com/in/juan-sober%C3%B3n-573446277'
    );
    expect(githubLink?.getAttribute('href')).toBe('https://github.com/juankasobe');
    expect(contactCvLink?.getAttribute('href')).toBe('CV_Juan_Soberon.pdf');
  });

  it('should render footer ownership and essential links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const footer = compiled.querySelector('footer') as HTMLElement | null;
    const currentYear = new Date().getFullYear().toString();
    const footerLinks = Array.from(
      footer?.querySelectorAll('a') ?? []
    ) as HTMLAnchorElement[];

    expect(footer?.textContent).toContain(currentYear);
    expect(footer?.textContent).toContain('Juan Carlos Soberón');
    expect(footer?.textContent).toContain('Desarrollo web y móvil');
    expect(footerLinks.map((link) => link.getAttribute('href'))).toEqual([
      '#home',
      'https://github.com/juankasobe',
    ]);
  });

  it('should not render mailto links anywhere in the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('a[href^="mailto:"]').length).toBe(0);
    expect(compiled.textContent).toContain('juanka5200@outlook.com');
  });

});
