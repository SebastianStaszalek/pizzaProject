import {OrderStatus} from './order-status.enum';

export interface Order {
  id: number;
  dishIds: number[];
  status: OrderStatus;
  date: Date;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  eMail: string;
  city: string;
  street: string;
  buildingNumber: string;
  apartmentNumber: string;
}
