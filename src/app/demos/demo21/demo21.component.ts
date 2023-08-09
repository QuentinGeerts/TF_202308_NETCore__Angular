import { Component, OnInit } from '@angular/core';
import { finalize, mergeMap } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-demo21',
  templateUrl: './demo21.component.html',
  styleUrls: ['./demo21.component.scss']
})
export class Demo21Component implements OnInit {

  products: Product[] = [];

  constructor (private _productService: ProductService) { }

  ngOnInit (): void {
    // this._productService.get().subscribe((data: Product[]) => this.products = data)
    this._productService.get().subscribe({
      next: (data: Product[]) => this.products = data,
      error: (error) => console.log(error),
      complete: () => console.log("Récupération terminée")
    })
  }

  remove (id: number): void {
    this._productService
      .delete(id)
      .pipe(
        mergeMap(() => this._productService.get()),
        finalize(() => console.log("Refresh de la vue"))
      )
      .subscribe({
      next: (data: Product[]) => this.products = data
    });
  }

}
