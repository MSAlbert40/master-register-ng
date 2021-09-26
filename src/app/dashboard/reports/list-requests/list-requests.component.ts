import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../security/services/auth.service";
import {RequestService} from "../../../security/services/request.service";
import {TypeRequest} from "../../../security/interfaces/type-request";
import {Request} from "../../../security/interfaces/request";

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent implements OnInit {

  requestList: Request[] = [];

  typeRequestId: any;
  typeRequestList: TypeRequest[] = [];

  managerId: string | null | undefined;
  displayedColumns: string[] = ['employee', 'workArea', 'typeRequest', 'description', 'dni', 'email'];

  constructor(private authService:AuthService, private requestService: RequestService) { }

  ngOnInit(): void {
    this.managerId = this.authService.getUser();
    this.allRequest();
    this.viewAllTypeRequest();
  }

  allRequest() {
    if (typeof this.managerId === "string") {
      this.requestService.listRequestByManager(parseInt(this.managerId)).subscribe({
        error: (err) => console.log(err),
        next: (rest) => {
          this.requestList = rest.data;
          console.log(rest.data);
        },
        complete: () => console.log('Complete')
      })
    }
  }

  viewAllTypeRequest(): void {
    this.authService.listTypeRequest().subscribe({
      error: (err) => console.log(err),
      next: (rest) => {
        this.typeRequestList = rest.data;
        console.log(this.typeRequestList);
      },
      complete: () => console.log('Complete')
    });
  }

  viewAllRequestByTypeRequest() {
    if (this.typeRequestId == null) this.allRequest();
    else if (typeof this.managerId === "string") {
      this.requestService.listRequestByTypeRequestAndManager(parseInt(this.managerId), this.typeRequestId).subscribe({
        error: (err) => console.log(err),
        next: (rest) => {
          this.requestList = rest.data;
          console.log(this.requestList);
        },
        complete: () => console.log('Complete')
      })
    }
  }
}
