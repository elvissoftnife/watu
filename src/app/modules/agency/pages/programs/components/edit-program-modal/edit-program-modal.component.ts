import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-program-modal',
  templateUrl: './edit-program-modal.component.html',
  styleUrls: ['./edit-program-modal.component.css']
})
export class EditProgramModalComponent {

  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    console.log("entré");
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log("content => ", content);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log("reason => ", reason);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
