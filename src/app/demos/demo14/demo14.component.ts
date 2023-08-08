import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html',
  styleUrls: ['./demo14.component.scss']
})
export class Demo14Component implements OnInit {

  // Avec TWB
  name: string = "";
  email: string = "";
  tel: string = "";
  password: string = "";

  send (): void {
    console.log(this.name);
    console.log(this.email);
    console.log(this.tel);
    console.log(this.password);
  }

  // Avec Validators

  constructor (private fb: FormBuilder) { }

  myForm!: FormGroup;

  ngOnInit (): void {
    this.myForm = this.fb.group({
      name: ['Valeur par défaut', [Validators.required, Validators.minLength(2), Validators.maxLength(20)], []],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      tel: ['', Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)]
    }, {});
  }


}
