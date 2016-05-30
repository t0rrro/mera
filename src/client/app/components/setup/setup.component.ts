import { Component } from '@angular/core';
import {
   FormBuilder,
   ControlGroup,
   Validators,
   FORM_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'mera-setup',
    template: require('./setup.html'),
    // styles: [ require('./setup.scss') ],
    providers: [FormBuilder],
    directives: [FORM_DIRECTIVES]
})
export class MeraSetup {
    // @LocalStorage() private user: User = false;
    setupForm: ControlGroup;
    
    constructor(private fb: FormBuilder) {}
    
    ngOnInit() {
        this.setupForm = this.fb.group({
            fname: ['', Validators.required],
            lname: ['', Validators.pattern('[a-zA-Z]+')]
        });
    }
    
    // validate input and 
    setup(): void {
        console.log(this.setupForm);
        for (let [k, v] of this.setupForm.value) {
            console.log(k, v);
        }
    }
}