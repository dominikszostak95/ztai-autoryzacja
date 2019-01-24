import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

    form: FormGroup;

    constructor() {}

    ngOnInit() {
        this.form = new FormGroup({
            title: new FormControl('', [Validators.required, Validators.minLength(1)]),
            photoUrl: new FormControl('', [Validators.required, Validators.minLength(1)]),
            content: new FormControl('', [Validators.required, Validators.minLength(1)])
        });
    }

}


