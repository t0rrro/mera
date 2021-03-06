import { bootstrap } from '@angular/platform-browser-dynamic';
/*
* Platform and Environment
* our global providers/directives/pipes
*/
import { DIRECTIVES, PIPES, PROVIDERS } from './platform/browser';
import { ENV_PROVIDERS } from './platform/environment';

// localstorage subscriber
import { LocalStorageSubscriber } from 'angular2-localstorage/LocalStorageEmitter'

/*
* App Component
* our top level component that holds all of our components
*/
import { MeraApp, APP_PROVIDERS } from './app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(initialHmrState?: any): Promise<any> {

  let bootPromise = bootstrap(MeraApp, [
    ...ENV_PROVIDERS,
    ...PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS
  ])
  .catch(err => console.error(err));

  LocalStorageSubscriber(bootPromise);
  
  return bootPromise;
}

/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
