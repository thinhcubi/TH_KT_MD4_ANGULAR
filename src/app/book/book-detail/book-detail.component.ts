import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
   book: any;
  constructor(private bookServices: BookService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.detailBooks()
  }
   detailBooks(){
      let id = this.route.snapshot.paramMap.get('id');
      this.book = this.bookServices.detail(id).subscribe(res => {
        this.book = res
      })

   }
}
