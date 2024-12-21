export interface CarInteriorDetailModel {
  id: number;
  heightAdjustmentSeat: boolean;
  electricAdjustmentSeat: boolean;
  heatedSeats: boolean;
  ventilatedSeats: boolean;
  sportsSeat: boolean;
  adjustableSteeringWheel: boolean;
  heatedSteeringWheel: boolean;
  rearHeadrest: boolean;
  foldingRearSeat: boolean;
  slidingRearSeat: boolean;
  centralArmRest: boolean;
  makeUpMirror: boolean;
  adjustableDashboardLighting: boolean;
  tachometer: boolean;
  dayCounter: boolean;
  coolantTemperatureGauge: boolean;
  outsiteTemperatureGauge: boolean;
  boardComputer: boolean;
  audioSystem: boolean;
  digitalRadio: boolean;
  audioInput: string;
  navigationSystem: number;
  bluetooth: number;
}