import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {Books} from "../../books";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Books[] = []

  constructor(private bookServices: BookService,
              private route: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAllBooks()
  }

  getAllBooks() {
    this.bookServices.getAll().subscribe(res => {
      console.log(res)
      this.books = res
    })
  }
  deleteBook(){
    let id = this.route.snapshot.paramMap.get('id');
    this.bookServices.delete(id).subscribe(res => {
      this.router.navigate(['books'])
    })
  }
}
