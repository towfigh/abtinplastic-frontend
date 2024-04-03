import React from "react";
import Image from "next/image";
import Link from "next/link";
import BasketIcon from "@/components/icons/Basket.icon";
import logo from "../../../public/img/logo.png";

const Header = () => {
  return (
    <div className="header bg-black text-white p-2 px-5 flex items-center justify-between">
      <div>
        <Link
          href={"/"}
          className="bg-black text-white flex items-center justify-between gap-x-5"
        >
          <Image
            src={logo}
            alt=""
            width={60}
            className="rounded"
            loading="lazy"
          />
          <h2 className="text-xl">آبتین پلاستیک</h2>
        </Link>
      </div>
      <ul className="flex gap-x-5">
        <li>
          <Link href={"/"}>خانه</Link>
        </li>
        <li>
          <Link href={"/"}>محصولات</Link>
        </li>
        <li>
          <Link href={"/"}>دسته بندی ها</Link>
        </li>
        <li>
          <Link href={"/"}>ثبت سفارش</Link>
        </li>
        <li>
          <Link href={"/"}>تماس با ما</Link>
        </li>
        <li>
          <Link href={"/about"}>درباره ما</Link>
        </li>
      </ul>
      <div>
        <Link href={"/"}>
          <BasketIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
