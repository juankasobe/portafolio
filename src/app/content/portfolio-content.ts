export interface HeroSocialLink {
  readonly href: string;
  readonly title: string;
  readonly iconClass: string;
}

export interface HeroContent {
  readonly greeting: string;
  readonly greetingIcon: {
    readonly src: string;
    readonly alt: string;
  };
  readonly name: string;
  readonly headline: string;
  readonly description: string;
  readonly photo: {
    readonly src: string;
    readonly alt: string;
  };
  readonly badge: string;
  readonly cv: {
    readonly href: string;
    readonly download: string;
    readonly title: string;
    readonly label: string;
  };
  readonly socialLinks: readonly HeroSocialLink[];
  readonly focusMetrics: readonly string[];
}

export interface EducationItem {
  readonly type: string;
  readonly title: string;
  readonly institution: string;
}

export interface SkillItem {
  readonly src: string;
  readonly alt: string;
}

export interface AboutContent {
  readonly kicker: string;
  readonly title: string;
  readonly intro: string;
  readonly contactEmail: string;
  readonly educationLabel: string;
  readonly education: readonly EducationItem[];
  readonly skillsTitle: string;
  readonly skills: readonly SkillItem[];
}

export interface ProjectLink {
  readonly href: string;
  readonly title: string;
  readonly ariaLabel: string;
  readonly iconClass: string;
}

export interface ProjectToolIcon {
  readonly src: string;
  readonly alt: string;
}

export interface PortfolioProject {
  readonly mediaClass: string;
  readonly image: {
    readonly src: string;
    readonly alt: string;
    readonly className?: string;
  };
  readonly type: string;
  readonly status: string;
  readonly title: string;
  readonly summary: string;
  readonly description: string;
  readonly role: string;
  readonly stack: readonly string[];
  readonly highlights: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly toolIcons: readonly ProjectToolIcon[];
}

export interface ProjectsContent {
  readonly kicker: string;
  readonly title: string;
  readonly items: readonly PortfolioProject[];
}

export interface ExperienceItem {
  readonly role: string;
  readonly company: string;
  readonly descriptionBeforeHighlight: string;
  readonly highlightedText: string;
  readonly descriptionAfterHighlight: string;
}

export interface ExperienceContent {
  readonly kicker: string;
  readonly title: string;
  readonly items: readonly ExperienceItem[];
}

export const heroContent: HeroContent = {
  greeting: 'Hola',
  greetingIcon: {
    src: 'hola.png',
    alt: '',
  },
  name: 'Juan Carlos Soberón',
  headline: 'Desarrollador web y móvil enfocado en Angular e Ionic.',
  description:
    'Diseño y construyo interfaces responsivas, aplicaciones móviles y soluciones conectadas a datos con una base técnica clara y mantenible.',
  photo: {
    src: 'selfie2.png',
    alt: 'Foto de Juan Carlos Soberón',
  },
  badge: 'Angular · Ionic · MySQL',
  cv: {
    href: 'CV_Juan_Soberon.pdf',
    download: 'CV_Juan_Soberon.pdf',
    title: 'Descargar CV',
    label: 'Descargar CV',
  },
  socialLinks: [
    {
      href: 'https://www.linkedin.com/in/juan-sober%C3%B3n-573446277',
      title: 'LinkedIn',
      iconClass: 'bi bi-linkedin whiteIcon icono',
    },
    {
      href: 'https://github.com/juankasobe',
      title: 'GitHub',
      iconClass: 'bi bi-github whiteIcon icono',
    },
  ],
  focusMetrics: ['Apps móviles', 'Frontends responsivos', 'Datos SQL'],
};

export const aboutContent: AboutContent = {
  kicker: 'Perfil',
  title: 'Sobre mi',
  intro:
    '¡Hola! Soy un apasionado del desarrollo de aplicaciones. Me gusta crear sitios web dinámicos y soluciones móviles utilizando herramientas como HTML, CSS, Angular e Ionic. Siempre estoy aprendiendo y experimentando con nuevas tecnologías para mejorar mis habilidades.',
  contactEmail: 'juanka5200@outlook.com',
  educationLabel: 'Estudios',
  education: [
    {
      type: 'Universidad',
      title: 'Ingeniería en Ciencias de la Computación',
      institution: 'Universidad Tecnológica Indoamérica',
    },
    {
      type: 'Certificado',
      title: 'Mobile Application Developer 2.0 Http And Mqtt',
      institution: 'Universidad Tecnológica Indoamérica',
    },
  ],
  skillsTitle: 'Habilidades',
  skills: [
    { src: 'angular.png', alt: 'Angular' },
    { src: 'boot.png', alt: 'Bootstrap' },
    { src: 'nodejs.png', alt: 'Node.js' },
    { src: 'Net.png', alt: '.NET' },
    { src: 'mysql2.png', alt: 'MySQL' },
  ],
};

export const projectsContent: ProjectsContent = {
  kicker: 'Trabajo seleccionado',
  title: 'Proyectos',
  items: [
    {
      mediaClass: 'app-media',
      image: {
        src: 'app.png',
        alt: 'Vista de la app de domótica',
        className: 'app-preview',
      },
      type: 'Ionic · Mobile',
      status: 'Aplicación Android',
      title: 'App de domótica',
      summary: 'Control móvil para luces inteligentes desde una interfaz simple y directa.',
      description:
        'El proyecto resuelve la necesidad de administrar luces del hogar desde un dispositivo Android, conectando una experiencia móvil clara con acciones de control para domótica.',
      role: 'Diseño de la interfaz móvil, estructura de la app y flujo principal de control.',
      stack: ['Ionic', 'Angular', 'Android'],
      highlights: [
        'Interfaz enfocada en acciones rápidas para controlar luces inteligentes.',
        'Experiencia móvil pensada para uso cotidiano y navegación sencilla.',
        'Base técnica alineada con desarrollo web/móvil y componentes reutilizables.',
      ],
      links: [
        {
          href: 'https://github.com/juankasobe/smartHome.git',
          title: 'GitHub',
          ariaLabel: 'Ver repositorio de la app de domótica en GitHub',
          iconClass: 'bi bi-github whiteIcon icono',
        },
      ],
      toolIcons: [{ src: 'ionic.png', alt: 'Ionic' }],
    },
  ],
};

export const experienceContent: ExperienceContent = {
  kicker: 'Trayectoria',
  title: 'Experiencia',
  items: [
    {
      role: 'Soporte técnico de software e infraestructura',
      company: 'Incomis',
      descriptionBeforeHighlight:
        'Mantenimiento y corrección de errores para diferentes sistemas empresariales en hardware y software en la empresa de tecnología de la información',
      highlightedText: 'Incomis',
      descriptionAfterHighlight: 'en la ciudad de Ambato, Ecuador.',
    },
  ],
};
