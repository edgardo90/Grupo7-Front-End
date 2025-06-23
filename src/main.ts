import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Inicializa AOS si lo estás usando
import AOS from 'aos';
AOS.init();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));