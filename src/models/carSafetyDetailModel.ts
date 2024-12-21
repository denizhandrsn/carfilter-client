export interface CarSafetyDetailModel {
  id: number;
  abs: boolean;
  brakeAssist: boolean;
  emergencyBraking: boolean;
  blindSpotAssist: boolean;
  stabilityControl: boolean;
  tractionControl: boolean;
  driverAirbag: boolean;
  passangerAirbag: boolean;
  sideAirbag: boolean;
  headAirbag: boolean;
  kneeAirbag: boolean;
  laneAirbag: boolean;
  fatigueSensor: boolean;
  tirePressureSensor: boolean;
  trafficSignRecognition: boolean;
  collisionWarningSystem: boolean;
  automaticLevelControl: boolean;
}