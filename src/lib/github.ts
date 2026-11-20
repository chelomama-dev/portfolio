import { SITE } from '../config';

export type Repo = {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  fork: boolean;
  updatedAt: string;
  topics: string[];
};

let cache: Repo[] | null = null;

/**
 * Lee los repos públicos en tiempo de BUILD (la web sigue siendo 100% estática).
 * Si defines GITHUB_TOKEN en el entorno evitas el rate limit de la API.
 * Si la API falla, devuelve [] y la sección simplemente no se pinta.
 */
export async function getRepos(): Promise<Repo[]> {
  if (cache) return cache;
  try {
    const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
    const token = import.meta.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(
      `https://api.github.com/users/${SITE.githubUser}/repos?per_page=100&sort=pushed`,
      { headers },
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data: any[] = await res.json();

    cache = data
      .filter((r) => !r.archived)
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        homepage: r.homepage || null,
        language: r.language,
        stars: r.stargazers_count,
        fork: r.fork,
        updatedAt: r.pushed_at,
        topics: r.topics ?? [],
      }))
      .sort((a, b) => Number(a.fork) - Number(b.fork) || b.updatedAt.localeCompare(a.updatedAt));
    return cache;
  } catch (err) {
    console.warn('[github] No se pudieron cargar los repos:', err);
    return [];
  }
}

export const LANG_COLORS: Record<string, string> = {
  'C#': '#178600',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  SCSS: '#c6538c',
  Bicep: '#519aba',
  Python: '#3572A5',
  Shell: '#89e051',
};
