import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { SITE } from '../config';

// Se evalúa en build (desde la raíz del proyecto): un CV sin PDF en public/ no genera botón.
export const cvLinks = SITE.cv.filter((c) => existsSync(join(process.cwd(), 'public', c.href)));
