import {
    describe, 
    it, 
    expect, 
    beforeEachProviders, 
    inject } from '@angular/testing';
import { MeraApp } from './app.component';

beforeEachProviders(() => [MeraApp]);

// describe('App: Dash', () => {
//   it('should have grabbed user data', inject([DashApp], (app: DashApp) => {
//     expect(app.user).toBe(42);
//   }));
//
//   describe('#meaningOfLife', () => {
//     it('should get the meaning of life', inject([DashApp], (app: DashApp) => {
//       expect(app.meaningOfLife()).toBe('The meaning of life is 42');
//       expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
//     }));
//   });
// });
