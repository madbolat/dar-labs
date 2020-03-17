import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from '../shared/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { Category } from '../shared/category.types';
import { UploadFile } from 'ng-zorro-antd';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  form: FormGroup;
  category: Category;
  loading: boolean;
  isLoading: boolean;

  environment = environment;

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
          this.form.patchValue(this.category);
        }  
      }
    );

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      imageUrl: new FormControl('')
    });
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
    this.isLoading = true;
    if(this.category) {
      const updatedCategory = {...this.category, ...this.form.value};
      this.categoriesService.update(updatedCategory)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res) {
          this.router.navigate(['home', 'categories']);
        }
        this.isLoading = false;
      });
      return;
    }

    // Create Category
    this.categoriesService.create(this.form.value)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res && res.id) {
          this.router.navigate(['home', 'categories']);
          this.isLoading = false;
        }
      });
  }
  
  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        console.log(info.file);
        this.form.get('imageUrl').setValue(info.file.response.filename)
        break;
      case 'error':
        this.loading = false;
        break;
    }
  }


}
