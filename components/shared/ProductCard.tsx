import React from "react";
import Link from "next/link";
import Image from "next/image";
import card from "@/public/img/card.png";
import "keen-slider/keen-slider.min.css";

const ProductCard = () => {
  return (
    <>
      <Link
        href={"/"}
        className="bg-black flex flex-col items-center justify-between text-white hover:text-primary rounded-xl transition-all duration-500 shadow-md shadow-yellow-300 hover:shadow-yellow-400 hover:shadow-lg"
      >
        <Image src={card} alt="" className="w-full" loading="lazy" />
        <p className="py-4 px-2 text-lg">جاقاشقی پديده کروم</p>
      </Link>
    </>
  );
};

export default ProductCard;
