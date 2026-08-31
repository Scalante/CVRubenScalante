/**
 * i18n.js — Bilingual content (ES / EN)
 *
 * Structure:
 *   TRANSLATIONS[lang][key] = string | array | object
 *
 * Usage (in main.js):
 *   import { TRANSLATIONS } from './i18n.js';
 *   const t = TRANSLATIONS[currentLang];
 */

const TRANSLATIONS = {

  /* ─────────────────────────────────────────────
   * ESPAÑOL
   * ───────────────────────────────────────────── */
  es: {

    /* Navigation */
    nav: {
      about:    'Sobre mí',
      stack:    'Stack',
      exp:      'Experiencia',
      edu:      'Educación',
      projects: 'Proyectos',
      certs:    'Certificaciones',
      contact:  'Contacto',
    },

    /* Hero */
    hero: {
      greeting: 'Hola, soy',
      name:     'Ruben Dario Scalante Rojas',
      role:     'Desarrollador Backend .NET',
      tagline:  'Arquitecturas limpias · Cloud Azure & AWS · +4 años de experiencia',
      btnWork:  'Ver experiencia',
      btnCv:    'Descargar CV',
      btnContact: 'Contactar',
    },

    /* About */
    about: {
      title: 'Sobre mí',
      body: `Soy Desarrollador Backend especializado en .NET (C#, .NET Framework, .NET Core, .NET 6/8/10), con más de 4 años de experiencia diseñando, implementando y manteniendo sistemas y servicios backend de alto rendimiento. Tengo experiencia sólida migrando y modernizando plataformas .NET hacia arquitecturas limpias y hexagonales, optimizando bases de datos y automatizando despliegues mediante CI/CD en Azure. Me reconocen por mi alta responsabilidad, mi capacidad investigativa y mi liderazgo técnico en equipos pequeños de desarrollo. Estoy comprometido con la calidad del software, la seguridad (OWASP) y la mejora continua de procesos, y busco aportar mi experiencia técnica en .NET para generar valor de negocio en entornos colaborativos.`,
    },

    /* Skills section */
    skills: {
      title: 'Stack Tecnológico',
      categories: {
        languages:   'Lenguajes',
        frameworks:  'Frameworks',
        databases:   'Bases de datos',
        cloud:       'Nube & DevOps',
        tools:       'Herramientas',
        frontend:    'Frontend',
      },
    },

    /* Experience */
    experience: {
      title: 'Experiencia Laboral',
      present: 'Actual',
      jobs: [
        {
          id:       'inteia',
          company:  'INTEIA',
          role:     'Desarrollador Backend .NET',
          period:   'Feb 2023 — Actual',
          location: 'Medellín, Antioquia',
          bullets: [
            'Migré el backend de .NET Core 3.1 a .NET 6, actualizando dependencias y validando la compatibilidad mediante pruebas unitarias y de integración exhaustivas antes de cada despliegue a producción.',
            'Refactoricé arquitecturas monolíticas (N-capas) aplicando principios SOLID y patrones de diseño para mejorar modularidad y mantenibilidad del código.',
            'Implementé arquitecturas modernas en .NET 8 (Clean Architecture y Hexagonal) con patrones CQRS, Mediator y una capa de servicios (Services) para concentrar la lógica de negocio, priorizando escalabilidad y resiliencia.',
            'Organicé el código por casos de uso (Use Cases), desarrollé middlewares personalizados para el manejo centralizado de excepciones y logging, e implementé autenticación JWT junto con autorización basada en roles y políticas para proteger los endpoints.',
            'Apliqué inyección de dependencias y mapeo de objetos (Mapper) entre entidades y DTOs, implementé la capa de persistencia con el patrón Repository/UnitOfWork, y diseñé proxies para el consumo seguro de servicios externos.',
            'Automaticé tareas en segundo plano y procesos programados con Hangfire, incluyendo monitoreo de ejecución y reintentos ante fallos.',
            'Implementé comunicación en tiempo real con SignalR integrado con Firebase Cloud Messaging para el envío de notificaciones push.',
            'Configuré pipelines CI/CD en Azure DevOps, logrando despliegues reproducibles, monitoreados y confiables.',
            'Identifiqué y corregí vulnerabilidades de seguridad con SonarQube y Snyk, aplicando OWASP Top 10.',
            'Optimicé el rendimiento e índices de bases de datos MongoDB y Cosmos DB, e integré Redis Cache para reducir tiempos de respuesta.',
            'Diseñé y gestioné contenedores Docker, optimizando imágenes, redes y prácticas de seguridad.',
            'Integré servicios de Azure (Key Vault, Communication Services, Application Insights, Entra ID B2C) y SendGrid para comunicaciones, monitoreo y gestión segura de identidades.',
            'Aseguré la calidad del software mediante pruebas unitarias con XUnit y validación de datos con Fluent Validation.',
          ],
        },
        {
          id:       'indigo',
          company:  'INDIGO TECHNOLOGIES',
          role:     'Technical Junior Developer LII',
          period:   'Feb 2022 — Ene 2023',
          location: 'Neiva, Huila',
          bullets: [
            'Diseñé y desarrollé APIs RESTful con .NET Framework y .NET 6 (Database First), documentadas con Swagger y probadas con Postman.',
            'Implementé autenticación JWT y consumí endpoints de aplicaciones externas garantizando integración confiable entre sistemas.',
            'Gestioné ciclo de vida de proyectos en Azure DevOps y Git: ramas, pull requests, resolución de conflictos y despliegues.',
            'Integré microservicios serverless en AWS Lambda, DynamoDB (indexación secundaria) y API Gateway con control de acceso por rutas.',
            'Participé en configuración de pipelines CI/CD y estrategias de despliegue automatizado en Azure y AWS.',
          ],
        },
        {
          id:       'soaint',
          company:  'SOAINT SOFTWARE',
          role:     'Desarrollador Backend',
          period:   'Jun 2021 — Ene 2022',
          location: 'Bogotá D.C.',
          bullets: [
            'Diseñé y desarrollé microservicios con Java y Spring Boot, promoviendo arquitecturas escalables y desacopladas.',
            'Diseñé y consumí APIs REST documentadas con Swagger; pruebas de endpoints con Postman.',
            'Gestioné y configuré contenedores en OpenShift (despliegues y ajustes básicos en Pods).',
            'Desarrollé procedimientos almacenados, triggers y cursores en SQL Server; optimización DML.',
            'Integré almacenamiento de archivos con Amazon S3 para gestión de objetos y versionamiento.',
          ],
        },
      ],
    },

    /* Education */
    education: {
      title: 'Formación Académica',
      items: [
        {
          degree:   'Máster Universitario en Ingeniería de Software y Sistemas Informáticos',
          school:   'UNIR — La Universidad en Internet',
          location: 'Logroño, España',
          year:     '2023 — 2024',
        },
        {
          degree:   'Ingeniero de Sistemas',
          school:   'Corporación Universitaria del Huila "CORHUILA"',
          location: 'Neiva, Huila',
          year:     '2016 — 2021',
        },
        {
          degree:   'Bachillerato Académico',
          school:   'Institución Educativa "Antonio Ricaurte"',
          location: 'Maito, Tarqui',
          year:     '2010 — 2015',
        },
      ],
    },

    /* Projects */
    projects: {
      title: 'Proyectos',
      items: [
        {
          name:  'CV Digital Interactivo',
          desc:  'Currículum vitae digital construido con HTML, CSS y JS vanilla. Diseño responsivo, barra lateral animada y acordeones de experiencia.',
          tags:  ['HTML', 'CSS', 'JavaScript'],
          links: { github: 'https://github.com/Scalante?tab=repositories' },
        },
      ],
    },

    /* Certifications */
    certs: {
      title: 'Certificaciones',
      items: [
        {
          name:   'Máster en Ingeniería de Software',
          issuer: 'UNIR',
          year:   '2024',
          icon:   'school',
        },
      ],
      note: 'En proceso de certificaciones Azure (AZ-900 / AZ-204) y AWS (Cloud Practitioner).',
    },

    /* Contact */
    contact: {
      title:    'Contacto',
      phone:    '+57 311 875 2745',
      email:    'rubendarioscalante@gmail.com',
      location: 'Maito, Tarqui, Huila — Colombia',
      available: 'Disponible para trabajo remoto.',
      footer: 'Diseñado & desarrollado por',
    },

    /* Achievements sidebar */
    achievements: {
      title: 'Logros',
      items: [
        'Lideré la arquitectura de datos y software de un producto en producción, gestionando documentación técnica y estabilización de ambientes.',
        '+4 años de experiencia backend en entornos reales de producción.',
        'Máster universitario en Ingeniería de Software (UNIR, España).',
      ],
    },

    /* Hobbies */
    hobbies: {
      title: 'Hobbies',
      items: ['Lectura', 'Programación', 'Cine', 'Música', 'Ciclismo', 'Fútbol'],
    },

    /* Languages spoken */
    langs: {
      title: 'Idiomas',
      items: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés',  level: 'Intermedio (B1)' },
      ],
    },
  },

  /* ─────────────────────────────────────────────
   * ENGLISH
   * ───────────────────────────────────────────── */
  en: {

    nav: {
      about:    'About',
      stack:    'Stack',
      exp:      'Experience',
      edu:      'Education',
      projects: 'Projects',
      certs:    'Certifications',
      contact:  'Contact',
    },

    hero: {
      greeting: "Hi, I'm",
      name:     'Ruben Dario Scalante Rojas',
      role:     '.NET Backend Developer',
      tagline:  'Clean Architecture · Azure & AWS Cloud · 4+ years of experience',
      btnWork:  'View experience',
      btnCv:    'Download CV',
      btnContact: 'Get in touch',
    },

    about: {
      title: 'About me',
      body: `I am a Backend Developer specializing in .NET (C#, .NET Framework, .NET Core, .NET 6/8/10), with over 4 years of experience designing, implementing, and maintaining high-performance backend systems and services. I have solid experience migrating and modernizing .NET platforms to clean and hexagonal architectures, optimizing databases, and automating deployments through CI/CD in Azure. I am recognized for my strong sense of responsibility, research abilities, and technical leadership in small development teams. I am committed to software quality, security (OWASP), and continuous process improvement, seeking to leverage my technical expertise in .NET to drive business value in collaborative environments.`,
    },

    skills: {
      title: 'Tech Stack',
      categories: {
        languages:  'Languages',
        frameworks: 'Frameworks',
        databases:  'Databases',
        cloud:      'Cloud & DevOps',
        tools:      'Tools',
        frontend:   'Frontend',
      },
    },

    experience: {
      title: 'Work Experience',
      present: 'Present',
      jobs: [
        {
          id:       'inteia',
          company:  'INTEIA',
          role:     '.NET Backend Developer',
          period:   'Feb 2023 — Present',
          location: 'Medellín, Antioquia',
          bullets: [
            'Migrated the backend from .NET Core 3.1 to .NET 6, updating dependencies and validating compatibility through comprehensive unit and integration testing before each production deployment.',
            'Refactored monolithic architectures (N-layer) applying SOLID principles and design patterns to improve code modularity and maintainability.',
            'Implemented modern architectures in .NET 8 (Clean Architecture and Hexagonal) with CQRS, Mediator, and a Services layer to centralize business logic, prioritizing scalability and resilience.',
            'Organized code by Use Cases, developed custom middlewares for centralized exception handling and logging, and implemented JWT authentication along with role and policy-based authorization to secure endpoints.',
            'Applied dependency injection and object mapping (Mapper) between entities and DTOs, implemented the persistence layer using the Repository/UnitOfWork pattern, and designed proxies for secure external service consumption.',
            'Automated background tasks and scheduled processes with Hangfire, including execution monitoring and fault retries.',
            'Implemented real-time communication with SignalR integrated with Firebase Cloud Messaging for push notification delivery.',
            'Configured CI/CD pipelines in Azure DevOps, achieving reproducible, monitored, and reliable deployments.',
            'Identified and remediated security vulnerabilities with SonarQube and Snyk, applying OWASP Top 10 standards.',
            'Optimized performance and indexes for MongoDB and Cosmos DB databases, and integrated Redis Cache to reduce response times.',
            'Designed and managed Docker containers, optimizing images, networks, and security practices for scalable deployments.',
            'Integrated Azure services (Key Vault, Communication Services, Application Insights, Entra ID B2C) and SendGrid for communications, monitoring, and secure identity management.',
            'Ensured software quality through unit testing with XUnit and data validation using Fluent Validation.',
          ],
        },
        {
          id:       'indigo',
          company:  'INDIGO TECHNOLOGIES',
          role:     'Technical Junior Developer LII',
          period:   'Feb 2022 — Jan 2023',
          location: 'Neiva, Huila',
          bullets: [
            'Designed and developed RESTful APIs with .NET Framework and .NET 6 (Database First), documented with Swagger and tested with Postman.',
            'Implemented JWT authentication and consumed external APIs ensuring reliable cross-system integration.',
            'Managed project lifecycle in Azure DevOps and Git: branches, pull requests, conflict resolution and deployments.',
            'Integrated serverless microservices with AWS Lambda, DynamoDB (secondary indexing) and API Gateway with route-level access control.',
            'Participated in CI/CD pipeline configuration and automated deployment strategies on both Azure and AWS.',
          ],
        },
        {
          id:       'soaint',
          company:  'SOAINT SOFTWARE',
          role:     'Backend Developer',
          period:   'Jun 2021 — Jan 2022',
          location: 'Bogotá D.C.',
          bullets: [
            'Designed and developed microservices with Java and Spring Boot, promoting scalable and decoupled architectures.',
            'Designed and consumed REST APIs documented with Swagger; endpoint testing with Postman.',
            'Managed and configured containers in OpenShift (Pod deployments and basic adjustments).',
            'Developed stored procedures, triggers and cursors in SQL Server; DML optimization.',
            'Integrated file storage with Amazon S3 for object management and content versioning.',
          ],
        },
      ],
    },

    education: {
      title: 'Education',
      items: [
        {
          degree:   "Master's Degree in Software Engineering and Computer Systems",
          school:   'UNIR — La Universidad en Internet',
          location: 'Logroño, Spain',
          year:     '2023 — 2024',
        },
        {
          degree:   'Systems Engineer (B.Sc.)',
          school:   'Corporación Universitaria del Huila "CORHUILA"',
          location: 'Neiva, Huila',
          year:     '2016 — 2021',
        },
        {
          degree:   'High School Diploma',
          school:   'Institución Educativa "Antonio Ricaurte"',
          location: 'Maito, Tarqui',
          year:     '2010 — 2015',
        },
      ],
    },

    projects: {
      title: 'Projects',
      items: [
        {
          name:  'Interactive Digital CV',
          desc:  'Digital résumé built with vanilla HTML, CSS and JS. Responsive design, animated sidebar and collapsible experience sections.',
          tags:  ['HTML', 'CSS', 'JavaScript'],
          links: { github: 'https://github.com/Scalante?tab=repositories' },
        },
      ],
    },

    certs: {
      title: 'Certifications',
      items: [
        {
          name:   "Master's in Software Engineering",
          issuer: 'UNIR',
          year:   '2024',
          icon:   'school',
        },
      ],
      note: 'Currently preparing for Azure (AZ-900 / AZ-204) and AWS Cloud Practitioner certifications.',
    },

    contact: {
      title:    'Contact',
      phone:    '+57 311 875 2745',
      email:    'rubendarioscalante@gmail.com',
      location: 'Maito, Tarqui, Huila — Colombia',
      available: 'Open to remote work.',
      footer: 'Designed & built by',
    },

    achievements: {
      title: 'Achievements',
      items: [
        'Led data and software architecture for a production product, managing technical documentation and environment stabilization.',
        '4+ years of backend experience in real production environments.',
        "Master's degree in Software Engineering (UNIR, Spain).",
      ],
    },

    hobbies: {
      title: 'Hobbies',
      items: ['Reading', 'Coding', 'Movies', 'Music', 'Cycling', 'Football'],
    },

    langs: {
      title: 'Languages',
      items: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Intermediate (B1)' },
      ],
    },
  },
};
