import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface page {
  isActive: boolean,
  text: number
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() crrPage: any;
  @Input() infoPage: any;

  @Input() numPage: any;

  @Output() updatePage = new EventEmitter<any>();

  pageShow = [
    // { isActive: true, text: 1 },
    // { isActive: false, text: 2 },
    // { isActive: false, text: 3 },
    // { isActive: false, text: 4 }
  ]

  constructor() { }

  ngOnInit(): void {
    this.generatePage();
  }

  generatePage() {
    for (let i = 0; i < this.numPage; i++) {
      this.pageShow.push({ isActive: i == 0, text: i + 1 })
    }
  }

  check() {
    if (this.infoPage.num_pages < 5) {
      for (let i = 0; i < this.pageShow.length; i++) {
        if (i + 1 > this.infoPage.num_pages) {
          this.pageShow[i].text = -1;
        }
      }
    }
  }

  changePage(target: any) {
    let lastIndex = this.pageShow.length - 1;
    if (target > this.crrPage) {
      if (this.infoPage.current_page !== this.infoPage.next_Page) {
        if (target >= this.pageShow[lastIndex].text) {
          this.setPageValue('next');
          this.setPageActive(this.pageShow.findIndex(el => el.text == target));
        } else {
          this.setPageActive(this.pageShow.findIndex(el => el.text == target));
        }
        this.crrPage = target;
        this.updatePage.emit(this.crrPage);
      }
    } else if (target < this.crrPage) {
      if (this.infoPage.current_page !== this.infoPage.previous_page) {
        if (target <= this.pageShow[0].text) {
          this.setPageValue('pre');
          this.setPageActive(this.pageShow.findIndex(el => el.text == target));
        } else {
          this.setPageActive(this.pageShow.findIndex(el => el.text == target));
        }
        this.crrPage = target;
        this.updatePage.emit(this.crrPage);
      }
    }
  }

  setPageValue(param: any) {
    let lastIndex = this.pageShow.length - 1;
    if (param == 'next' && this.pageShow[lastIndex].text != -1) {
      let upBound = (this.pageShow[lastIndex].text + lastIndex) > this.infoPage.num_pages ? this.infoPage.num_pages : (this.pageShow[lastIndex].text + lastIndex);
      for (let i = this.pageShow.length - 1; i >= 0; i--) {
        this.pageShow[i].text = upBound;
        upBound -= 1;
      }
      return;
    }
    if (param == 'pre' && this.pageShow[0].text != 1) {
      let downBound = (this.pageShow[0].text - lastIndex) < 1 ? 1 : (this.pageShow[0].text - lastIndex);
      for (let i = 0; i < this.pageShow.length; i++) {
        this.pageShow[i].text = downBound;
        downBound += 1;
      }
    }

  }

  setPageActive(active: any) {
    for (let i = 0; i < this.pageShow.length; i++) {
      this.pageShow[i].isActive = (i == active);
    }
  }


}
