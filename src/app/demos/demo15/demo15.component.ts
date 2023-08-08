import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emailValidator } from 'src/app/shared/Validators/email.validator';
import { twoPasswordCheckValidator } from 'src/app/shared/Validators/twoPasswordCheck.validator';

@Component({
  selector: 'app-demo15',
  templateUrl: './demo15.component.html',
  styleUrls: ['./demo15.component.scss']
})
export class Demo15Component implements OnInit {

  myForm!: FormGroup;

  constructor (private fb: FormBuilder) { }

  ngOnInit (): void {
    this.myForm = this.fb.group({
      email: ['', [emailValidator], []],
      password: [],
      confirmPassword: []
    }, {
      validators: [twoPasswordCheckValidator]
    });


    console.log(this.myForm.controls['email']);
    console.log(this.myForm.errors);

  }

}
