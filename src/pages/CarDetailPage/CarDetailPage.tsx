import React from "react";
import { useLocation } from "react-router-dom";
import { CarDetail } from "../CarList/CarList";
import { Card, Tabs } from "flowbite-react";

const CarDetailPage: React.FC = () => {
  const location = useLocation();
  const car = location.state as CarDetail;

  if (!car) {
    return <div>Car details not found!</div>;
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-5">
      <Card className="">
        <Tabs aria-label="Pills" variant="pills">
          <Tabs.Item active title="General Details">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <h2 className="text-xl font-semibold mb-2">General Details:</h2>
              <ul className="list-disc pl-5 mb-4">
                <li>Body Type: {car.carDetail.carGeneralDetail.bodyType}</li>
                <li>
                  Transmission: {car.carDetail.carGeneralDetail.transmission}
                </li>
                <li>Seats: {car.carDetail.carGeneralDetail.numberOfSeats}</li>
                <li>Segment: {car.carDetail.carGeneralDetail.segment}</li>
                <li>
                  Drive Wheel: {car.carDetail.carGeneralDetail.driveWheel}
                </li>
                <li>Fuel Type: {car.carDetail.carGeneralDetail.fuelType}</li>
                <li>
                  Horse Power: {car.carDetail.carGeneralDetail.horsePower}
                </li>
                <li>Torque: {car.carDetail.carGeneralDetail.torque}</li>
                <li>
                  Engine Capacity:{" "}
                  {car.carDetail.carGeneralDetail.engineCapacity} cc
                </li>
                <li>
                  Turbo: {car.carDetail.carGeneralDetail.turbo ? "Var" : "Yok"}
                </li>
                <li>
                  Fuel Tank Capacity:{" "}
                  {car.carDetail.carGeneralDetail.fuelTankCapacity} L
                </li>
                <li>
                  Cargo Capacity: {car.carDetail.carGeneralDetail.cargoCapacity}{" "}
                  L
                </li>
              </ul>
            </p>
          </Tabs.Item>
          <Tabs.Item title="Performance Details" className="flex flex-col">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <h2 className="text-xl font-semibold mb-2">
                Performance Details:
              </h2>
              <ul className="list-disc pl-5">
                <li>
                  Top Speed: {car.carDetail.carPerformanceDetail.topSpeed} km/h
                </li>
                <li>
                  Acceleration:{" "}
                  {car.carDetail.carPerformanceDetail.acceleration} sec (0-100
                  km/h)
                </li>
                <li>
                  Urban Consumption:{" "}
                  {car.carDetail.carPerformanceDetail.urbanConsumption} L/100km
                </li>
                <li>Emission: {car.carDetail.carPerformanceDetail.emmision}</li>
                <li>
                  Power Consumption:{" "}
                  {car.carDetail.carPerformanceDetail.powerConsumption}
                </li>
                <li>
                  Battery Range:{" "}
                  {car.carDetail.carPerformanceDetail.batteryRange}
                </li>
              </ul>
            </p>
          </Tabs.Item>
          <Tabs.Item title="Safety Details" className="flex flex-col">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <h2 className="text-xl font-semibold mb-2">Safety Details:</h2>
              <ul className="list-disc pl-5">
                <li>
                  ABS: {car.carDetail.carSafetyDetail.abs ? "Var" : "Yok"}
                </li>
                <li>
                  Brake Assist:{" "}
                  {car.carDetail.carSafetyDetail.brakeAssist ? "Var" : "Yok"}
                </li>
                <li>
                  Emergency Braking:{" "}
                  {car.carDetail.carSafetyDetail.emergencyBraking
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Blind Spot Assist:{" "}
                  {car.carDetail.carSafetyDetail.blindSpotAssist
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Stability Control:{" "}
                  {car.carDetail.carSafetyDetail.stabilityControl
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Traction Control:{" "}
                  {car.carDetail.carSafetyDetail.tractionControl
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Driver Airbag:{" "}
                  {car.carDetail.carSafetyDetail.driverAirbag ? "Var" : "Yok"}
                </li>
                <li>
                  Passenger Airbag:{" "}
                  {car.carDetail.carSafetyDetail.passangerAirbag
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Side Airbag:{" "}
                  {car.carDetail.carSafetyDetail.sideAirbag ? "Var" : "Yok"}
                </li>
                <li>
                  Head Airbag:{" "}
                  {car.carDetail.carSafetyDetail.headAirbag ? "Var" : "Yok"}
                </li>
                <li>
                  Knee Airbag:{" "}
                  {car.carDetail.carSafetyDetail.kneeAirbag ? "Var" : "Yok"}
                </li>
                <li>
                  Lane Airbag:{" "}
                  {car.carDetail.carSafetyDetail.laneAirbag ? "Var" : "Yok"}
                </li>
                <li>
                  Fatigue Sensor:{" "}
                  {car.carDetail.carSafetyDetail.fatigueSensor ? "Var" : "Yok"}
                </li>
                <li>
                  Tire Pressure Sensor:{" "}
                  {car.carDetail.carSafetyDetail.tirePressureSensor
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Traffic Sign Recognition:{" "}
                  {car.carDetail.carSafetyDetail.trafficSignRecognition
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Collision Warning System:{" "}
                  {car.carDetail.carSafetyDetail.collisionWarningSystem
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Automatic Level Control:{" "}
                  {car.carDetail.carSafetyDetail.automaticLevelControl
                    ? "Var"
                    : "Yok"}
                </li>
              </ul>
            </p>
          </Tabs.Item>
          <Tabs.Item title="Comfort Details" className="flex flex-col">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <h2 className="text-xl font-semibold mb-2">Comfort Details:</h2>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  Central Door Lock:{" "}
                  {car.carDetail.carComfortDetail.centralDoorLock
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Keyless Entry:{" "}
                  {car.carDetail.carComfortDetail.keylessEntry ? "Var" : "Yok"}
                </li>
                <li>
                  Start Button:{" "}
                  {car.carDetail.carComfortDetail.startButton ? "Var" : "Yok"}
                </li>
                <li>
                  Control Circut:{" "}
                  {car.carDetail.carComfortDetail.controlCircut ? "Var" : "Yok"}
                </li>
                <li>
                  Electric Windows Front:{" "}
                  {car.carDetail.carComfortDetail.electricWindowsFront
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Electric Windows Back:{" "}
                  {car.carDetail.carComfortDetail.electricWindowsBack
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Power Steering:{" "}
                  {car.carDetail.carComfortDetail.powerSteering ? "Var" : "Yok"}
                </li>
                <li>
                  Cruise Control:{" "}
                  {car.carDetail.carComfortDetail.cruiseControl ? "Var" : "Yok"}
                </li>
                <li>
                  Air Conditioning:{" "}
                  {car.carDetail.carComfortDetail.airConditioning
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Parking Sensor:{" "}
                  {car.carDetail.carComfortDetail.parkingSensors
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Reverse Camera:{" "}
                  {car.carDetail.carComfortDetail.reverseCamera ? "Var" : "Yok"}
                </li>
                <li>
                  Parking Machine:{" "}
                  {car.carDetail.carComfortDetail.parkingMachine
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Start Stop System:{" "}
                  {car.carDetail.carComfortDetail.startStopSystem
                    ? "Var"
                    : "Yok"}
                </li>
              </ul>
            </p>
          </Tabs.Item>
          <Tabs.Item title="Interior Details" className="flex flex-col">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <h2 className="text-xl font-semibold mb-2">Interior Details:</h2>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  Height Adjustment Seat:
                  {car.carDetail.carInteriorDetail.heightAdjustmentSeat
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Electric Adjustment Seat:
                  {car.carDetail.carInteriorDetail.electricAdjustmentSeat
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Heated Seats:
                  {car.carDetail.carInteriorDetail.heatedSeats ? "Var" : "Yok"}
                </li>
                <li>
                  Ventilated Seats:
                  {car.carDetail.carInteriorDetail.ventilatedSeats
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Sports Seats:
                  {car.carDetail.carInteriorDetail.sportsSeat ? "Var" : "Yok"}
                </li>
                <li>
                  Adjustable Steering Wheel:
                  {car.carDetail.carInteriorDetail.adjustableSteeringWheel
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Heated Steering Wheel:
                  {car.carDetail.carInteriorDetail.heatedSteeringWheel
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Rear Headrest:
                  {car.carDetail.carInteriorDetail.rearHeadrest ? "Var" : "Yok"}
                </li>
                <li>
                  Folding Rear Seat:
                  {car.carDetail.carInteriorDetail.foldingRearSeat
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Sliding Rear Seat:
                  {car.carDetail.carInteriorDetail.slidingRearSeat
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Central Arm Rest:
                  {car.carDetail.carInteriorDetail.centralArmRest
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Make Up Mirror:
                  {car.carDetail.carInteriorDetail.makeUpMirror ? "Var" : "Yok"}
                </li>
                <li>
                  Adjustable Dashboard Ligthing:
                  {car.carDetail.carInteriorDetail.adjustableDashboardLighting
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Tachometer:
                  {car.carDetail.carInteriorDetail.tachometer ? "Var" : "Yok"}
                </li>
                <li>
                  Day Counter:
                  {car.carDetail.carInteriorDetail.dayCounter ? "Var" : "Yok"}
                </li>
                <li>
                  Coolant Temperature Gauge:
                  {car.carDetail.carInteriorDetail.coolantTemperatureGauge
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Outside Temperature Gauge:
                  {car.carDetail.carInteriorDetail.outsiteTemperatureGauge
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Board Computer:
                  {car.carDetail.carInteriorDetail.boardComputer
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Audio System:
                  {car.carDetail.carInteriorDetail.audioSystem ? "Var" : "Yok"}
                </li>
                <li>
                  Digital Radio:
                  {car.carDetail.carInteriorDetail.digitalRadio ? "Var" : "Yok"}
                </li>
                <li>
                  Audio Input:{car.carDetail.carInteriorDetail.audioInput}
                </li>
                <li>
                  Navigation System:
                  {car.carDetail.carInteriorDetail.navigationSystem}
                </li>
                <li>Bluetooth:{car.carDetail.carInteriorDetail.bluetooth}</li>
              </ul>
            </p>
          </Tabs.Item>
          <Tabs.Item title="Exterior Details" className="flex flex-col">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <h2 className="text-xl font-semibold mb-2">General Details:</h2>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  Interval Wiper:{" "}
                  {car.carDetail.carExteriorDetail.intervalWiper
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Alloy Wheels:{" "}
                  {car.carDetail.carExteriorDetail.alloyWheels ? "Var" : "Yok"}
                </li>
                <li>
                  Rain Sensor:{" "}
                  {car.carDetail.carExteriorDetail.rainSensor ? "Var" : "Yok"}
                </li>
                <li>
                  Sun Roof:{" "}
                  {car.carDetail.carExteriorDetail.sunRoof ? "Var" : "Yok"}
                </li>
                <li>
                  Panoramic Roof:{" "}
                  {car.carDetail.carExteriorDetail.panoramicRoof
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Roof Rails:{" "}
                  {car.carDetail.carExteriorDetail.roofRails ? "Var" : "Yok"}
                </li>
                <li>
                  Metallic Paint:{" "}
                  {car.carDetail.carExteriorDetail.mettalicPaint
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Painted Bumpers:{" "}
                  {car.carDetail.carExteriorDetail.paintedBumpers
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Tinted Glass:{" "}
                  {car.carDetail.carExteriorDetail.tintedGlass ? "Var" : "Yok"}
                </li>
                <li>
                  Rear Privacy Glass:{" "}
                  {car.carDetail.carExteriorDetail.rearPrivacyGlass
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Electric Mirrors:{" "}
                  {car.carDetail.carExteriorDetail.electricMirrors
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Folding Exterior Mirrors:{" "}
                  {car.carDetail.carExteriorDetail.foldingExteriorMirrors
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Front Fog Lights:{" "}
                  {car.carDetail.carExteriorDetail.frontFogLights
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Xenon Headlights:{" "}
                  {car.carDetail.carExteriorDetail.xenonHeadLights
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Led Headlights:{" "}
                  {car.carDetail.carExteriorDetail.ledHeahlights
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Led Rear Lighting:{" "}
                  {car.carDetail.carExteriorDetail.ledRearLighting
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Day Lights:{" "}
                  {car.carDetail.carExteriorDetail.dayLights ? "Var" : "Yok"}
                </li>
                <li>
                  Head Lamp Washer:{" "}
                  {car.carDetail.carExteriorDetail.headlampWasher
                    ? "Var"
                    : "Yok"}
                </li>
                <li>
                  Burglar Alarm:{" "}
                  {car.carDetail.carExteriorDetail.burglarAlarm ? "Var" : "Yok"}
                </li>
              </ul>
            </p>
          </Tabs.Item>
        </Tabs>
      </Card>
    </div>
  );
};

export default CarDetailPage;
