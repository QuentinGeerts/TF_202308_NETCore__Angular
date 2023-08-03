import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { registerLocaleData } from '@angular/common';
import { AppModule } from './app/app.module';

import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
