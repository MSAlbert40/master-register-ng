import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<MessageComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
    window.location.href = '/Register-Employee';
  }
}
