import { Button, Card, Checkbox, Label } from "flowbite-react";
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

type FilterConfig = {
  [key: string]: {
    path: string;
    type: "boolean" | "string" | "number";
  };
};
const filtersConfig: FilterConfig = {
  // carGeneralDetail
  "carDetail.carGeneralDetail.bodyType": {
    path: "carDetail.carGeneralDetail.bodyType",
    type: "string",
  },
  "carDetail.carGeneralDetail.transmission": {
    path: "carDetail.carGeneralDetail.transmission",
    type: "string",
  },
  "carDetail.carGeneralDetail.numberOfSeats": {
    path: "carDetail.carGeneralDetail.numberOfSeats",
    type: "number",
  },
  "carDetail.carGeneralDetail.segment": {
    path: "carDetail.carGeneralDetail.segment",
    type: "string",
  },
  "carDetail.carGeneralDetail.driveWheel": {
    path: "carDetail.carGeneralDetail.driveWheel",
    type: "string",
  },
  "carDetail.carGeneralDetail.fuelType": {
    path: "carDetail.carGeneralDetail.fuelType",
    type: "string",
  },
  "carDetail.carGeneralDetail.horsePower": {
    path: "carDetail.carGeneralDetail.horsePower",
    type: "number",
  },
  "carDetail.carGeneralDetail.torque": {
    path: "carDetail.carGeneralDetail.torque",
    type: "number",
  },
  "carDetail.carGeneralDetail.engineCapacity": {
    path: "carDetail.carGeneralDetail.engineCapacity",
    type: "string",
  },
  "carDetail.carGeneralDetail.turbo": {
    path: "carDetail.carGeneralDetail.turbo",
    type: "boolean",
  },
  "carDetail.carGeneralDetail.fuelTankCapacity": {
    path: "carDetail.carGeneralDetail.fuelTankCapacity",
    type: "number",
  },
  "carDetail.carGeneralDetail.cargoCapacity": {
    path: "carDetail.carGeneralDetail.cargoCapacity",
    type: "number",
  },

  // carSafetyDetail
  "carDetail.carSafetyDetail.abs": {
    path: "carDetail.carSafetyDetail.abs",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.brakeAssist": {
    path: "carDetail.carSafetyDetail.brakeAssist",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.emergencyBraking": {
    path: "carDetail.carSafetyDetail.emergencyBraking",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.blindSpotAssist": {
    path: "carDetail.carSafetyDetail.blindSpotAssist",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.stabilityControl": {
    path: "carDetail.carSafetyDetail.stabilityControl",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.tractionControl": {
    path: "carDetail.carSafetyDetail.tractionControl",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.driverAirbag": {
    path: "carDetail.carSafetyDetail.driverAirbag",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.passangerAirbag": {
    path: "carDetail.carSafetyDetail.passangerAirbag",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.sideAirbag": {
    path: "carDetail.carSafetyDetail.sideAirbag",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.headAirbag": {
    path: "carDetail.carSafetyDetail.headAirbag",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.kneeAirbag": {
    path: "carDetail.carSafetyDetail.kneeAirbag",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.laneAirbag": {
    path: "carDetail.carSafetyDetail.laneAirbag",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.fatigueSensor": {
    path: "carDetail.carSafetyDetail.fatigueSensor",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.tirePressureSensor": {
    path: "carDetail.carSafetyDetail.tirePressureSensor",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.trafficSignRecognition": {
    path: "carDetail.carSafetyDetail.trafficSignRecognition",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.collisionWarningSystem": {
    path: "carDetail.carSafetyDetail.collisionWarningSystem",
    type: "boolean",
  },
  "carDetail.carSafetyDetail.automaticLevelControl": {
    path: "carDetail.carSafetyDetail.automaticLevelControl",
    type: "boolean",
  },

  // carPerformanceDetail
  "carDetail.carPerformanceDetail.topSpeed": {
    path: "carDetail.carPerformanceDetail.topSpeed",
    type: "number",
  },
  "carDetail.carPerformanceDetail.acceleration": {
    path: "carDetail.carPerformanceDetail.acceleration",
    type: "string",
  },
  "carDetail.carPerformanceDetail.urbanConsumption": {
    path: "carDetail.carPerformanceDetail.urbanConsumption",
    type: "string",
  },
  "carDetail.carPerformanceDetail.emmision": {
    path: "carDetail.carPerformanceDetail.emmision",
    type: "string",
  },
  "carDetail.carPerformanceDetail.powerConsumption": {
    path: "carDetail.carPerformanceDetail.powerConsumption",
    type: "string",
  },
  "carDetail.carPerformanceDetail.batteryRange": {
    path: "carDetail.carPerformanceDetail.batteryRange",
    type: "number",
  },

  // carComfortDetail
  "carDetail.carComfortDetail.centralDoorLock": {
    path: "carDetail.carComfortDetail.centralDoorLock",
    type: "boolean",
  },
  "carDetail.carComfortDetail.keylessEntry": {
    path: "carDetail.carComfortDetail.keylessEntry",
    type: "boolean",
  },
  "carDetail.carComfortDetail.startButton": {
    path: "carDetail.carComfortDetail.startButton",
    type: "boolean",
  },
  "carDetail.carComfortDetail.controlCircut": {
    path: "carDetail.carComfortDetail.controlCircut",
    type: "boolean",
  },
  "carDetail.carComfortDetail.electricWindowsFront": {
    path: "carDetail.carComfortDetail.electricWindowsFront",
    type: "boolean",
  },
  "carDetail.carComfortDetail.electricWindowsBack": {
    path: "carDetail.carComfortDetail.electricWindowsBack",
    type: "boolean",
  },
  "carDetail.carComfortDetail.powerSteering": {
    path: "carDetail.carComfortDetail.powerSteering",
    type: "boolean",
  },
  "carDetail.carComfortDetail.cruiseControl": {
    path: "carDetail.carComfortDetail.cruiseControl",
    type: "boolean",
  },
  "carDetail.carComfortDetail.airConditioning": {
    path: "carDetail.carComfortDetail.airConditioning",
    type: "boolean",
  },
  "carDetail.carComfortDetail.parkingSensors": {
    path: "carDetail.carComfortDetail.parkingSensors",
    type: "boolean",
  },
  "carDetail.carComfortDetail.reverseCamera": {
    path: "carDetail.carComfortDetail.reverseCamera",
    type: "boolean",
  },
  "carDetail.carComfortDetail.parkingMachine": {
    path: "carDetail.carComfortDetail.parkingMachine",
    type: "boolean",
  },
  "carDetail.carComfortDetail.startStopSystem": {
    path: "carDetail.carComfortDetail.startStopSystem",
    type: "boolean",
  },

  // carInteriorDetail
  "carDetail.carInteriorDetail.heightAdjustmentSeat": {
    path: "carDetail.carInteriorDetail.heightAdjustmentSeat",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.electricAdjustmentSeat": {
    path: "carDetail.carInteriorDetail.electricAdjustmentSeat",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.heatedSeats": {
    path: "carDetail.carInteriorDetail.heatedSeats",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.ventilatedSeats": {
    path: "carDetail.carInteriorDetail.ventilatedSeats",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.sportsSeat": {
    path: "carDetail.carInteriorDetail.sportsSeat",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.adjustableSteeringWheel": {
    path: "carDetail.carInteriorDetail.adjustableSteeringWheel",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.heatedSteeringWheel": {
    path: "carDetail.carInteriorDetail.heatedSteeringWheel",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.rearHeadrest": {
    path: "carDetail.carInteriorDetail.rearHeadrest",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.foldingRearSeat": {
    path: "carDetail.carInteriorDetail.foldingRearSeat",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.slidingRearSeat": {
    path: "carDetail.carInteriorDetail.slidingRearSeat",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.centralArmRest": {
    path: "carDetail.carInteriorDetail.centralArmRest",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.makeUpMirror": {
    path: "carDetail.carInteriorDetail.makeUpMirror",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.adjustableDashboardLighting": {
    path: "carDetail.carInteriorDetail.adjustableDashboardLighting",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.tachometer": {
    path: "carDetail.carInteriorDetail.tachometer",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.dayCounter": {
    path: "carDetail.carInteriorDetail.dayCounter",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.coolantTemperatureGauge": {
    path: "carDetail.carInteriorDetail.coolantTemperatureGauge",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.outsiteTemperatureGauge": {
    path: "carDetail.carInteriorDetail.outsiteTemperatureGauge",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.boardComputer": {
    path: "carDetail.carInteriorDetail.boardComputer",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.audioSystem": {
    path: "carDetail.carInteriorDetail.audioSystem",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.digitalRadio": {
    path: "carDetail.carInteriorDetail.digitalRadio",
    type: "boolean",
  },
  "carDetail.carInteriorDetail.audioInput": {
    path: "carDetail.carInteriorDetail.audioInput",
    type: "string",
  },
  "carDetail.carInteriorDetail.navigationSystem": {
    path: "carDetail.carInteriorDetail.navigationSystem",
    type: "number",
  },
  "carDetail.carInteriorDetail.bluetooth": {
    path: "carDetail.carInteriorDetail.bluetooth",
    type: "number",
  },

  // carExteriorDetail
  "carDetail.carExteriorDetail.intervalWiper": {
    path: "carDetail.carExteriorDetail.intervalWiper",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.alloyWheels": {
    path: "carDetail.carExteriorDetail.alloyWheels",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.rainSensor": {
    path: "carDetail.carExteriorDetail.rainSensor",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.sunRoof": {
    path: "carDetail.carExteriorDetail.sunRoof",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.panoramicRoof": {
    path: "carDetail.carExteriorDetail.panoramicRoof",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.roofRails": {
    path: "carDetail.carExteriorDetail.roofRails",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.mettalicPaint": {
    path: "carDetail.carExteriorDetail.mettalicPaint",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.paintedBumpers": {
    path: "carDetail.carExteriorDetail.paintedBumpers",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.tintedGlass": {
    path: "carDetail.carExteriorDetail.tintedGlass",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.rearPrivacyGlass": {
    path: "carDetail.carExteriorDetail.rearPrivacyGlass",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.electricMirrors": {
    path: "carDetail.carExteriorDetail.electricMirrors",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.foldingExteriorMirrors": {
    path: "carDetail.carExteriorDetail.foldingExteriorMirrors",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.frontFogLights": {
    path: "carDetail.carExteriorDetail.frontFogLights",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.xenonHeadLights": {
    path: "carDetail.carExteriorDetail.xenonHeadLights",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.ledHeahlights": {
    path: "carDetail.carExteriorDetail.ledHeahlights",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.ledRearLighting": {
    path: "carDetail.carExteriorDetail.ledRearLighting",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.dayLights": {
    path: "carDetail.carExteriorDetail.dayLights",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.headlampWasher": {
    path: "carDetail.carExteriorDetail.headlampWasher",
    type: "boolean",
  },
  "carDetail.carExteriorDetail.burglarAlarm": {
    path: "carDetail.carExteriorDetail.burglarAlarm",
    type: "boolean",
  },
};

