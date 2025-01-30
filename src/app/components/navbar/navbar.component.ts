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
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  navbarVisible: boolean = true;
  lastScrollTop: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
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
