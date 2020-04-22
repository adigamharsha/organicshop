import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
  
  // tslint:disable-next-line: no-input-rename
  @Input('category') category;
  categories$;

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.getCategories().snapshotChanges();
  }

  ngOnInit() {
  }

}
