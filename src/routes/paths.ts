// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_TOOB = '/toob';
const ROOTS_ILEAD = '/ilead';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    root: path(ROOTS_DASHBOARD, '/ilead'),
  },
  ilead: {
    root: path(ROOTS_ILEAD, ''),
  },
  toob: {
    root: path(ROOTS_TOOB, '/info'),
    pageToob: path(ROOTS_TOOB, '/info'),
  },
};
