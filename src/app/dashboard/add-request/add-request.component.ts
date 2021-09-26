import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../security/services/auth.service";
import {RequestService} from "../../security/services/request.service";
import {TypeRequest} from "../../security/interfaces/type-request";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  requestForm: FormGroup;

  typeRequestId: any;
  typeRequestList: TypeRequest[] = [];

  employeeId: string | null | undefined;

  constructor(private authService:AuthService, private requestService: RequestService,  private formBuilder: FormBuilder) {
    this.requestForm = this.formBuilder.group({
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.employeeId = this.authService.getUser();
    this.viewAllTypeRequest();
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

  sendRequest() {
    if (typeof this.employeeId === "string") {
      this.requestService.addRequest(this.requestForm.getRawValue(), parseInt(this.employeeId), this.typeRequestId).subscribe({
        error: (err) => console.log(err),
        next: (res) => {
          console.log(res);
          window.location.reload();
        },
        complete: () => console.log('Complete')
      })
    }
  }
}
