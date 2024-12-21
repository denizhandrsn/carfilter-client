import { Button, Label } from "flowbite-react";
import { Field, Form, Formik } from "formik";
import React from "react";

type CarInteriorDetailValues = {
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

const AddCarInteriorComponent: React.FC = () => {
  const initialCarInteriorValues: CarInteriorDetailValues = {
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
  };

  const carInteriorFields = [
    {
      id: "heightAdjustmentSeat",
      label: "Yükseklik Ayarlı Koltuk",
      type: "checkbox",
    },
    {
      id: "electricAdjustmentSeat",
      label: "Elektrikli Ayarlanabilir Koltuk",
      type: "checkbox",
    },
    { id: "heatedSeats", label: "Isıtmalı Koltuklar", type: "checkbox" },
    {
      id: "ventilatedSeats",
      label: "Havalandırmalı Koltuklar",
      type: "checkbox",
    },
    { id: "sportsSeat", label: "Spor Koltuklar", type: "checkbox" },
    {
      id: "adjustableSteeringWheel",
      label: "Ayarlanabilir Direksiyon",
      type: "checkbox",
    },
    {
      id: "heatedSteeringWheel",
      label: "Isıtmalı Direksiyon",
      type: "checkbox",
    },
    { id: "rearHeadrest", label: "Arka Baş Dayanağı", type: "checkbox" },
    {
      id: "foldingRearSeat",
      label: "Katlanabilir Arka Koltuk",
      type: "checkbox",
    },
    {
      id: "slidingRearSeat",
      label: "Kaydırılabilir Arka Koltuk",
      type: "checkbox",
    },
    { id: "centralArmRest", label: "Orta Kol Dayama", type: "checkbox" },
    { id: "makeUpMirror", label: "Makyaj Aynası", type: "checkbox" },
    {
      id: "adjustableDashboardLighting",
      label: "Ayarlanabilir Gösterge Paneli Işığı",
      type: "checkbox",
    },
    { id: "tachometer", label: "Devir Saati (Tachometer)", type: "checkbox" },
    { id: "dayCounter", label: "Gün Sayacı", type: "checkbox" },
    {
      id: "coolantTemperatureGauge",
      label: "Soğutma Sıvısı Sıcaklık Göstergesi",
      type: "checkbox",
    },
    {
      id: "outsiteTemperatureGauge",
      label: "Dış Sıcaklık Göstergesi",
      type: "checkbox",
    },
    { id: "boardComputer", label: "Araç Bilgisayarı", type: "checkbox" },
    { id: "audioSystem", label: "Ses Sistemi", type: "checkbox" },
    { id: "digitalRadio", label: "Dijital Radyo", type: "checkbox" },
    { id: "audioInput", label: "Ses Girişi", type: "text" },
    { id: "navigationSystem", label: "Navigasyon Sistemi", type: "number" },
    { id: "bluetooth", label: "Bluetooth", type: "number" },
  ];

  return (
    <div className="max-w-md ml-8 mt-8">
      <Formik
        initialValues={initialCarInteriorValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <legend className="mb-4">Car İç Donanım Detayları</legend>

            {carInteriorFields.map((field) => (
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

export default AddCarInteriorComponent;
