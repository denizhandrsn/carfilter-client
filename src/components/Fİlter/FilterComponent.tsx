import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";

export interface CarDetail {
  id: number;
  brand: string;
  model: string;
  generation: string;
  carDetail: {
    carGeneralDetail: {
      bodyType: string;
      fuelType: string;
      horsePower: number;
    };
    // Diğer detaylar
  };
}

const CarList: React.FC = () => {
  const [cars, setCars] = useState<CarDetail[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarDetail[]>([]);
  const [filters, setFilters] = useState({
    bodyType: "",
    fuelType: "",
    minHorsePower: 0,
  });

  useEffect(() => {
    fetch("https://localhost:7298/api/Car/getcars")
      .then((response) => response.json())
      .then((data) => {
        setCars(data.data);
        setFilteredCars(data.data); // Tüm araçları başlangıçta göster
      });
  }, []);

  useEffect(() => {
    // Filtreleme Mantığı
    const filtered = cars.filter((car) => {
      const matchesBodyType =
        !filters.bodyType ||
        car.carDetail.carGeneralDetail.bodyType === filters.bodyType;
      const matchesFuelType =
        !filters.fuelType ||
        car.carDetail.carGeneralDetail.fuelType === filters.fuelType;
      const matchesHorsePower =
        !filters.minHorsePower ||
        car.carDetail.carGeneralDetail.horsePower >= filters.minHorsePower;

      return matchesBodyType && matchesFuelType && matchesHorsePower;
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="p-4">
      {/* Filtre Alanı */}
      <div className="mb-6">
        <h3 className="text-xl font-bold">Filters</h3>
        <div className="flex flex-wrap gap-4">
          <div>
            <label>
              <input
                type="checkbox"
                name="bodyType"
                value="SUV"
                onChange={handleCheckboxChange}
              />
              SUV
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="fuelType"
                value="Diesel"
                onChange={handleCheckboxChange}
              />
              Diesel
            </label>
          </div>
          <div>
            <label>
              <input
                type="number"
                name="minHorsePower"
                placeholder="Min HP"
                onChange={handleInputChange}
                className="border px-2 py-1"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Araç Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCars.map((car) => (
          <Card key={car.id} className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {car.brand + " " + car.model}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Body Type: {car.carDetail.carGeneralDetail.bodyType}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Fuel Type: {car.carDetail.carGeneralDetail.fuelType}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Horse Power: {car.carDetail.carGeneralDetail.horsePower}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarList;
