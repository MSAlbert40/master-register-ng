import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private daysArray = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  private monthArray = ['Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre'];

  private date = new Date();

  public hour: any;
  public minute: string | undefined;
  public second: string | undefined;
  public ampm: string | undefined;

  public day: string | undefined;
  public numDay: number | undefined;
  public month: string | undefined;
  public year: number | undefined;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);

    this.day = this.daysArray[this.date.getDay()];
    this.numDay = this.date.getUTCDate();
    this.month = this.monthArray[this.date.getMonth()];
    this.year = this.date.getFullYear();
  }

  private updateDate(date: Date) {
    const hours = date.getHours();

    this.ampm = hours >= 12 ? 'PM' : 'AM';

    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  }
}
