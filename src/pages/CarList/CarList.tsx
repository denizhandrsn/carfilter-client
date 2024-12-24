import { Button, Card, Checkbox, Label, Tabs, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import CarDetailPage from "../CarDetailPage/CarDetailPage";
import { Link } from "react-router-dom";

export interface CarDetail {
  id: number;
  brand: string;
  model: string;
  generation: string;
  carDetail: {
    carGeneralDetail: {
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
    carSafetyDetail: {
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
    carPerformanceDetail: {
      topSpeed: number;
      acceleration: string;
      urbanConsumption: string;
      emmision: string;
      powerConsumption: string;
      batteryRange: number;
    };
    carComfortDetail: {
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
    carInteriorDetail: {
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
    carExteriorDetail: {
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
}

const CarList: React.FC = () => {
  const [cars, setCars] = useState<CarDetail[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarDetail[]>([]);
  const [filters, setFilters] = useState<Record<string, string | boolean>>({});

  useEffect(() => {
    fetch("https://localhost:7298/api/Car/getcars")
      .then((response) => response.json())
      .then((data) => {
        setCars(data.data);
        setFilteredCars(data.data);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setFilters((prev) => {
      if (type === "checkbox") {
        return {
          ...prev,
          [name]: checked,
        };
      } else {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };

  const flattenObject = (
    obj: any,
    parentKey = "",
    res: { [key: string]: any } = {}
  ): { [key: string]: any } => {
    for (const key in obj) {
      const propName = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        flattenObject(obj[key], propName, res);
      } else {
        res[propName] = obj[key];
      }
    }
    return res;
  };

  useEffect(() => {
    let result = [...cars];
    const getCarProp = (car: CarDetail, propName: string): any => {
      switch (propName) {
        case "brand":
          return car.brand;
        case "model":
          return car.model;
        case "generation":
          return car.generation;
        case "bodyType":
          return car.carDetail.carGeneralDetail.bodyType;
        case "transmission":
          return car.carDetail.carGeneralDetail.transmission;
        case "numberOfSeats":
          return car.carDetail.carGeneralDetail.numberOfSeats;
        case "segment":
          return car.carDetail.carGeneralDetail.segment;
        case "driveWheel":
          return car.carDetail.carGeneralDetail.driveWheel;
        case "fuelType":
          return car.carDetail.carGeneralDetail.fuelType;
        case "horsePower":
          return car.carDetail.carGeneralDetail.horsePower;
        case "torque":
          return car.carDetail.carGeneralDetail.torque;
        case "engineCapacity":
          return car.carDetail.carGeneralDetail.engineCapacity;
        case "turbo":
          return car.carDetail.carGeneralDetail.turbo;
        case "fuelTankCapacity":
          return car.carDetail.carGeneralDetail.fuelTankCapacity;
        case "cargoCapacity":
          return car.carDetail.carGeneralDetail.cargoCapacity;
        //!General Bitiş
        case "abs":
          return car.carDetail.carSafetyDetail.abs;
        case "brakeAssist":
          return car.carDetail.carSafetyDetail.brakeAssist;
        case "emergencyBraking":
          return car.carDetail.carSafetyDetail.emergencyBraking;
        case "blindSpotAssist":
          return car.carDetail.carSafetyDetail.blindSpotAssist;
        case "stabilityControl":
          return car.carDetail.carSafetyDetail.stabilityControl;
        case "tractionControl":
          return car.carDetail.carSafetyDetail.tractionControl;
        case "driverAirbag":
          return car.carDetail.carSafetyDetail.driverAirbag;
        case "passangerAirbag":
          return car.carDetail.carSafetyDetail.passangerAirbag;
        case "headAirbag":
          return car.carDetail.carSafetyDetail.headAirbag;
        case "kneeAirbag":
          return car.carDetail.carSafetyDetail.kneeAirbag;
        case "laneAirbag":
          return car.carDetail.carSafetyDetail.laneAirbag;
        case "fatigueSensor":
          return car.carDetail.carSafetyDetail.fatigueSensor;
        case "tirePressureSensor":
          return car.carDetail.carSafetyDetail.tirePressureSensor;
        case "trafficSignRecognition":
          return car.carDetail.carSafetyDetail.trafficSignRecognition;
        case "collisionWarningSystem":
          return car.carDetail.carSafetyDetail.collisionWarningSystem;
        case "automaticLevelControl":
          return car.carDetail.carSafetyDetail.automaticLevelControl;
        //! Safety Bitiş
        case "topSpeed":
          return car.carDetail.carPerformanceDetail.topSpeed;
        case "acceleration":
          return car.carDetail.carPerformanceDetail.acceleration;
        case "urbanConsumption":
          return car.carDetail.carPerformanceDetail.urbanConsumption;
        case "emmision":
          return car.carDetail.carPerformanceDetail.emmision;
        case "powerConsumption":
          return car.carDetail.carPerformanceDetail.powerConsumption;
        case "batteryRange":
          return car.carDetail.carPerformanceDetail.batteryRange;
        //! Performance Bitiş
        case "centralDoorLock":
          return car.carDetail.carComfortDetail.centralDoorLock;
        case "keylessEntry":
          return car.carDetail.carComfortDetail.keylessEntry;
        case "startButton":
          return car.carDetail.carComfortDetail.startButton;
        case "controlCircut":
          return car.carDetail.carComfortDetail.controlCircut;
        case "electricWindowsFront":
          return car.carDetail.carComfortDetail.electricWindowsFront;
        case "electricWindowsBack":
          return car.carDetail.carComfortDetail.electricWindowsBack;
        case "powerSteering":
          return car.carDetail.carComfortDetail.powerSteering;
        case "cruiseControl":
          return car.carDetail.carComfortDetail.cruiseControl;
        case "airConditioning":
          return car.carDetail.carComfortDetail.airConditioning;
        case "parkingSensors":
          return car.carDetail.carComfortDetail.parkingSensors;
        case "reverseCamera":
          return car.carDetail.carComfortDetail.reverseCamera;
        case "parkingMachine":
          return car.carDetail.carComfortDetail.parkingMachine;
        case "startStopSystem":
          return car.carDetail.carComfortDetail.startStopSystem;
        //! Comfort Bitiş
        case "heightAdjustmentSeat":
          return car.carDetail.carInteriorDetail.heightAdjustmentSeat;
        case "electricAdjustmentSeat":
          return car.carDetail.carInteriorDetail.electricAdjustmentSeat;
        case "heatedSeats":
          return car.carDetail.carInteriorDetail.heatedSeats;
        case "ventilatedSeats":
          return car.carDetail.carInteriorDetail.ventilatedSeats;
        case "sportsSeat":
          return car.carDetail.carInteriorDetail.sportsSeat;
        case "adjustableSteeringWheel":
          return car.carDetail.carInteriorDetail.adjustableSteeringWheel;
        case "heatedSteeringWheel":
          return car.carDetail.carInteriorDetail.heatedSteeringWheel;
        case "rearHeadrest":
          return car.carDetail.carInteriorDetail.rearHeadrest;
        case "foldingRearSeat":
          return car.carDetail.carInteriorDetail.foldingRearSeat;
        case "slidingRearSeat":
          return car.carDetail.carInteriorDetail.slidingRearSeat;
        case "centralArmRest":
          return car.carDetail.carInteriorDetail.centralArmRest;
        case "makeUpMirror":
          return car.carDetail.carInteriorDetail.makeUpMirror;
        case "adjustableDashboardLighting":
          return car.carDetail.carInteriorDetail.adjustableDashboardLighting;
        case "tachometer":
          return car.carDetail.carInteriorDetail.tachometer;
        case "dayCounter":
          return car.carDetail.carInteriorDetail.dayCounter;
        case "coolantTemperatureGauge":
          return car.carDetail.carInteriorDetail.coolantTemperatureGauge;
        case "outsiteTemperatureGauge":
          return car.carDetail.carInteriorDetail.outsiteTemperatureGauge;
        case "boardComputer":
          return car.carDetail.carInteriorDetail.boardComputer;
        case "audioSystem":
          return car.carDetail.carInteriorDetail.audioSystem;
        case "digitalRadio":
          return car.carDetail.carInteriorDetail.digitalRadio;
        case "audioInput":
          return car.carDetail.carInteriorDetail.audioInput;
        case "navigationSystem":
          return car.carDetail.carInteriorDetail.navigationSystem;
        case "bluetooth":
          return car.carDetail.carInteriorDetail.bluetooth;
        //! Interior Bitiş
        case "intervalWiper":
          return car.carDetail.carExteriorDetail.intervalWiper;
        case "alloyWheels":
          return car.carDetail.carExteriorDetail.alloyWheels;
        case "rainSensor":
          return car.carDetail.carExteriorDetail.rainSensor;
        case "sunRoof":
          return car.carDetail.carExteriorDetail.sunRoof;
        case "panoramicRoof":
          return car.carDetail.carExteriorDetail.panoramicRoof;
        case "roofRails":
          return car.carDetail.carExteriorDetail.roofRails;
        case "mettalicPaint":
          return car.carDetail.carExteriorDetail.mettalicPaint;
        case "paintedBumpers":
          return car.carDetail.carExteriorDetail.paintedBumpers;
        case "tintedGlass":
          return car.carDetail.carExteriorDetail.tintedGlass;
        case "rearPrivacyGlass":
          return car.carDetail.carExteriorDetail.rearPrivacyGlass;
        case "electricMirrors":
          return car.carDetail.carExteriorDetail.electricMirrors;
        case "foldingExteriorMirrors":
          return car.carDetail.carExteriorDetail.foldingExteriorMirrors;
        case "frontFogLights":
          return car.carDetail.carExteriorDetail.frontFogLights;
        case "xenonHeadLights":
          return car.carDetail.carExteriorDetail.xenonHeadLights;
        case "ledHeahlights":
          return car.carDetail.carExteriorDetail.ledHeahlights;
        case "ledRearLighting":
          return car.carDetail.carExteriorDetail.ledRearLighting;
        case "dayLights":
          return car.carDetail.carExteriorDetail.dayLights;
        case "headlampWasher":
          return car.carDetail.carExteriorDetail.headlampWasher;
        case "burglarAlarm":
          return car.carDetail.carExteriorDetail.burglarAlarm;
        //! Exterior Bitiş
        default:
          return null;
      }
    };

    Object.entries(filters).forEach(([key, filterValue]) => {
      if (filterValue === "" || filterValue === false) {
        return;
      }

      result = result.filter((car) => {
        const carVal = getCarProp(car, key);

        if (typeof filterValue === "boolean") {
          return carVal === true;
        } else if (typeof filterValue === "string") {
          return carVal
            .toString()
            .toLowerCase()
            .includes(filterValue.toLowerCase());
        }

        return true;
      });
    });

    setFilteredCars(result);
  }, [cars, filters]);
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const booleanSafetyFields = [
    "abs",
    "brakeAssist",
    "emergencyBraking",
    "blindSpotAssist",
    "stabilityControl",
    "tractionControl",
    "driverAirbag",
    "passangerAirbag",
    "sideAirbag",
    "headAirbag",
    "kneeAirbag",
    "laneAirbag",
    "fatigueSensor",
    "tirePressureSensor",
    "trafficSignRecognition",
    "collisionWarningSystem",
    "automaticLevelControl",
  ];
  const booleanComfortFields = [
    "centralDoorLock",
    "keylessEntry",
    "startButton",
    "controlCircut",
    "electricWindowsFront",
    "electricWindowsBack",
    "powerSteering",
    "cruiseControl",
    "airConditioning",
    "parkingSensors",
    "reverseCamera",
    "parkingMachine",
    "startStopSystem",
  ];
  const booleanInteriorFields = [
    "heightAdjustmentSeat",
    "electricAdjustmentSeat",
    "heatedSeats",
    "ventilatedSeats",
    "sportsSeat",
    "adjustableSteeringWheel",
    "heatedSteeringWheel",
    "rearHeadrest",
    "foldingRearSeat",
    "slidingRearSeat",
    "centralArmRest",
    "makeUpMirror",
    "adjustableDashboardLighting",
    "tachometer",
    "dayCounter",
    "coolantTemperatureGauge",
    "outsiteTemperatureGauge",
    "boardComputer",
    "audioSystem",
    "digitalRadio",
  ];
  const booleanExteriorFields = [
    "intervalWiper",
    "alloyWheels",
    "rainSensor",
    "sunRoof",
    "panoramicRoof",
    "roofRails",
    "mettalicPaint",
    "paintedBumpers",
    "tintedGlass",
    "rearPrivacyGlass",
    "electricMirrors",
    "foldingExteriorMirrors",
    "frontFogLights",
    "xenonHeadLights",
    "ledHeahlights",
    "ledRearLighting",
    "dayLights",
    "headlampWasher",
    "burglarAlarm",
  ];
  return (
    <div className="flex">
      <Card className="p-4 mt-4 ml-4">
        <Tabs aria-label="Pills" variant="pills">
          <Tabs.Item active title="General">
            <div className="flex flex-col gap-2 max-w-md mb-6">
              <TextInput
                type="text"
                name="brand"
                placeholder="Brand"
                value={typeof filters.brand === "string" ? filters.brand : ""}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="text"
                name="model"
                placeholder="Model"
                value={typeof filters.model === "string" ? filters.model : ""}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="text"
                name="generation"
                placeholder="Generation"
                value={
                  typeof filters.generation === "string"
                    ? filters.generation
                    : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="text"
                name="bodyType"
                placeholder="Body Type"
                value={
                  typeof filters.bodyType === "string" ? filters.bodyType : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="text"
                name="transmission"
                placeholder="Transmission"
                value={
                  typeof filters.transmission === "string"
                    ? filters.transmission
                    : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="number"
                name="numberOfSeats"
                placeholder="Number Of Seats"
                value={
                  typeof filters.numberOfSeats === "string"
                    ? filters.numberOfSeats
                    : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="text"
                name="segment"
                placeholder="Segment"
                value={
                  typeof filters.segment === "string" ? filters.segment : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="text"
                name="driveWheel"
                placeholder="Drive Wheel"
                value={
                  typeof filters.driveWheel === "string"
                    ? filters.driveWheel
                    : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="text"
                name="fuelType"
                placeholder="Fuel Type"
                value={
                  typeof filters.fuelType === "string" ? filters.fuelType : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="number"
                name="horsePower"
                placeholder="Horse Power"
                value={
                  typeof filters.horsePower === "string"
                    ? filters.horsePower
                    : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="number"
                name="torque"
                placeholder="Body Type"
                value={typeof filters.torque === "string" ? filters.torque : ""}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="text"
                name="engineCapacity"
                placeholder="Engine Capacity"
                value={
                  typeof filters.engineCapacity === "string"
                    ? filters.engineCapacity
                    : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <Checkbox
                id="turbo"
                name="turbo"
                checked={!!filters.turbo}
                onChange={handleChange}
              />
              <label htmlFor="turbo">Turbo (true/false)</label>
              <TextInput
                type="number"
                name="fuelTankCapacity"
                placeholder="Fuel Tank Capacity"
                value={
                  typeof filters.fuelTankCapacity === "string"
                    ? filters.fuelTankCapacity
                    : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="number"
                name="cargoCapacity"
                placeholder="Cargo Capacity"
                value={
                  typeof filters.cargoCapacity === "string"
                    ? filters.cargoCapacity
                    : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Performance">
            <div className="flex flex-col gap-2 max-w-md mb-6">
              <TextInput
                type="number"
                name="topSpeed"
                placeholder="Top Speed"
                value={
                  typeof filters.topSpeed === "string" ? filters.topSpeed : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="text"
                name="acceleration"
                placeholder="Acceleration"
                value={
                  typeof filters.acceleration === "string"
                    ? filters.acceleration
                    : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="text"
                name="emmision"
                placeholder="Emmision"
                value={
                  typeof filters.emmision === "string" ? filters.emmision : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="text"
                name="urbanConsumption"
                placeholder="Urban COnsumption"
                value={
                  typeof filters.urbanConsumption === "string"
                    ? filters.urbanConsumption
                    : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <TextInput
                type="text"
                name="powerConsumption"
                placeholder="Power Consumption"
                value={
                  typeof filters.powerConsumption === "string"
                    ? filters.powerConsumption
                    : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <TextInput
                type="number"
                name="batteryRange"
                placeholder="Battery Range"
                value={
                  typeof filters.batteryRange === "string"
                    ? filters.batteryRange
                    : ""
                }
                onChange={handleChange}
                className="border p-2 rounded"
              />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Safety">
            <div className="">
              <h2 className="text-lg font-bold mb-2">Filtreler</h2>
              {booleanSafetyFields.map((fieldName) => (
                <div key={fieldName} className="flex gap-1">
                  <label>
                    <Checkbox
                      name={fieldName}
                      checked={!!filters[fieldName]}
                      onChange={handleChange}
                    />
                    {" " + fieldName}
                  </label>
                </div>
              ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Comfort">
            <div className="">
              <h2 className="text-lg font-bold mb-2">Filtreler</h2>
              {booleanComfortFields.map((fieldName) => (
                <div key={fieldName} className="flex gap-3">
                  <label>
                    <Checkbox
                      name={fieldName}
                      checked={!!filters[fieldName]}
                      onChange={handleChange}
                    />
                    {" " + fieldName}
                  </label>
                </div>
              ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Interior">
            <div className="">
              <h2 className="text-lg font-bold mb-2">Filtreler</h2>
              {booleanInteriorFields.map((fieldName) => (
                <div key={fieldName} className="flex gap-3">
                  <label>
                    <Checkbox
                      name={fieldName}
                      checked={!!filters[fieldName]}
                      onChange={handleChange}
                    />
                    {" " + fieldName}
                  </label>
                </div>
              ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Exterior">
            <div className="">
              <h2 className="text-lg font-bold mb-2">Filtreler</h2>
              {booleanExteriorFields.map((fieldName) => (
                <div key={fieldName} className="flex gap-3">
                  <label>
                    <Checkbox
                      name={fieldName}
                      checked={!!filters[fieldName]}
                      onChange={handleChange}
                    />
                    {" " + fieldName}
                  </label>
                </div>
              ))}
            </div>
          </Tabs.Item>
        </Tabs>
      </Card>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {filteredCars.map((car) => (
            <Card key={car.id} className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {car.brand + " " + car.model}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Generation: {car.generation}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Fuel Type: {car.carDetail.carGeneralDetail.fuelType}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Horse Power: {car.carDetail.carGeneralDetail.horsePower} HP
              </p>
              <Link
                to={"/cardetail/" + car.id}
                state={car}
                className="text-blue-500 hover:text-blue-700 mt-4"
              >
                Read More
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarList;
