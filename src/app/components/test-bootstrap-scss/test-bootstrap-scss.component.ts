import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test-bootstrap-scss',
  templateUrl: './test-bootstrap-scss.component.html',
  styleUrls: ['./test-bootstrap-scss.component.scss']
})
export class TestBootstrapScssComponent implements OnInit {

  private countInside: number = 0;
  private countOutside: number = 0;

  private attachOutsideOnClick = false;

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  private _toggleAttachOutsideOnClick() {
    console.info('_toggleAttachOutsideOnClick:', this.attachOutsideOnClick);
    this.attachOutsideOnClick = !this.attachOutsideOnClick;
  }

  private onClick(e: Event) {
    console.info('Clicked inside:', e);
    this.countInside++;
  }

  private onClickedOutside(e: Event) {
    console.info('Clicked outside:', e);
    this.countOutside++;
  }
}
