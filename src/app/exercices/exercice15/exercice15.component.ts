import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ageValidator } from 'src/app/shared/Validators/age.validator';

@Component({
  selector: 'app-exercice15',
  templateUrl: './exercice15.component.html',
  styleUrls: ['./exercice15.component.scss']
})
export class Exercice15Component implements OnInit {

  myForm!: FormGroup;

  constructor (private fb: FormBuilder) { }
  
  ngOnInit (): void {
    this.myForm = this.fb.group({
      birthdate: ['', ageValidator]
    })
  }

}
