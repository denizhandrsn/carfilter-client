import { Button, Label } from "flowbite-react";
import { Field, Form, Formik } from "formik";
import React from "react";

type CarComfortDetailValues = {
  id: number;
  [key: string]: boolean | number; // Dinamik alanlar için
};

const AddCarComfortComponent: React.FC = () => {
  const initialCarComfortValues: CarComfortDetailValues = {
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
  };

  const carComfortOptions = [
    { id: "centralDoorLock", label: "Merkezi kilit sistemi" },
    { id: "keylessEntry", label: "Anahtarsız Giriş" },
    { id: "startButton", label: "Start Düğmesi" },
    { id: "controlCircut", label: "Kontrol Devresi" },
    { id: "electricWindowsFront", label: "Elektrikli camlar ön" },
    { id: "electricWindowsBack", label: "Elektrikli camlar arka" },
    { id: "powerSteering", label: "Hidrolik Direksiyon" },
    { id: "cruiseControl", label: "Cruise Control" },
    { id: "airConditioning", label: "Klima" },
    { id: "parkingSensors", label: "Park Sensörü" },
    { id: "reverseCamera", label: "Geri Görüş Kamerası" },
    { id: "parkingMachine", label: "Otomatik Park Makinesi" },
    { id: "startStopSystem", label: "Start-Stop Sistemi" },
  ];

  return (
    <div className="max-w-md ml-8 mt-8">
      <Formik
        initialValues={initialCarComfortValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <legend className="mb-4">Car Konfor Detayları</legend>

            {carComfortOptions.map((option) => (
              <div className="flex items-center gap-2" key={option.id}>
                <Field
                  type="checkbox"
                  id={option.id}
                  name={option.id}
                  className="form-checkbox"
                />
                <Label htmlFor={option.id}>{option.label}</Label>
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

export default AddCarComfortComponent;
