import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<WindowComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
    window.location.href = '/Mark-Attendance';
  }
}
