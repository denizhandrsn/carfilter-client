import { CarComfortDetailModel } from "./carComfortDetailModel";
import { CarExteriorDetailModel } from "./carExteriorDetailModel";
import { CarGeneralDetailModel } from "./carGeneralDetailModel";
import { CarInteriorDetailModel } from "./carInteriorDetailModel";
import { CarPerformanceDetailModel } from "./carPerformanceDetailModel";
import { CarSafetyDetailModel } from "./carSafetyDetailModel";

export interface CarDetailModel {
  carGeneralDetailId: number;
  carPerformanceDetailId: number;
  carSafetyDetailId: number;
  carComfortDetailId: number;
  carInteriorDetailId: number;
  carExteriorDetailId: number;
  carGeneralDetailRequest: CarGeneralDetailModel;
  carSafetyDetailRequest: CarSafetyDetailModel;
  carPerformanceDetailRequest: CarPerformanceDetailModel;
  carComfortDetailRequest: CarComfortDetailModel;
  carInteriorDetailRequest: CarInteriorDetailModel;
  carExteriorDetailRequest: CarExteriorDetailModel;  
}