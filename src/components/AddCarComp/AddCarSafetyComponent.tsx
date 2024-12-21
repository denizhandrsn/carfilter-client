import { Button, Label } from "flowbite-react";
import { Field, Form, Formik } from "formik";
import React from "react";

type CarSafetyDetailValues = {
  id: number;
  [key: string]: boolean | number; // Dinamik alanlar için
};

const AddCarSafetyComponent: React.FC = () => {
  const initialCarSafetyValues: CarSafetyDetailValues = {
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
  };

  const carSafetyOptions = [
    { id: "abs", label: "ABS" },
    { id: "brakeAssist", label: "Fren Desteği" },
    { id: "emergencyBraking", label: "Acil Durum Freni" },
    { id: "blindSpotAssist", label: "Kör Nokta Asistanı" },
    { id: "stabilityControl", label: "Denge Kontrolü" },
    { id: "tractionControl", label: "Çekiş Kontrolü" },
    { id: "driverAirbag", label: "Sürücü Hava Yastığı" },
    { id: "passangerAirbag", label: "Yolcu Hava Yastığı" },
    { id: "sideAirbag", label: "Yan Hava Yastığı" },
    { id: "headAirbag", label: "Baş Hava Yastığı" },
    { id: "kneeAirbag", label: "Diz Hava Yastığı" },
    { id: "laneAirbag", label: "Şerit Hava Yastığı" },
    { id: "fatigueSensor", label: "Yorgunluk Sensörü" },
    { id: "tirePressureSensor", label: "Lastik Basınç Sensörü" },
    { id: "trafficSignRecognition", label: "Trafik İşareti Tanıma" },
    { id: "collisionWarningSystem", label: "Çarpışma Uyarı Sistemi" },
    { id: "automaticLevelControl", label: "Otomatik Seviye Kontrolü" },
  ];

  return (
    <div className="max-w-md ml-8 mt-8">
      <Formik
        initialValues={initialCarSafetyValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <legend className="mb-4">Car Güvenlik Detayları</legend>

            {carSafetyOptions.map((option) => (
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

export default AddCarSafetyComponent;
