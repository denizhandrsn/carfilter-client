import { Button, Label } from "flowbite-react";
import { Field, Form, Formik } from "formik";
import React from "react";

type CarPerformanceDetailValues = {
  id: number;
  topSpeed: number;
  acceleration: string;
  urbanConsumption: string;
  emmision: string;
  powerConsumption: string;
  batteryRange: number;
};

const AddCarPerformanceComponent: React.FC = () => {
  const initialCarPerformanceValues: CarPerformanceDetailValues = {
    id: 0,
    topSpeed: 0,
    acceleration: "",
    urbanConsumption: "",
    emmision: "",
    powerConsumption: "",
    batteryRange: 0,
  };

  const carPerformanceFields = [
    { id: "topSpeed", label: "Maksimum Hız (km/h)", type: "number" },
    { id: "acceleration", label: "Hızlanma (0-100 km/s)", type: "text" },
    {
      id: "urbanConsumption",
      label: "Şehir İçi Tüketim (L/100km)",
      type: "text",
    },
    { id: "emmision", label: "Emisyon (g/km)", type: "text" },
    { id: "powerConsumption", label: "Güç Tüketimi (kWh/100km)", type: "text" },
    { id: "batteryRange", label: "Batarya Menzili (km)", type: "number" },
  ];

  return (
    <div className="max-w-md ml-8 mt-8">
      <Formik
        initialValues={initialCarPerformanceValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <legend className="mb-4">Car Performans Detayları</legend>

            {carPerformanceFields.map((field) => (
              <div className="flex flex-col gap-2 mb-4" key={field.id}>
                <Label htmlFor={field.id}>{field.label}</Label>
                <Field
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  className="form-input border border-gray-300 rounded p-2"
                />
              </div>
            ))}

            <Button type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCarPerformanceComponent;
