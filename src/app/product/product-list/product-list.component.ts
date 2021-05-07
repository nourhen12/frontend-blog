import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import {take,first, map} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList:any;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
      .pipe(
        map(data=>data.items),
        map(item=>item),
        take(3)
        )
      .subscribe(
      {
        next:(data)=>{
          this.productList=data;
        },
        error:(error)=>{
          alert(JSON.stringify(error))
        },
        complete:()=>{
          console.log
        }
      });
  }

}

