// ─────────────────────────────────────────────────────────────
//  Todo lo personal de la web vive aquí.
//  Fuente de verdad: claude-job-finder/perfil.md — nada que no esté allí.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Roberto López Barbarin',
  shortName: 'Roberto López Barbarin',
  initials: 'RL',
  role: 'Backend .NET · Azure · DevOps',
  location: 'Burlada, Navarra',
  available: true, // muestra la pastilla "Abierto a nuevas oportunidades"
  tagline:
    'Desarrollador backend en C# y .NET. Construyo APIs y plataformas cloud-native en Azure, con infraestructura como código, pipelines CI/CD y tests de verdad.',
  description:
    'Roberto López Barbarin, desarrollador backend .NET especializado en Azure, DevOps/CI-CD e infraestructura como código.',
  about: [
    'Llevo desde octubre de 2024 desarrollando backend en C# y .NET con SQL Server. En mi empresa, una pyme con todo on-premise, actúo como senior de facto: gestiono proyectos, tomo las decisiones técnicas y propuse e implanté Azure DevOps con pipelines que compilan y validan cada entrega.',
    'Fuera del trabajo me especializo en Azure: mis proyectos personales son plataformas completas con Container Apps, Service Bus, Key Vault e identidades gestionadas, desplegadas con Bicep y GitHub Actions, con cientos de tests contra SQL Server real y observabilidad con OpenTelemetry.',
  ],
  email: 'rlopezbarbarin@gmail.com',
  // CV descargable: se genera desde cv/*.html con cv/build.sh. Cada botón solo aparece si su PDF existe.
  cv: [
    { lang: 'es', label: 'CV ES', title: 'Descargar CV en español', href: '/cv/roberto-lopez-barbarin-cv-es.pdf' },
    { lang: 'en', label: 'CV EN', title: 'Download CV in English', href: '/cv/roberto-lopez-barbarin-cv-en.pdf' },
  ],
  social: {
    github: 'https://github.com/chelomama-dev',
    linkedin: 'https://www.linkedin.com/in/rlopezbarbarin',
  },
  githubUser: 'chelomama-dev',
  languages: 'Español nativo · Inglés C1',
};

// Placa de especificación del hero: solo datos que ya están en este fichero.
export const SPEC: { key: string; value: string }[] = [
  { key: 'Rol', value: 'Backend .NET' },
  { key: 'Stack', value: 'C# · .NET 10 · SQL Server' },
  { key: 'Cloud', value: 'Azure · Bicep · GitHub Actions' },
  { key: 'Desde', value: 'Oct 2024' },
  { key: 'Base', value: 'Burlada, Navarra' },
  { key: 'Idiomas', value: 'ES nativo · EN C1' },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: 'Backend .NET',
    items: ['C# / .NET 10', 'ASP.NET Core', 'Minimal APIs', 'Clean Architecture', 'REST / OpenAPI', 'SignalR'],
  },
  {
    group: 'Microsoft Azure',
    items: ['Container Apps & Jobs', 'Service Bus + KEDA', 'Azure SQL', 'Key Vault', 'Managed Identities', 'Blob Storage', 'App Service'],
  },
  {
    group: 'DevOps & IaC',
    items: ['Bicep', 'GitHub Actions (OIDC)', 'Azure DevOps Pipelines', 'Docker', '.NET Aspire', 'OpenTelemetry', 'Application Insights'],
  },
  {
    group: 'Datos y testing',
    items: ['SQL Server', 'EF Core', 'xUnit', 'Testcontainers'],
  },
  {
    group: 'IA aplicada',
    items: ['Document Intelligence', 'Microsoft Foundry', 'Structured outputs'],
  },
  {
    group: 'También',
    items: ['Angular', 'TypeScript', 'Flutter', 'Git / PRs / code review', 'Scrum'],
  },
];

export type TimelineItem = {
  period?: string;
  title: string;
  place: string;
  description: string;
  highlights?: string[];
  current?: boolean;
};

export const EXPERIENCE: TimelineItem[] = [
  {
    period: 'Oct 2024 — Actualidad',
    title: 'Software Developer (.NET Backend & Web)',
    place: 'Telco SL',
    current: true,
    description:
      'Varios ERP de tráfico y un sistema de control de presencia. APIs REST en C#/.NET, SQL Server con Entity Framework e integración con APIs de terceros, todo on-premise.',
    highlights: [
      'Bajé una consulta de más de 6 s a menos de 1 s en una pantalla con más de 40 usuarios a la vez, con paginación en el backend.',
      'Detecté y corregí una fuga de memoria por instancias de DbContext mal liberadas, con IDbContextFactory.',
      'Propuse e implanté Azure DevOps en el equipo, con pipelines que compilan y validan cada entrega.',
    ],
  },
  {
    title: 'Summer Camp .NET / Angular / Scrum / Azure',
    place: 'Tracasa',
    description:
      'Equipo Scrum con Azure DevOps: áreas de clientes y estadística de una aplicación .NET con EF Core, SignalR en tiempo real, Identity (JWT) y despliegue en Azure App Service.',
  },
];

export const EDUCATION = [
  { title: 'CFGS Desarrollo de Aplicaciones Web (DAW)' },
  { title: 'CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)' },
];

export const CERTIFICATIONS = [
  { name: 'AZ-900 · Azure Fundamentals', issuer: 'Microsoft', status: 'Obtenida' },
  { name: 'AI-200 · Azure AI Cloud Developer Associate', issuer: 'Microsoft', status: 'En preparación' },
];

export const NAV = [
  { href: '/#sobre-mi', label: 'Sobre mí' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contacto', label: 'Contacto' },
];
