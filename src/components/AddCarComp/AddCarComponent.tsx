import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Label } from "flowbite-react";

type Props = {};

type CarDetailsFormValues = {
  brand: string;
  model: string;
  generation: string;
  createCarDetailRequest: {
    carGeneralDetailId: number;
    carPerformanceDetailId: number;
    carSafetyDetailId: number;
    carComfortDetailId: number;
    carInteriorDetailId: number;
    carExteriorDetailId: number;
    createCarGeneralDetailRequest: {
      id: number;
      bodyType: string;
      transmission: string;
      numberOfSeats: number;
      segment: string;
      driveWheel: string;
      fuelType: string;
      horsePower: number;
      torque: number;
      engineCapacity: string;
      turbo: boolean;
      fuelTankCapacity: number;
      cargoCapacity: number;
    };
    createCarSafetyDetailRequest: {
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
    };
    createCarPerformanceDetailRequest: {
      id: number;
      topSpeed: number;
      acceleration: string;
      urbanConsumption: string;
      emmision: string;
      powerConsumption: string;
      batteryRange: number;
    };
    createCarComfortDetailRequest: {
      id: number;
      centralDoorLock: boolean;
      keylessEntry: boolean;
      startButton: boolean;
      controlCircut: boolean;
      electricWindowsFront: boolean;
      electricWindowsBack: boolean;
      powerSteering: boolean;
      cruiseControl: boolean;
      airConditioning: boolean;
      parkingSensors: boolean;
      reverseCamera: boolean;
      parkingMachine: boolean;
      startStopSystem: boolean;
    };
    createCarInteriorDetailRequest: {
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
    };
    createCarExteriorDetailRequest: {
      id: number;
      intervalWiper: boolean;
      alloyWheels: boolean;
      rainSensor: boolean;
      sunRoof: boolean;
      panoramicRoof: boolean;
      roofRails: boolean;
      mettalicPaint: boolean;
      paintedBumpers: boolean;
      tintedGlass: boolean;
      rearPrivacyGlass: boolean;
      electricMirrors: boolean;
      foldingExteriorMirrors: boolean;
      frontFogLights: boolean;
      xenonHeadLights: boolean;
      ledHeahlights: boolean;
      ledRearLighting: boolean;
      dayLights: boolean;
      headlampWasher: boolean;
      burglarAlarm: boolean;
    };
  };
};

