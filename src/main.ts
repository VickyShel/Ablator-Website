import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import 'src/js/javascript.js';
import 'src/js/codemirror.js';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
