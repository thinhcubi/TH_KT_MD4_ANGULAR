import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./book/book-list/book-list.component";
import {BookCreateComponent} from "./book/book-create/book-create.component";
import {BookDetailComponent} from "./book/book-detail/book-detail.component";

const routes: Routes = [
  {
    path : 'books',
    component : BookListComponent,
  },
  {
    path : 'books/create',
    component : BookCreateComponent
  },
  {
    path : 'books/detail/:id',
    component : BookDetailComponent
  },
  {
    path : 'books/delete/:id',
    component : BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
