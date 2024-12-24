import { Card } from "flowbite-react";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-5">
      <Card className="flex items-center">
        <p className="text-xl text-black-500 dark:text-gray-400 ">Hakkinda</p>
        <p>
          CarFilter web sitesi veri tabanındaki bütün araçlar için dinamik araç
          katoloğu sağlayan bir servisdir.
        </p>
        <p>
          Bu web sitesi Mehmet Akif Ersoy Üniversitesi Yazılım Mühendisliği
          öğrencisi Denizhan Dursun tarafından bitirme projesi için yapılmıştır.
        </p>
      </Card>
    </div>
  );
};

export default About;
