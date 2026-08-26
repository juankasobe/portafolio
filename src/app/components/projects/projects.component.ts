import {
  AfterViewInit,
  afterNextRender,
  Component,
  ElementRef,
  inject,
  Injector,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PortfolioProject, projectsContent } from '../../content/portfolio-content';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  protected readonly projects = projectsContent;
  protected currentProjectIndex = 0;
  protected carouselAtEnd = false;
  protected activeProject?: PortfolioProject;
  protected activeImageIndex = 0;

  private readonly injector = inject(Injector);
  private activeImageTrigger?: HTMLButtonElement;

  @ViewChild('projectsCarousel')
  private projectsCarousel?: ElementRef<HTMLElement>;

  @ViewChildren('projectSlide')
  private projectSlides?: QueryList<ElementRef<HTMLElement>>;

  @ViewChild('lightboxDialog')
  private lightboxDialog?: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.updateCurrentProject();
  }

  protected moveProject(direction: -1 | 1): void {
    if ((direction === -1 && this.currentProjectIndex === 0) ||
      (direction === 1 && this.carouselAtEnd)) {
      return;
    }

    const targetIndex = this.currentProjectIndex + direction;
    if (targetIndex < 0 || targetIndex >= this.projects.items.length) {
      return;
    }

    const targetSlide = this.projectSlides?.get(targetIndex)?.nativeElement;
    if (!targetSlide) {
      return;
    }

    this.currentProjectIndex = targetIndex;
    targetSlide.scrollIntoView({
      behavior: this.prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }

  protected onCarouselKeydown(event: KeyboardEvent): void {
    let direction: -1 | 1 | undefined;

    if (event.key === 'ArrowLeft') {
      direction = -1;
    } else if (event.key === 'ArrowRight') {
      direction = 1;
    }

    if (direction === undefined) {
      return;
    }

    event.preventDefault();
    this.moveProject(direction);
  }

  protected get activeImage() {
    return this.activeProject?.images[this.activeImageIndex];
  }

  protected openLightbox(
    project: PortfolioProject,
    imageIndex: number,
    trigger: HTMLButtonElement
  ): void {
    if (!project.images[imageIndex]) {
      return;
    }

    this.activeProject = project;
    this.activeImageIndex = imageIndex;
    this.activeImageTrigger = trigger;

    afterNextRender(
      () => this.lightboxDialog?.nativeElement.focus(),
      { injector: this.injector }
    );
  }

  protected closeLightbox(): void {
    const trigger = this.activeImageTrigger;

    this.activeProject = undefined;
    this.activeImageIndex = 0;
    this.activeImageTrigger = undefined;
    trigger?.focus();
  }

  protected closeLightboxFromBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeLightbox();
    }
  }

  protected moveLightboxImage(direction: -1 | 1): void {
    const project = this.activeProject;
    if (!project) {
      return;
    }

    const targetIndex = this.activeImageIndex + direction;
    if (targetIndex < 0 || targetIndex >= project.images.length) {
      return;
    }

    this.activeImageIndex = targetIndex;
  }

  protected onLightboxKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeLightbox();
      return;
    }

    let direction: -1 | 1 | undefined;
    if (event.key === 'ArrowLeft') {
      direction = -1;
    } else if (event.key === 'ArrowRight') {
      direction = 1;
    }

    if (direction === undefined) {
      return;
    }

    event.preventDefault();
    this.moveLightboxImage(direction);
  }

  protected updateCurrentProject(): void {
    const carousel = this.projectsCarousel?.nativeElement;
    const slides = this.projectSlides?.toArray() ?? [];

    if (!carousel || slides.length === 0) {
      return;
    }

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    this.carouselAtEnd = maxScroll > 0 && carousel.scrollLeft >= maxScroll - 1;

    if (carousel.scrollLeft <= 1) {
      this.currentProjectIndex = 0;
      return;
    }

    const carouselLeft = carousel.getBoundingClientRect().left;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const distance = Math.abs(
        slide.nativeElement.getBoundingClientRect().left - carouselLeft
      );

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    this.currentProjectIndex = nearestIndex;
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
