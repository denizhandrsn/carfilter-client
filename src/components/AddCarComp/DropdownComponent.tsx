import { Button, Dropdown, DropdownItem } from "flowbite-react";
import React, { useState } from "react";
import { CarModel } from "../../models/carModel";
import * as yup from "yup";
type Props = { opts: any[] };

type DropdownFormValues = {
  bodyType: string;
  transmission: string;
  numberOfSeats: number;
};

const DropdownComponent = (props: Props) => {
  // Dropdown için state tanımlama
  const validationSchema = yup.object({
    bodyType: yup.string().required(),
    transmission: yup.string().required(),
    numberOfSeats: yup.number().required(),
  });

  const initialValues: DropdownFormValues = {
    bodyType: "",
    transmission: "",
    numberOfSeats: 0,
  };

  const [selectedOption, setSelectedOption] = useState<string>("Seçiniz");
  const [label, setLabel] = useState("Bodytype");
  // Dropdown itemlarını tanımlama
  const options: any[] = props.opts;

  // Seçilen değeri güncelleyen fonksiyon
  const handleSelect = (option: string): void => {
    setSelectedOption(option);
  };

  return (
    <>
      <Dropdown id="dropdown" className="">
        <DropdownItem>Var</DropdownItem>
        <DropdownItem>Yok</DropdownItem>
      </Dropdown>
    </>
  );
};

export default DropdownComponent;
