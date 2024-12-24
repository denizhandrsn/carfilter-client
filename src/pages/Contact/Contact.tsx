import { Card, Label } from "flowbite-react";
import React from "react";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-5">
      <Card className="flex items-center">
        <Label>İletişim için: Denizhan Dursun</Label>
        <Label>Email: 2012101023@ogr.mehmetakif.edu.tr</Label>
        <Label>Email2: denizhan4050@hotmail.com</Label>
      </Card>
    </div>
  );
}

export default Contact;
