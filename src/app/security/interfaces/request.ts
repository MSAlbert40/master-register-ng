import {TypeRequest} from "./type-request";
import {User} from "./user";

export interface Request {
  id: number;
  description: string;
  typeRequest: TypeRequest;
  employee: User;
}

export interface SaveRequest {
  description: string;
}
