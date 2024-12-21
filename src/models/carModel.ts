import { CarDetailModel } from './carDetailModel';
export interface CarModel {
    brand: string;
    model: string;
    generation: string; 
    CarDetailModel : CarDetailModel;
}