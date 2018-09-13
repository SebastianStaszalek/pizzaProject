import {OrderStatus} from './enum/order-status.enum';
import {OrderQuantity} from './order-quantity';
import {Moment} from 'moment';

export interface Order {
  id: number;
  dishIds: OrderQuantity[];
  status: OrderStatus;
  date: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  eMail: string;
  city: string;
  street: string;
  buildingNumber: string;
  apartmentNumber: string;
  totalCost: number;
}
