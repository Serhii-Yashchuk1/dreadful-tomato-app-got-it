import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PAGINATION as PGN } from 'src/app/constants';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  currentPage = PGN.CURR_PAGE;
  itemsPerPage = PGN.ITEMS_PER_PAGE;

  getPages(): number[] {
    const pages: number[] = [];
    const startPage = 1;
    const endPage = Math.ceil(this.totalItems / this.itemsPerPage);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  goToPage(page: number) {
    const endPage = Math.ceil(this.totalItems / this.itemsPerPage);
    if (page >= 1 && page <= endPage) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }

  nextPage() {
    const endPage = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage < endPage) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
}
