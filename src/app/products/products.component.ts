import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  filteredProducts: any = [];
  categories$;
  category: string;
  subscription: Subscription;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute) {
    this.productService.getProducts().snapshotChanges().pipe(switchMap((products: any) => {
      this.products = products;
      return this.route.queryParamMap;
    }))
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ? this.products.filter(p => p.payload.val().category.toLowerCase() === this.category) :
          this.products;
      });
    this.categories$ = this.categoryService.getCategories().snapshotChanges();
  }

  ngOnInit() {


  }


}
