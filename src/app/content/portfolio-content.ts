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
  readonly highlights: readonly string[];
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
  readonly highlights: readonly string[];
}

export interface ExperienceContent {
  readonly kicker: string;
  readonly title: string;
  readonly items: readonly ExperienceItem[];
}

export interface BaseLink {
  readonly href: string;
  readonly label: string;
  readonly ariaLabel: string;
  readonly external?: boolean;
}

export interface ContactLink extends BaseLink {
  readonly iconClass: string;
  readonly download?: string;
}

export type FooterLink = BaseLink;

export interface ContactContent {
  readonly kicker: string;
  readonly title: string;
  readonly description: string;
  readonly emailLabel: string;
  readonly email: string;
  readonly links: readonly ContactLink[];
}

export interface FooterContent {
  readonly owner: string;
  readonly year: number;
  readonly summary: string;
  readonly links: readonly FooterLink[];
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
    'Soy desarrollador web y móvil con foco en construir interfaces claras, responsivas y mantenibles. Trabajo principalmente con Angular e Ionic, integrando bases de datos y cuidando que cada solución sea simple de usar y fácil de evolucionar.',
  highlights: [
    'Desarrollo de interfaces web y móviles con Angular, Ionic, HTML y CSS.',
    'Base técnica en Ingeniería en Ciencias de la Computación.',
    'Interés en soluciones conectadas a datos y experiencias responsivas.',
  ],
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
        'Experiencia en soporte técnico, mantenimiento y corrección de incidencias para sistemas empresariales dentro de',
      highlightedText: 'Incomis',
      descriptionAfterHighlight: 'empresa de tecnología de la información ubicada en Ambato, Ecuador.',
      highlights: [
        'Atención de problemas relacionados con software e infraestructura.',
        'Apoyo en mantenimiento y revisión de sistemas empresariales.',
        'Corrección de errores reportados en entornos de uso interno.',
      ],
    },
  ],
};

export const contactContent: ContactContent = {
  kicker: 'Contacto',
  title: 'Conversemos sobre tu próxima interfaz web o móvil.',
  description:
    'Si necesitás una aplicación clara, responsiva y conectada a datos, podés revisar mis perfiles profesionales o copiar mi correo.',
  emailLabel: 'Correo',
  email: 'juanka5200@outlook.com',
  links: [
    {
      href: 'https://www.linkedin.com/in/juan-sober%C3%B3n-573446277',
      label: 'LinkedIn',
      ariaLabel: 'Ver perfil de Juan Carlos Soberón en LinkedIn',
      iconClass: 'bi bi-linkedin whiteIcon icono',
      external: true,
    },
    {
      href: 'https://github.com/juankasobe',
      label: 'GitHub',
      ariaLabel: 'Ver perfil de Juan Carlos Soberón en GitHub',
      iconClass: 'bi bi-github whiteIcon icono',
      external: true,
    },
    {
      href: 'CV_Juan_Soberon.pdf',
      label: 'CV',
      ariaLabel: 'Descargar CV de Juan Carlos Soberón',
      iconClass: 'bi bi-file-earmark-person whiteIcon icono',
      download: 'CV_Juan_Soberon.pdf',
    },
  ],
};

export const footerContent: FooterContent = {
  owner: 'Juan Carlos Soberón',
  year: new Date().getFullYear(),
  summary: 'Desarrollo web y móvil con Angular, Ionic y bases de datos.',
  links: [
    {
      href: '#home',
      label: 'Inicio',
      ariaLabel: 'Volver al inicio del portafolio',
    },
    {
      href: 'https://github.com/juankasobe',
      label: 'GitHub',
      ariaLabel: 'Ver perfil de Juan Carlos Soberón en GitHub',
      external: true,
    },
  ],
};