const AddCarComponent = (props: Props) => {
  const initialValues: CarDetailsFormValues = {
    brand: "",
    model: "",
    generation: "",
    createCarDetailRequest: {
      carGeneralDetailId: 0,
      carPerformanceDetailId: 0,
      carSafetyDetailId: 0,
      carComfortDetailId: 0,
      carInteriorDetailId: 0,
      carExteriorDetailId: 0,
      createCarGeneralDetailRequest: {
        id: 0,
        bodyType: "",
        transmission: "",
        numberOfSeats: 0,
        segment: "",
        driveWheel: "",
        fuelType: "",
        horsePower: 0,
        torque: 0,
        engineCapacity: "",
        turbo: false,
        fuelTankCapacity: 0,
        cargoCapacity: 0,
      },
      createCarSafetyDetailRequest: {
        id: 0,
        abs: false,
        brakeAssist: false,
        emergencyBraking: false,
        blindSpotAssist: false,
        stabilityControl: false,
        tractionControl: false,
        driverAirbag: false,
        passangerAirbag: false,
        sideAirbag: false,
        headAirbag: false,
        kneeAirbag: false,
        laneAirbag: false,
        fatigueSensor: false,
        tirePressureSensor: false,
        trafficSignRecognition: false,
        collisionWarningSystem: false,
        automaticLevelControl: false,
      },
      createCarPerformanceDetailRequest: {
        id: 0,
        topSpeed: 0,
        acceleration: "",
        urbanConsumption: "",
        emmision: "",
        powerConsumption: "",
        batteryRange: 0,
      },
      createCarComfortDetailRequest: {
        id: 0,
        centralDoorLock: false,
        keylessEntry: false,
        startButton: false,
        controlCircut: false,
        electricWindowsFront: false,
        electricWindowsBack: false,
        powerSteering: false,
        cruiseControl: false,
        airConditioning: false,
        parkingSensors: false,
        reverseCamera: false,
        parkingMachine: false,
        startStopSystem: false,
      },
      createCarInteriorDetailRequest: {
        id: 0,
        heightAdjustmentSeat: false,
        electricAdjustmentSeat: false,
        heatedSeats: false,
        ventilatedSeats: false,
        sportsSeat: false,
        adjustableSteeringWheel: false,
        heatedSteeringWheel: false,
        rearHeadrest: false,
        foldingRearSeat: false,
        slidingRearSeat: false,
        centralArmRest: false,
        makeUpMirror: false,
        adjustableDashboardLighting: false,
        tachometer: false,
        dayCounter: false,
        coolantTemperatureGauge: false,
        outsiteTemperatureGauge: false,
        boardComputer: false,
        audioSystem: false,
        digitalRadio: false,
        audioInput: "",
        navigationSystem: 0,
        bluetooth: 0,
      },
      createCarExteriorDetailRequest: {
        id: 0,
        intervalWiper: false,
        alloyWheels: false,
        rainSensor: false,
        sunRoof: false,
        panoramicRoof: false,
        roofRails: false,
        mettalicPaint: false,
        paintedBumpers: false,
        tintedGlass: false,
        rearPrivacyGlass: false,
        electricMirrors: false,
        foldingExteriorMirrors: false,
        frontFogLights: false,
        xenonHeadLights: false,
        ledHeahlights: false,
        ledRearLighting: false,
        dayLights: false,
        headlampWasher: false,
        burglarAlarm: false,
      },
    },
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div className="grid grid-cols-12">
            <div className="col-span-2">
              <div className="p-1 bg-white shadow-md rounded ">
                <Label className="ml-4">General Details</Label>
                <div className="mb-4">
                  <Label htmlFor="brand" className="block">
                    Brand
                  </Label>
                  <Field
                    id="brand"
                    name="brand"
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="model" className="block">
                    Model
                  </Label>
                  <Field
                    id="model"
                    name="model"
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="generation" className="block">
                    Generation
                  </Label>
                  <Field
                    id="generation"
                    name="generation"
                    type="text"
                    className="input-field"
                  />
                </div>
                {/* Additional form fields for nested objects */}
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarGeneralDetailRequest.bodyType"
                    className="block"
                  >
                    Body Type
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarGeneralDetailRequest.bodyType"
                    name="createCarDetailRequest.createCarGeneralDetailRequest.bodyType"
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarGeneralDetailRequest.transmission"
                    className="block"
                  >
                    Transmission
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarGeneralDetailRequest.transmission"
                    name="createCarDetailRequest.createCarGeneralDetailRequest.transmission"
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarGeneralDetailRequest.numberOfSeats"
                    className="block"
                  >
                    Number Of Seats
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarGeneralDetailRequest.numberOfSeats"
                    name="createCarDetailRequest.createCarGeneralDetailRequest.numberOfSeats"
                    type="number"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarGeneralDetailRequest.segment"
                    className="block"
                  >
                    Segment
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarGeneralDetailRequest.segment"
                    name="createCarDetailRequest.createCarGeneralDetailRequest.segment"
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarGeneralDetailRequest.driveWheel"
                    className="block"
                  >
                    Drive Wheel
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarGeneralDetailRequest.driveWheel"
                    name="createCarDetailRequest.createCarGeneralDetailRequest.driveWheel"
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarGeneralDetailRequest.fuelType"
                    className="block"
                  >
                    Fuel Type
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarGeneralDetailRequest.fuelType"
                    name="createCarDetailRequest.createCarGeneralDetailRequest.fuelType"
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarGeneralDetailRequest.horsePower"
                    className="block"
                  >
                    Horse Power
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarGeneralDetailRequest.horsePower"
                    name="createCarDetailRequest.createCarGeneralDetailRequest.horsePower"
                    type="number"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarGeneralDetailRequest.torque"
                    className="block"
                  >
                    Torque
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarGeneralDetailRequest.torque"
                    name="createCarDetailRequest.createCarGeneralDetailRequest.torque"
                    type="number"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarGeneralDetailRequest.engineCapacity"
                    className="block"
                  >
                    Engine Capacity
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarGeneralDetailRequest.engineCapacity"
                    name="createCarDetailRequest.createCarGeneralDetailRequest.engineCapacity"
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="createCarDetailRequest.createCarGeneralDetailRequest.turbo">
                    Turbo
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarGeneralDetailRequest.turbo"
                    name="createCarDetailRequest.createCarGeneralDetailRequest.turbo"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarGeneralDetailRequest.fuelTankCapacity"
                    className="block"
                  >
                    Fuel Tank Capacity
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarGeneralDetailRequest.fuelTankCapacity"
                    name="createCarDetailRequest.createCarGeneralDetailRequest.fuelTankCapacity"
                    type="number"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarGeneralDetailRequest.cargoCapacity"
                    className="block"
                  >
                    Cargo Capacity
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarGeneralDetailRequest.cargoCapacity"
                    name="createCarDetailRequest.createCarGeneralDetailRequest.cargoCapacity"
                    type="number"
                    className="input-field"
                  />
                </div>
                {/* Repeat similar structure for all nested fields */}
                <Button type="submit">Submit</Button>
              </div>
            </div>
            <div className="col-span-2">
              <div className="p-6 bg-white shadow-md rounded ">
                <Label className="ml-4">Safety Details</Label>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.abs"
                    className="block"
                  >
                    ABS
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.abs"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.abs"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.brakeAssist"
                    className="block"
                  >
                    Brake Assist
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.brakeAssist"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.brakeAssist"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.emergencyBraking"
                    className="block"
                  >
                    Emergency Braking
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.emergencyBraking"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.emergencyBraking"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.blindSpotAssist"
                    className="block"
                  >
                    Blind Spot Assist
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.blindSpotAssist"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.blindSpotAssist"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.stabilityControl"
                    className="block"
                  >
                    Stability Control
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.stabilityControl"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.stabilityControl"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.tractionControl"
                    className="block"
                  >
                    Traction Control
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.tractionControl"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.tractionControl"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.driverAirbag"
                    className="block"
                  >
                    Driver Airbag
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.driverAirbag"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.driverAirbag"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.passangerAirbag"
                    className="block"
                  >
                    Passenger Airbag
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.passangerAirbag"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.passangerAirbag"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.sideAirbag"
                    className="block"
                  >
                    Side Airbag
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.sideAirbag"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.sideAirbag"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.headAirbag"
                    className="block"
                  >
                    Head Airbag
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.headAirbag"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.headAirbag"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.kneeAirbag"
                    className="block"
                  >
                    Knee Airbag
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.kneeAirbag"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.kneeAirbag"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.laneAirbag"
                    className="block"
                  >
                    Lane Airbag
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.laneAirbag"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.laneAirbag"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.fatigueSensor"
                    className="block"
                  >
                    Fatigue Sensor
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.fatigueSensor"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.fatigueSensor"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.tirePressureSensor"
                    className="block"
                  >
                    Tire Pressure Sensor
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.tirePressureSensor"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.tirePressureSensor"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.trafficSignRecognition"
                    className="block"
                  >
                    Traffic Sign Recognition
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.trafficSignRecognition"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.trafficSignRecognition"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.collisionWarningSystem"
                    className="block"
                  >
                    Collision Warning System
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.collisionWarningSystem"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.collisionWarningSystem"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarSafetyDetailRequest.automaticLevelControl"
                    className="block"
                  >
                    Automatic Level Control
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarSafetyDetailRequest.automaticLevelControl"
                    name="createCarDetailRequest.createCarSafetyDetailRequest.automaticLevelControl"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="p-1  bg-white shadow-md rounded ">
                <Label className="ml-3">Performance Details</Label>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarPerformanceDetailRequest.topSpeed"
                    className="block"
                  >
                    Top Speed
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarPerformanceDetailRequest.topSpeed"
                    name="createCarDetailRequest.createCarPerformanceDetailRequest.topSpeed"
                    type="number"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarPerformanceDetailRequest.acceleration"
                    className="block"
                  >
                    Acceleration
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarPerformanceDetailRequest.acceleration"
                    name="createCarDetailRequest.createCarPerformanceDetailRequest.acceleration"
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarPerformanceDetailRequest.urbanConsumption"
                    className="block"
                  >
                    Urban Consumption
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarPerformanceDetailRequest.urbanConsumption"
                    name="createCarDetailRequest.createCarPerformanceDetailRequest.urbanConsumption"
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarPerformanceDetailRequest.emmision"
                    className="block"
                  >
                    Emmision
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarPerformanceDetailRequest.emmision"
                    name="createCarDetailRequest.createCarPerformanceDetailRequest.emmision"
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarPerformanceDetailRequest.powerConsumption"
                    className="block"
                  >
                    Power Consumption
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarPerformanceDetailRequest.powerConsumption"
                    name="createCarDetailRequest.createCarPerformanceDetailRequest.powerConsumption"
                    type="text"
                    className="input-field"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarPerformanceDetailRequest.batteryRange"
                    className="block"
                  >
                    Battery Range
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarPerformanceDetailRequest.batteryRange"
                    name="createCarDetailRequest.createCarPerformanceDetailRequest.batteryRange"
                    type="number"
                    className="input-field"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="p-6 bg-white shadow-md rounded ">
                <Label className="ml-3">Comfort Details</Label>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.centralDoorLock"
                    className="block"
                  >
                    Central Door Locking
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.centralDoorLock"
                    name="createCarDetailRequest.createCarComfortDetailRequest.centralDoorLock"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.keylessEntry"
                    className="block"
                  >
                    Keyless Entry
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.keylessEntry"
                    name="createCarDetailRequest.createCarComfortDetailRequest.keylessEntry"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.startButton"
                    className="block"
                  >
                    Start Button
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.startButton"
                    name="createCarDetailRequest.createCarComfortDetailRequest.startButton"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.controlCircut"
                    className="block"
                  >
                    Control Circut
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.controlCircut"
                    name="createCarDetailRequest.createCarComfortDetailRequest.controlCircut"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.electricWindowsFront"
                    className="block"
                  >
                    Electric Windows Front
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.electricWindowsFront"
                    name="createCarDetailRequest.createCarComfortDetailRequest.electricWindowsFront"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.electricWindowsBack"
                    className="block"
                  >
                    Electric Windows Back
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.electricWindowsBack"
                    name="createCarDetailRequest.createCarComfortDetailRequest.electricWindowsBack"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.powerSteering"
                    className="block"
                  >
                    Power Steering
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.powerSteering"
                    name="createCarDetailRequest.createCarComfortDetailRequest.powerSteering"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.cruiseControl"
                    className="block"
                  >
                    Cruise Control
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.cruiseControl"
                    name="createCarDetailRequest.createCarComfortDetailRequest.cruiseControl"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.airConditioning"
                    className="block"
                  >
                    Air Conditioning
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.airConditioning"
                    name="createCarDetailRequest.createCarComfortDetailRequest.airConditioning"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.parkingSensors"
                    className="block"
                  >
                    Parking Sensor
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.parkingSensors"
                    name="createCarDetailRequest.createCarComfortDetailRequest.parkingSensors"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.reverseCamera"
                    className="block"
                  >
                    Reverse Camera
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.reverseCamera"
                    name="createCarDetailRequest.createCarComfortDetailRequest.reverseCamera"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.parkingMachine"
                    className="block"
                  >
                    Parking Machine
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.parkingMachine"
                    name="createCarDetailRequest.createCarComfortDetailRequest.parkingMachine"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarComfortDetailRequest.startStopSystem"
                    className="block"
                  >
                    Start Stop System
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarComfortDetailRequest.startStopSystem"
                    name="createCarDetailRequest.createCarComfortDetailRequest.startStopSystem"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="p-1 bg-white shadow-md rounded ">
                <Label className="ml-3">Interior Details</Label>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.heightAdjustmentSeat"
                    className="block"
                  >
                    Height Adjustment Seat
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.heightAdjustmentSeat"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.heightAdjustmentSeat"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.electricAdjustmentSeat"
                    className="block"
                  >
                    Electric Adjustment Seat
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.electricAdjustmentSeat"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.electricAdjustmentSeat"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.heatedSeats"
                    className="block"
                  >
                    Heated Seats
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.heatedSeats"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.heatedSeats"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.ventilatedSeats"
                    className="block"
                  >
                    Ventilated Seats
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.ventilatedSeats"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.ventilatedSeats"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.sportsSeat"
                    className="block"
                  >
                    Sports Seat
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.sportsSeat"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.sportsSeat"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.adjustableSteeringWheel"
                    className="block"
                  >
                    Adjustable Steering Wheel
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.adjustableSteeringWheel"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.adjustableSteeringWheel"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.heatedSteeringWheel"
                    className="block"
                  >
                    Heated Steering Wheel
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.heatedSteeringWheel"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.heatedSteeringWheel"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.rearHeadrest"
                    className="block"
                  >
                    Rear Head Rest
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.rearHeadrest"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.rearHeadrest"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.foldingRearSeat"
                    className="block"
                  >
                    Folding Rear Seat
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.foldingRearSeat"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.foldingRearSeat"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.slidingRearSeat"
                    className="block"
                  >
                    Sliding Rear Seat
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.slidingRearSeat"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.slidingRearSeat"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.centralArmRest"
                    className="block"
                  >
                    Central Arm Rest
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.centralArmRest"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.centralArmRest"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.makeUpMirror"
                    className="block"
                  >
                    Make Up Mirror
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.makeUpMirror"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.makeUpMirror"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.adjustableDashboardLighting"
                    className="block"
                  >
                    Adjustable Dashboard Lighting
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.adjustableDashboardLighting"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.adjustableDashboardLighting"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.tachometer"
                    className="block"
                  >
                    Tachometer
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.tachometer"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.tachometer"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.dayCounter"
                    className="block"
                  >
                    Day Counter
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.dayCounter"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.dayCounter"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.coolantTemperatureGauge"
                    className="block"
                  >
                    Coolant Temperature Gauge
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.coolantTemperatureGauge"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.coolantTemperatureGauge"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.outsiteTemperatureGauge"
                    className="block"
                  >
                    Outside Temperature Gauge
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.outsiteTemperatureGauge"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.outsiteTemperatureGauge"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.boardComputer"
                    className="block"
                  >
                    Board Computer
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.boardComputer"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.boardComputer"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.audioSystem"
                    className="block"
                  >
                    Audio System
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.audioSystem"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.audioSystem"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.digitalRadio"
                    className="block"
                  >
                    Digital Radio
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.digitalRadio"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.digitalRadio"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.audioInput"
                    className="block"
                  >
                    Audio Input
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.audioInput"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.audioInput"
                    type="text"
                    className="text-input"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.navigationSystem"
                    className="block"
                  >
                    Navigation System (Var ise 1 yok ise 0)
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.navigationSystem"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.navigationSystem"
                    type="number"
                    className="text-input"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarInteriorDetailRequest.bluetooth"
                    className="block"
                  >
                    Bluetooth (Var ise 1 yok ise 0)
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarInteriorDetailRequest.bluetooth"
                    name="createCarDetailRequest.createCarInteriorDetailRequest.bluetooth"
                    type="number"
                    className="text-input"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="p-1 bg-white shadow-md rounded ">
                <Label className="ml-3">Exterior Details</Label>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.intervalWiper"
                    className="block"
                  >
                    Interval Wiper
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.intervalWiper"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.intervalWiper"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.alloyWheels"
                    className="block"
                  >
                    Alloy Wheels
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.alloyWheels"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.alloyWheels"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.rainSensor"
                    className="block"
                  >
                    Rain Sensor
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.rainSensor"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.rainSensor"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.sunRoof"
                    className="block"
                  >
                    Sun Roof
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.sunRoof"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.sunRoof"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.panoramicRoof"
                    className="block"
                  >
                    Panaromic Roof
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.panoramicRoof"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.panoramicRoof"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.roofRails"
                    className="block"
                  >
                    Roof Rails
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.roofRails"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.roofRails"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.mettalicPaint"
                    className="block"
                  >
                    Mettalic Paint
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.mettalicPaint"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.mettalicPaint"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.paintedBumpers"
                    className="block"
                  >
                    Painted Bumpers
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.paintedBumpers"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.paintedBumpers"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.tintedGlass"
                    className="block"
                  >
                    Tinted Glass
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.tintedGlass"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.tintedGlass"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.rearPrivacyGlass"
                    className="block"
                  >
                    Rear Privacy Glass
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.rearPrivacyGlass"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.rearPrivacyGlass"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.electricMirrors"
                    className="block"
                  >
                    Electric Mirrors
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.electricMirrors"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.electricMirrors"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.foldingExteriorMirrors"
                    className="block"
                  >
                    Folding Exterior Mirrors
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.foldingExteriorMirrors"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.foldingExteriorMirrors"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.frontFogLights"
                    className="block"
                  >
                    Front Fog Lights
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.frontFogLights"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.frontFogLights"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.xenonHeadLights"
                    className="block"
                  >
                    Xenon Headlights
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.xenonHeadLights"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.xenonHeadLights"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.ledHeahlights"
                    className="block"
                  >
                    Led Headlights
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.ledHeahlights"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.ledHeahlights"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.ledRearLighting"
                    className="block"
                  >
                    Led Rear Lighting
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.ledRearLighting"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.ledRearLighting"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.dayLights"
                    className="block"
                  >
                    Day Lights
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.dayLights"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.dayLights"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.headlampWasher"
                    className="block"
                  >
                    Headlamp Washer
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.headlampWasher"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.headlampWasher"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="createCarDetailRequest.createCarExteriorDetailRequest.burglarAlarm"
                    className="block"
                  >
                    Burglar Alarm
                  </Label>
                  <Field
                    id="createCarDetailRequest.createCarExteriorDetailRequest.burglarAlarm"
                    name="createCarDetailRequest.createCarExteriorDetailRequest.burglarAlarm"
                    type="checkbox"
                    className="form-checkbox"
                  />
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddCarComponent;
