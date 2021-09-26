import {User} from "./user";

export interface Attendance {
  id: number;
  date: string;
  time: string;
  attendance: number;
  late: number;
  absent: number;
  quantity: number;
  status: Status;
  employee: User;
}

export interface SaveAttendance {
  dateTime: string;
}

export interface Status {
  id: number;
  name: string;
}
