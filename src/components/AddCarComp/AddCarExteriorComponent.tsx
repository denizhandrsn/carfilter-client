import { Button, Label } from "flowbite-react";
import { Field, Form, Formik } from "formik";
import React from "react";

type CarExteriorFeaturesValues = {
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

const AddCarExteriorComponent: React.FC = () => {
  const initialCarExteriorFeaturesValues: CarExteriorFeaturesValues = {
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
  };

  const carExteriorFeaturesFields = [
    { id: "intervalWiper", label: "Zaman Ayarlı Silecek" },
    { id: "alloyWheels", label: "Alaşım Jantlar" },
    { id: "rainSensor", label: "Yağmur Sensörü" },
    { id: "sunRoof", label: "Sunroof" },
    { id: "panoramicRoof", label: "Panoramik Tavan" },
    { id: "roofRails", label: "Tavan Rayları" },
    { id: "mettalicPaint", label: "Metalik Boya" },
    { id: "paintedBumpers", label: "Boyalı Tamponlar" },
    { id: "tintedGlass", label: "Renkli Camlar" },
    { id: "rearPrivacyGlass", label: "Arka Mahremiyet Camı" },
    { id: "electricMirrors", label: "Elektrikli Aynalar" },
    { id: "foldingExteriorMirrors", label: "Katlanabilir Dış Aynalar" },
    { id: "frontFogLights", label: "Ön Sis Farları" },
    { id: "xenonHeadLights", label: "Xenon Farlar" },
    { id: "ledHeahlights", label: "LED Farlar" },
    { id: "ledRearLighting", label: "LED Arka Aydınlatma" },
    { id: "dayLights", label: "Gündüz Farları" },
    { id: "headlampWasher", label: "Far Yıkama Sistemi" },
    { id: "burglarAlarm", label: "Hırsız Alarmı" },
  ];

  return (
    <div className="max-w-md ml-8 mt-8">
      <Formik
        initialValues={initialCarExteriorFeaturesValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <legend className="mb-4">Car Dış Özellikler</legend>

            {carExteriorFeaturesFields.map((field) => (
              <div className="flex items-center gap-2 mb-4" key={field.id}>
                <Field
                  type="checkbox"
                  id={field.id}
                  name={field.id}
                  className="form-checkbox"
                />
                <Label htmlFor={field.id}>{field.label}</Label>
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

export default AddCarExteriorComponent;
