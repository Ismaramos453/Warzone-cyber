const presentations = {
  'xss-reflejado': {
    icon: 'code', accent: 'violet', label: 'INYECCIÓN EN CLIENTE',
    mission: 'El buscador del portal de noticias refleja un parámetro de consulta sin neutralizarlo.',
    objective: 'Consigue ejecutar JavaScript controlado por ti y localiza la flag del laboratorio.',
    hint: 'Observa qué parte de la URL se muestra de vuelta en la página y cómo se interpreta en el DOM.'
  },
  'login-sql': {
    icon: 'database', accent: 'amber', label: 'INYECCIÓN EN SERVIDOR',
    mission: 'El acceso de la intranet construye consultas SQL a partir de credenciales introducidas.',
    objective: 'Analiza el formulario, evita su control de acceso y encuentra la flag.',
    hint: 'Piensa en cómo cambia una condición SQL cuando el valor introducido modifica la consulta.'
  },
  privilegios: {
    icon: 'shield', accent: 'cyan', label: 'CONTROL DE ACCESO',
    mission: 'Un panel de expedientes usa identificadores predecibles y valida permisos de forma incompleta.',
    objective: 'Identifica un recurso que no debería pertenecer a tu usuario y recupera la flag.',
    hint: 'Compara las peticiones y los identificadores que utiliza la aplicación al navegar.'
  }
};

const fallback = { icon: 'target', accent: 'cyan', label: 'RETO', mission: '', objective: '', hint: '' };
export function presentationFor(challenge) { return presentations[challenge.slug] || fallback; }
