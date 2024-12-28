export interface Route {
    path: string;
    name: string;
  }
  
  export const routes: Route[] = [
    { path: '/', name: 'Features' },
    { path: '/about', name: 'About'},
    { path: '/dashboard', name: 'Components'},
  ];