const CarList: React.FC = () => {
  const [cars, setCars] = useState<CarDetail[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarDetail[]>([]);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    fetch("https://localhost:7298/api/Car/getcars")
      .then((response) => response.json())
      .then((data) => {
        setCars(data.data);
        setFilteredCars(data.data);
      });
  }, []);

  useEffect(() => {
    const filtered = cars.filter((car) => {
      return Object.keys(filters).every((key) => {
        const { path, type } = filtersConfig[key];
        const value = path
          .split(".")
          .reduce((obj: any, prop) => obj?.[prop], car);

        if (type === "boolean") {
          return filters[key] === "true" ? value === true : value === false;
        } else if (type === "string") {
          return value === filters[key];
        } else if (type === "number") {
          return value === Number(filters[key]);
        }
        return true;
      });
    });
    setFilteredCars(filtered);
  }, [filters, cars]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked ? value : "",
    }));
  };
  const handleBooleanCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked ? JSON.parse(value) : null,
    }));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="filters">
        <div>
          <label>
            Abs:
            <label>Var</label>
            <input
              type="checkbox"
              name="abs"
              value="true"
              onChange={handleCheckboxChange}
            />
            <label>Yok</label>
            <input
              type="checkbox"
              name="abs"
              value="false"
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        <div>
          <label>
            Fuel Type:
            <select
              name="fuelType"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, fuelType: e.target.value }))
              }
            >
              <option value="">Tümü</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Horse Power:
            <input
              type="number"
              name="horsePower"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, horsePower: e.target.value }))
              }
            />
          </label>
        </div>
      </div>

      <div className="col-span-8">
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
