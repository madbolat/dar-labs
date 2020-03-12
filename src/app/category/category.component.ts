import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from '../shared/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { Category } from '../shared/category.types';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  form: FormGroup;
  category: Category;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      mergeMap(params => {
        if(params.get('id')) {
          return this.categoriesService.getById(+params.get('id'));
        }
        return of(null);
      })
    )
    .subscribe(category => {
        this.category = category;
        if (this.category) {
          this.form.get('name').setValue(this.category.name);
        }
      }
    )

    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    for (const i in this.form.controls) {
      if (this.form.controls[i]) {
        this.form.controls[i].markAsDirty();
        this.form.controls[i].updateValueAndValidity();
      }
    }

    if(!this.form.valid) {
      return;
    }

    // Update Category
    if(this.category) {
      const updatedCategory = {...this.category, ...this.form.value};
      this.categoriesService.update(updatedCategory).
      subscribe(res => {
        if (res) {
          this.router.navigate(['home', 'categories']);
        }
      });
      return;
    }

    // Create Category
    this.categoriesService.create(this.form.value)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res && res.id) {
          this.router.navigate(['home', 'categories']);
        }
      });
  }

}
