import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {

  @Input()
  cartList: string[] = [];

  @Output()
  deleteArticle: EventEmitter<number> = new EventEmitter<number>();

  remove (index: number): void {
    this.deleteArticle.emit(index);
  }

}
