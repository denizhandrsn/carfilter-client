import { Button, Label } from "flowbite-react";
import { Field, Form, Formik } from "formik";
import React from "react";

type CarSpecificationsValues = {
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

const AddCarGeneralComponent: React.FC = () => {
  const initialCarSpecificationsValues: CarSpecificationsValues = {
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
  };

  const carSpecificationsFields = [
    { id: "bodyType", label: "Gövde Tipi", type: "text" },
    { id: "transmission", label: "Şanzıman", type: "text" },
    { id: "numberOfSeats", label: "Koltuk Sayısı", type: "number" },
    { id: "segment", label: "Segment", type: "text" },
    { id: "driveWheel", label: "Çekiş Sistemi", type: "text" },
    { id: "fuelType", label: "Yakıt Tipi", type: "text" },
    { id: "horsePower", label: "Beygir Gücü", type: "number" },
    { id: "torque", label: "Tork (Nm)", type: "number" },
    { id: "engineCapacity", label: "Motor Hacmi", type: "text" },
    { id: "turbo", label: "Turbo", type: "checkbox" },
    {
      id: "fuelTankCapacity",
      label: "Yakıt Deposu Kapasitesi (L)",
      type: "number",
    },
    { id: "cargoCapacity", label: "Bagaj Hacmi (L)", type: "number" },
  ];

  return (
    <div className="max-w-md ml-8 mt-8">
      <Formik
        initialValues={initialCarSpecificationsValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <legend className="mb-4">Car Teknik Özellikler</legend>

            {carSpecificationsFields.map((field) => (
              <div
                className={`flex ${
                  field.type === "checkbox" ? "items-center" : "flex-col"
                } gap-2 mb-4`}
                key={field.id}
              >
                <Label htmlFor={field.id}>{field.label}</Label>
                <Field
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  className={
                    field.type === "checkbox"
                      ? "form-checkbox"
                      : "form-input border border-gray-300 rounded p-2"
                  }
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

export default AddCarGeneralComponent;
