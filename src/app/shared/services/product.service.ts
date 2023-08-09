import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatchName } from 'src/app/patch-name.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly _productEndPoint: string = "http://localhost:3000/products";

  // Utilisation de json-server : npm i json-server
  // package.json configuration : scripts > "server:mock": "npx json-server --watch mocks/data.json"

  constructor (private _httpClient: HttpClient) { }

  // → CRUD

  get (): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this._productEndPoint);
  }

  getById (id: number): Observable<Product> {
    return this._httpClient.get<Product>(this._productEndPoint + '/' + id);
  }

  add (product: Product): Observable<void> {
    return this._httpClient.post<void>(this._productEndPoint, product);
  }

  update (id: number, product: Product): Observable<void> {
    return this._httpClient.put<void>(this._productEndPoint + '/' + id, product);
  }

  delete (id: number): Observable<void> {
    return this._httpClient.delete<void>(this._productEndPoint + '/' + id);
  }

  // Pour info
  patchName (id: number, productName: PatchName): Observable<void> {
    return this._httpClient.put<void>(this._productEndPoint + '/' + id, productName);
  }
}
