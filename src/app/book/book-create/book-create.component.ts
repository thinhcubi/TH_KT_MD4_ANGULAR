import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Books} from "../../books";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  books: Books[] = []
  formAddBooks? : FormGroup
  constructor(private bookServices : BookService,
              private fb : FormBuilder,
              private route: Router
              ) { }

  ngOnInit(): void {
    this.formAddBooks = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    })
  }
  submit() {
    let data = this.formAddBooks?.value
    this.bookServices.create(data).subscribe(res => {
      console.log(res)
      this.route.navigate(['/books'])
    })
  }

}
