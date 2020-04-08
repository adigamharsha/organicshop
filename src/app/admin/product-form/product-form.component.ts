import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { map, take } from 'rxjs/operators';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(private category: CategoryService, private productService: ProductService, private router: Router,
              private route: ActivatedRoute) {
    this.categories$ = this.category.getCategories().valueChanges();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProduct(this.id).valueChanges().subscribe(response => {
        this.product = response;
      });
      console.log(this.product);
    }
  }

  ngOnInit() {
  }

  save(product) {
    if (this.id) { this.productService.updateProduct(this.id, product); } else { this.productService.save(product); }
    this.router.navigate(['/admin/products']);
  }
  delete() {

    // tslint:disable-next-line: curly
    if (!confirm('are you sure to delete the product'))  return;
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);


  }
}
