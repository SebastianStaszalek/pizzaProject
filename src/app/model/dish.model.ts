import {DishType} from './enum/dish-type.enum';

export interface Dish {
  id: number;
  name: string;
  isAvailable: boolean;
  description: string;
  type: DishType;
  price: number;
}
