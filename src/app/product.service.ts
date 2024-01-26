import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://api.kalpav.com/api/v1/product/category/retailz';

  constructor(private http: HttpClient) {}

  getProductList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
