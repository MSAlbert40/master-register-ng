import {Schedule} from "./schedule";
import {WorkArea} from "./work-area";

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  role: Role;
  name: string;
  lastName: string;
  dni: string;
  age: number;
  gender: string;
  address: string;
  phone: string;
  salary: number;
  schedule: Schedule;
  workArea: WorkArea;
}

export interface Role {
  id: number;
  name: string;
}
