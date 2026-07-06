import { ViewportScroller } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;
  let viewportScroller: jasmine.SpyObj<ViewportScroller>;

  beforeEach(async () => {
    viewportScroller = jasmine.createSpyObj<ViewportScroller>('ViewportScroller', [
      'scrollToAnchor',
    ]);

    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [{ provide: ViewportScroller, useValue: viewportScroller }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders visible navigation links with fragment hrefs', () => {
    const links = Array.from(
      fixture.nativeElement.querySelectorAll('.nav-link')
    ) as HTMLAnchorElement[];

    expect(links.map((link) => link.textContent?.trim())).toEqual([
      'Inicio',
      'Sobre mí',
      'Proyectos',
      'Experiencia',
      'Contacto',
    ]);
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '#home',
      '#about',
      '#proyectos',
      '#experiencia',
      '#contacto',
    ]);
    expect(links.every((link) => !link.hasAttribute('aria-current'))).toBeTrue();
  });

  it('opens and closes the mobile menu from the toggle button', () => {
    const button = fixture.nativeElement.querySelector(
      '.navbar-toggler'
    ) as HTMLButtonElement;
    const collapse = fixture.nativeElement.querySelector(
      '#navbarNav'
    ) as HTMLElement;

    expect(component.menuOpen).toBeFalse();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(collapse.classList).toContain('collapse');

    button.click();
    fixture.detectChanges();

    expect(component.menuOpen).toBeTrue();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(collapse.classList).not.toContain('collapse');

    button.click();
    fixture.detectChanges();

    expect(component.menuOpen).toBeFalse();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(collapse.classList).toContain('collapse');
  });

  it('scrolls to a section and closes the mobile menu when a link is clicked', () => {
    component.menuOpen = true;
    fixture.detectChanges();

    const aboutLink = (
      Array.from(
        fixture.nativeElement.querySelectorAll('.nav-link')
      ) as HTMLAnchorElement[]
    ).find((link) => link.textContent?.includes('Sobre mí')) as HTMLAnchorElement;

    aboutLink.click();
    fixture.detectChanges();

    expect(viewportScroller.scrollToAnchor).toHaveBeenCalledOnceWith('about');
    expect(component.menuOpen).toBeFalse();
  });
});
