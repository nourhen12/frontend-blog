import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getAllProducts():Observable<any>{
    return this.http.get(`${environment.baseUri}/products`) as Observable<any>
  }

  public addProduct(product:IProduct):Observable<any>{
    return this.http.post(`${environment.baseUri}/products`,product) as Observable<any>
  }
}


