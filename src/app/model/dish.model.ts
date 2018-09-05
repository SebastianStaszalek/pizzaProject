import {DishType} from './dish-type.enum';

export interface Dish {
  id: number;
  name: string;
  isAvailable: boolean;
  description: string;
  type: typeof DishType;
  price: number;
}
