import React from "react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import MainLayout from "@/components/layouts/MainLayout";
import Hero from "./components/Hero";
import ProductCard from "@/components/shared/ProductCard";
import Button from "@/components/shared/Button";
import ChevronIcon from "@/components/icons/Chevron.icon";
import warranty from "@/public/img/warranty.png";
import quality from "@/public/img/quality.png";
import variant from "@/public/img/variant.png";
import abdi from "@/public/img/abdi.png";
import Certificates from "./components/Certificates";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <div>
        <h1 className="text-3xl text-center my-10 font-yekan">
          کیفیت بالا ، قیمت مناسب، هرگز جایگزینی ندارد ...
        </h1>
      </div>
      <div className="flex flex-wrap w-full px-20">
        {Array.from(Array(8).keys())?.map((item) => (
          <div key={item} className="w-1/4 p-10">
            <ProductCard />
          </div>
        ))}
      </div>
      <div className="text-center my-10">
        <Button
          title="نمایش تمام محصولات"
          variant="primary"
          className="shadow-lg shadow-yellow-300 py-4"
          icon={<ChevronIcon direction="left" />}
        />
      </div>
      <div className="features bg-theme-dark text-primary p-5 leading-11">
        <h1 className="text-3xl text-center my-10">
          آبتین هیچ جایگزینی ندارد ...
        </h1>
        <p className="text-center">
          آبتین پلاستیک با استفاده از بهترین مواد اولیه پلاستیک و تجربه ی دیرینه
          در زمینه فرش محصولات همواره اعتماد مشتریان را به خود جلب کرده است.
          گذشته ی موفق ما در صعنت لوازم خانه و آشپزخانه و رضایت همیشگی مشتریان
          از افتخارات ماست.
        </p>
        <div className="flex mt-8">
          <div className="flex flex-col w-1/3 items-center">
            <Image src={warranty} className="" alt="" loading="lazy" />
            <span className="text-2xl my-5">ضمانت کالا</span>
          </div>
          <div className="flex flex-col w-1/3 items-center">
            <Image src={quality} className="" alt="" loading="lazy" />
            <span className="text-2xl my-5">کیفیت بالا</span>
          </div>
          <div className="flex flex-col w-1/3 items-center">
            <Image src={variant} className="" alt="" loading="lazy" />
            <span className="text-2xl my-5">تنوع محصولات</span>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 p-10">
          <div className="bg-logo h-full flex flex-col justify-center items-center leading-11 px-20">
            <p className="text-center pt-16">
              آبتین پلاستیک با استفاده از بهترین مواد اولیه پلاستیک و تجربه ی
              دیرینه در زمینه فروش محصولات همواره اعتماد مشتریان را به خود جلب
              کرده است. گذشته ی موفق ما در صنعت لوازم خانه و آشپزخانه و رضایت
              همیشگی مشتریان از افتخارات ماست.
            </p>
            <p className="text-end w-full">
              عبدالله نظریان
              <br />
              مدیر و موسس صنایع پلاستیک آبتین
            </p>
          </div>
        </div>
        <div className="w-1/2 p-10 text-center">
          <Image
            src={abdi}
            className="rounded-full w-2/3 mx-auto border border-black border-2"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <Certificates />
    </MainLayout>
  );
};

export default Home;
