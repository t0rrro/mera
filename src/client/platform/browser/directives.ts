/*
 * These are globally available directives in any template
 */
import { provide, PLATFORM_DIRECTIVES } from '@angular/core';

// Angular 2 Material 2
// replace with @angular2-material/all
import { MATERIAL_DIRECTIVES } from './angular2-material';

// application_directives: directives that are global through out the application
export const APPLICATION_DIRECTIVES = [
  ...MATERIAL_DIRECTIVES
];

export const DIRECTIVES = [
  provide(PLATFORM_DIRECTIVES, { multi: true, useValue: APPLICATION_DIRECTIVES })
];
