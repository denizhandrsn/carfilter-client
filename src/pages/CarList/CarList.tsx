import React, { useEffect, useState } from "react";

interface CarDetail {
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
      fuelType: string;
      horsePower: number;
      engineCapacity: string;
      fuelTankCapacity: number;
    };
    carSafetyDetail: {
      abs: boolean;
      brakeAssist: boolean;
      emergencyBraking: boolean;
      tirePressureSensor: boolean;
    };
    carPerformanceDetail: {
      topSpeed: number;
      acceleration: string;
      urbanConsumption: string;
    };
    carComfortDetail: {
      airConditioning: boolean;
      cruiseControl: boolean;
      parkingSensors: boolean;
    };
    carInteriorDetail: {
      heightAdjustmentSeat: boolean;
      electricAdjustmentSeat: boolean;
    };
    carExteriorDetail: {
      alloyWheels: boolean;
      rainSensor: boolean;
      sunRoof: boolean;
    };
  };
}

const CarList: React.FC = () => {
  const [cars, setCars] = useState<CarDetail[]>([]);
  const [expandedCarId, setExpandedCarId] = useState<number | null>(null);

  useEffect(() => {
    // Veriyi almak için fetch kullanabilirsiniz
    fetch("https://localhost:7298/api/Car/getcars")
      .then((response) => response.json())
      .then((data) => {
        setCars(data.data);
      });
  }, []);

  const toggleExpand = (carId: number) => {
    if (expandedCarId === carId) {
      setExpandedCarId(null); // Aynı karta tıklanırsa kapat
    } else {
      setExpandedCarId(carId); // Yeni karta tıklandığında aç
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {cars.map((car) => (
        <div
          key={car.id}
          className="card w-full bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="card-body p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {car.brand} {car.model}
            </h2>
            <p className="text-gray-600">Generation: {car.generation}</p>
            <p className="text-gray-600">
              Body Type: {car.carDetail.carGeneralDetail.bodyType}
            </p>
            <p className="text-gray-600">
              Fuel Type: {car.carDetail.carGeneralDetail.fuelType}
            </p>
            <p className="text-gray-600">
              Horse Power: {car.carDetail.carGeneralDetail.horsePower}
            </p>
            <p className="text-gray-600">
              Seats: {car.carDetail.carGeneralDetail.numberOfSeats}
            </p>

            <button
              onClick={() => toggleExpand(car.id)}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              {expandedCarId === car.id ? "Collapse" : "Expand"}
            </button>

            {expandedCarId === car.id && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  Full Details
                </h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>
                    Transmission: {car.carDetail.carGeneralDetail.transmission}
                  </li>
                  <li>
                    Engine Capacity:{" "}
                    {car.carDetail.carGeneralDetail.engineCapacity} cc
                  </li>
                  <li>
                    Fuel Tank Capacity:{" "}
                    {car.carDetail.carGeneralDetail.fuelTankCapacity} L
                  </li>
                  <li>
                    Top Speed: {car.carDetail.carPerformanceDetail.topSpeed}{" "}
                    km/h
                  </li>
                  <li>
                    Acceleration:{" "}
                    {car.carDetail.carPerformanceDetail.acceleration} sec (0-100
                    km/h)
                  </li>
                  <li>
                    Urban Consumption:{" "}
                    {car.carDetail.carPerformanceDetail.urbanConsumption}{" "}
                    L/100km
                  </li>
                  <li>
                    ABS: {car.carDetail.carSafetyDetail.abs ? "Yes" : "No"}
                  </li>
                  <li>
                    Brake Assist:{" "}
                    {car.carDetail.carSafetyDetail.brakeAssist ? "Yes" : "No"}
                  </li>
                  <li>
                    Emergency Braking:{" "}
                    {car.carDetail.carSafetyDetail.emergencyBraking
                      ? "Yes"
                      : "No"}
                  </li>
                  <li>
                    Tire Pressure Sensor:{" "}
                    {car.carDetail.carSafetyDetail.tirePressureSensor
                      ? "Yes"
                      : "No"}
                  </li>
                  <li>
                    Air Conditioning:{" "}
                    {car.carDetail.carComfortDetail.airConditioning
                      ? "Yes"
                      : "No"}
                  </li>
                  <li>
                    Cruise Control:{" "}
                    {car.carDetail.carComfortDetail.cruiseControl
                      ? "Yes"
                      : "No"}
                  </li>
                  <li>
                    Parking Sensors:{" "}
                    {car.carDetail.carComfortDetail.parkingSensors
                      ? "Yes"
                      : "No"}
                  </li>
                  <li>
                    Alloy Wheels:{" "}
                    {car.carDetail.carExteriorDetail.alloyWheels ? "Yes" : "No"}
                  </li>
                  <li>
                    Rain Sensor:{" "}
                    {car.carDetail.carExteriorDetail.rainSensor ? "Yes" : "No"}
                  </li>
                  <li>
                    Sun Roof:{" "}
                    {car.carDetail.carExteriorDetail.sunRoof ? "Yes" : "No"}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
