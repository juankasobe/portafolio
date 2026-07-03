import { ViewportScroller, CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  menuOpen = false;
  navbarVisible = true;
  lastScrollTop = 0;

  public onClick(elementId: string, event?: Event): void {
    event?.preventDefault();
    this.viewportScroller.scrollToAnchor(elementId);
    this.menuOpen = false;
  }

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > this.lastScrollTop) {
      this.navbarVisible = false; // Scrolling down
    } else {
      this.navbarVisible = true; // Scrolling up
    }
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  }
}
