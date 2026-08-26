import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  const renderPortfolio = () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    return { fixture, compiled: fixture.nativeElement as HTMLElement };
  };

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

  it('should describe support and maintenance experience accurately', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const pageText = compiled.textContent ?? '';

    expect(pageText).toContain('soporte técnico, mantenimiento y corrección de incidencias');
    expect(pageText).toContain('software e infraestructura');
    expect(pageText).toContain('sistemas empresariales');
    expect(pageText).toContain('Mazpartes');
    expect(pageText).toContain('Instalación de hardware');
    expect(pageText).toContain('Operación del sistema contable Odoo');
    expect(pageText).toContain('Implementaciones de Odoo para otras empresas');
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

  it('should render projects in an accessible manually controlled carousel', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const carousel = compiled.querySelector<HTMLElement>('.projects-carousel');
    const slides = Array.from(compiled.querySelectorAll<HTMLElement>('.project-slide'));
    const controls = Array.from(compiled.querySelectorAll<HTMLButtonElement>('.carousel-arrow'));
    const carouselShell = compiled.querySelector('.projects-carousel-shell');

    expect(carousel).not.toBeNull();
    expect(carouselShell?.querySelector('.projects-carousel')).toBe(carousel);
    expect(carouselShell?.querySelector('.projects-carousel-controls')).not.toBeNull();
    expect(carousel?.getAttribute('role')).toBe('region');
    expect(carousel?.getAttribute('aria-roledescription')).toBe('carrusel');
    expect(carousel?.getAttribute('aria-label')).toBe('Carrusel de proyectos');
    expect(carousel?.getAttribute('aria-describedby')).toBe('projects-carousel-instructions');
    expect(carousel?.getAttribute('aria-live')).toBe('off');
    expect(carousel?.getAttribute('tabindex')).toBe('0');
    expect(compiled.querySelector('.projects-track')?.tagName).toBe('OL');
    expect(slides.length).toBe(3);
    expect(slides[0]?.getAttribute('id')).toBe('project-0');
    expect(slides[0]?.querySelector('article')?.getAttribute('aria-roledescription')).toBe(
      'diapositiva'
    );
    expect(compiled.querySelector('.projects-pagination')).toBeNull();
    expect(compiled.querySelectorAll('a.carousel-control').length).toBe(0);
    expect(controls.length).toBe(2);
    expect(controls[0]?.getAttribute('type')).toBe('button');
    expect(controls[0]?.getAttribute('aria-label')).toBe('Mostrar proyecto anterior');
    expect(controls[0]?.disabled).toBeTrue();
    expect(controls[1]?.getAttribute('type')).toBe('button');
    expect(controls[1]?.getAttribute('aria-label')).toBe('Mostrar proyecto siguiente');
    expect(controls[1]?.disabled).toBeFalse();
  });

  it('should render the verified Android project details and public repositories', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectCards = Array.from(compiled.querySelectorAll<HTMLElement>('.project-card'));
    const toDoAppCard = projectCards.find((card) =>
      card.querySelector('.card-title')?.textContent?.includes('ToDoApp')
    );
    const finanzasAppCard = projectCards.find((card) =>
      card.querySelector('.card-title')?.textContent?.includes('FinanzasApp')
    );

    expect(toDoAppCard).toBeDefined();
    expect(toDoAppCard?.textContent).toContain('Organizador local de tareas');
    expect(toDoAppCard?.textContent).toContain('Progreso visible, prioridades y fechas límite');
    expect(toDoAppCard?.textContent).toContain('Marcado de tareas completadas y filtros por fecha');
    expect(toDoAppCard?.textContent).toContain('Capacitor');
    expect(toDoAppCard?.textContent).toContain('SQLite');
    expect(toDoAppCard?.querySelector('.project-detail')).toBeNull();
    expect(
      toDoAppCard
        ?.querySelector('a[aria-label="Ver repositorio de ToDoApp en GitHub"]')
        ?.getAttribute('href')
    ).toBe('https://github.com/juankasobe/ToDoApp');
    const toDoAppImages = Array.from(
      toDoAppCard?.querySelectorAll<HTMLImageElement>('.project-gallery img') ?? []
    );
    expect(toDoAppImages.map((image) => image.getAttribute('src'))).toEqual([
      'DoneDay/DondeDay1.jpg',
      'DoneDay/DondeDay2.jpg',
      'DoneDay/DondeDay3.jpg',
      'DoneDay/DondeDay4.jpg',
    ]);
    expect(toDoAppImages.map((image) => image.getAttribute('alt'))).toEqual([
      'Pantalla principal de ToDoApp con progreso y tareas pendientes',
      'Formulario de ToDoApp para crear una tarea con categoría y prioridad',
      'Vista de categorías de ToDoApp para organizar las tareas',
      'Menú lateral de ToDoApp con accesos a tareas y categorías',
    ]);

    expect(finanzasAppCard).toBeDefined();
    expect(finanzasAppCard?.textContent).toContain('Seguimiento financiero local');
    expect(finanzasAppCard?.textContent).toContain('Registro local de ingresos y gastos');
    expect(finanzasAppCard?.textContent).toContain('Balance neto y transacciones recientes del mes');
    expect(finanzasAppCard?.textContent).toContain(
      'Presupuestos mensuales por categoría con estados al límite o excedidos'
    );
    expect(finanzasAppCard?.textContent).toContain('Jetpack Compose');
    expect(finanzasAppCard?.textContent).toContain('Room');
    expect(finanzasAppCard?.querySelector('.project-detail')).toBeNull();
    expect(
      finanzasAppCard
        ?.querySelector('a[aria-label="Ver repositorio de FinanzasApp en GitHub"]')
        ?.getAttribute('href')
    ).toBe('https://github.com/juankasobe/finanzasApp');
    const finanzasAppImages = Array.from(
      finanzasAppCard?.querySelectorAll<HTMLImageElement>('.project-gallery img') ?? []
    );
    expect(finanzasAppImages.map((image) => image.getAttribute('src'))).toEqual([
      'FinanzasApp/FinanzasApp1.jpg',
      'FinanzasApp/FinanzasApp2.jpg',
      'FinanzasApp/FinanzasApp3.jpg',
    ]);
    expect(finanzasAppImages.map((image) => image.getAttribute('alt'))).toEqual([
      'Dashboard de FinanzasApp con balance, ingresos, gastos y presupuestos',
      'Pantalla de transacciones de FinanzasApp para registrar movimientos',
      'Pantalla de categorías de FinanzasApp con categorías integradas',
    ]);
  });

  it('should expose each project screenshot as an accessible image button', () => {
    const { compiled } = renderPortfolio();
    const imageButtons = Array.from(
      compiled.querySelectorAll<HTMLButtonElement>('.project-image-button')
    );

    expect(imageButtons.length).toBe(8);
    expect(imageButtons[0]?.type).toBe('button');
    expect(imageButtons[0]?.getAttribute('aria-label')).toContain(
      'Abrir imagen 1 de 1 de App de domótica'
    );
    expect(imageButtons[1]?.getAttribute('aria-label')).toContain(
      'Abrir imagen 1 de 4 de ToDoApp'
    );
    expect(imageButtons[7]?.getAttribute('aria-label')).toContain(
      'Abrir imagen 3 de 3 de FinanzasApp'
    );
  });

  it('should open the selected screenshot with project and image context', () => {
    const { fixture, compiled } = renderPortfolio();
    const imageButton = compiled.querySelector<HTMLButtonElement>(
      '.project-image-button[aria-label^="Abrir imagen 2 de 4 de ToDoApp"]'
    );

    imageButton?.click();
    fixture.detectChanges();

    const dialog = compiled.querySelector<HTMLElement>('[role="dialog"]');
    const image = dialog?.querySelector<HTMLImageElement>('.lightbox-image');

    expect(dialog).not.toBeNull();
    expect(dialog?.getAttribute('aria-modal')).toBe('true');
    expect(dialog?.textContent).toContain('ToDoApp');
    expect(dialog?.textContent).toContain('Imagen 2 de 4');
    expect(image?.getAttribute('src')).toBe('DoneDay/DondeDay2.jpg');
    expect(image?.getAttribute('alt')).toBe(
      'Formulario de ToDoApp para crear una tarea con categoría y prioridad'
    );
  });

  it('should navigate images within the active project and disable boundary controls', () => {
    const { fixture, compiled } = renderPortfolio();
    const imageButton = compiled.querySelector<HTMLButtonElement>(
      '.project-image-button[aria-label^="Abrir imagen 1 de 4 de ToDoApp"]'
    );

    imageButton?.click();
    fixture.detectChanges();

    let dialog = compiled.querySelector<HTMLElement>('[role="dialog"]');
    let image = dialog?.querySelector<HTMLImageElement>('.lightbox-image');
    const previousButton = dialog?.querySelector<HTMLButtonElement>(
      '.lightbox-arrow[aria-label="Mostrar imagen anterior de ToDoApp"]'
    );
    const nextButton = dialog?.querySelector<HTMLButtonElement>(
      '.lightbox-arrow[aria-label="Mostrar imagen siguiente de ToDoApp"]'
    );

    expect(previousButton?.disabled).toBeTrue();
    expect(nextButton?.disabled).toBeFalse();
    nextButton?.click();
    fixture.detectChanges();
    expect(image?.getAttribute('src')).toBe('DoneDay/DondeDay2.jpg');

    dialog?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    fixture.detectChanges();
    expect(image?.getAttribute('src')).toBe('DoneDay/DondeDay3.jpg');

    dialog?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    fixture.detectChanges();
    expect(image?.getAttribute('src')).toBe('DoneDay/DondeDay2.jpg');
  });

  it('should close the lightbox on Escape and restore focus to its trigger', () => {
    const { fixture, compiled } = renderPortfolio();
    const imageButton = compiled.querySelector<HTMLButtonElement>(
      '.project-image-button[aria-label^="Abrir imagen 1 de 1 de App de domótica"]'
    );

    imageButton?.focus();
    imageButton?.click();
    fixture.detectChanges();
    const dialog = compiled.querySelector<HTMLElement>('[role="dialog"]');

    dialog?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();

    expect(compiled.querySelector('[role="dialog"]')).toBeNull();
    expect(document.activeElement).toBe(imageButton);
  });

});
