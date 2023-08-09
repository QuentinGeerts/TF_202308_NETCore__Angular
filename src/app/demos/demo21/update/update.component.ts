import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id!: number;
  form!: FormGroup;

  constructor (
    private _productService: ProductService,
    private _fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit (): void {
    this.form = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      price: ['', [Validators.required, Validators.min(0), Validators.max(9999)]]
    });

    // Récupération de l'id dans l'url
    this.id = this._activatedRoute.snapshot.params['id'];
    console.log("id: ", this.id);

    this._productService.getById(this.id).subscribe((data) => this.form.patchValue(data));
  }

  onSubmit (): void {
    // console.log(this.form.value);
    if (this.form.invalid) return;

    this._productService.update(this.id, this.form.value).subscribe({
      next: () => this._router.navigateByUrl('/demos/demo21'),
      error: (error) => console.log("Error: ", error) 
    });
  }

}
