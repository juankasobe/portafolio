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

    expect(pageText).toContain('Desarrollador de aplicaciones web y móviles');
    expect(pageText).toContain('Angular · Ionic · SQL');
    expect(pageText).not.toContain('videojuegos');
    expect(pageText).not.toContain('Godot');
    expect(pageText).not.toContain('Mario');
  });

});
