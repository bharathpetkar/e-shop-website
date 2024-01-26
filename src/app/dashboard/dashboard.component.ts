import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productList: any[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProductList();
  }

  loadProductList() {
    this.productService.getProductList().subscribe(
      (data) => {
        this.productList = data;
      },
      (error) => {
        console.error('Error loading product list:', error);
      }
    );
  }
}
