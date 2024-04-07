import React from "react";
import Link from "next/link";
import InstagramIcon from "@/components/icons/Instagram.icon";
import TelegramIcon from "@/components/icons/Telegram.icon";
import LocationIcon from "@/components/icons/Location.icon";
import CallIcon from "@/components/icons/Call.icon";
import FaxIcon from "@/components/icons/Fax.icon";

const Footer = () => {
  return (
    <div className="bg-theme-dark text-white p-16">
      <div className="flex items-start">
        <div className="w-1/2 pe-10">
          <p className="text-2xl text-primary">دفتر اتحاد</p>
          <hr className="mt-3 w-1/4 border-yellow-300" />
          <div className="flex items-center mt-8 mb-4">
            <LocationIcon className="me-3" />
            <span className="text-lg">
              تهران، تهرانپارس، خیابان اتجاد، خیابان پنجم شیدایی، کوچه هشتم
              شمالی، پلاک 15
            </span>
          </div>
          <div className="flex items-center mt-8 mb-4">
            <CallIcon className="me-3" />
            <span className="text-lg">
              تلفن :
              <Link href="tel:+982177339303" className="ms-4">
                77339303
              </Link>
              - <Link href="tel:+982177353645">77353645</Link>
            </span>
          </div>
          <div className="flex items-center mt-8 mb-4">
            <FaxIcon className="me-3" />
            <span className="text-lg">
              فکس :
              <Link href="fax:+982177792929" className="ms-4">
                77792929
              </Link>
            </span>
          </div>
          <div className="flex mb-4">
            <Link
              className="flex items-center my-4 me-10"
              href="https://t.me/abtinplastic"
            >
              <TelegramIcon className="me-3" />
              <span className="text-lg">کانال تلگرام</span>
            </Link>
            <Link
              className="flex items-center my-4"
              href="https://www.instagram.com/abtinplastic"
            >
              <InstagramIcon className="me-3" />
              <span className="text-lg">اینستاگرام</span>
            </Link>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1020.1302788117742!2d51.57614670059392!3d35.733305779883516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1712459489520!5m2!1sen!2sca"
              loading="lazy"
              height="100px"
              className="map h-96 w-full rounded-2xl"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-1/2 ps-10">
          <p className="text-2xl text-primary">دفتر شوش</p>
          <hr className="mt-3 w-1/4 border-yellow-300" />
          <div className="flex items-center mt-8 mb-4">
            <LocationIcon className="me-3" />
            <span className="text-lg">
              تهران، تهرانپارس، خیابان اتجاد، خیابان پنجم شیدایی، کوچه هشتم
              شمالی، پلاک 15
            </span>
          </div>
          <div className="flex items-center mt-8 mb-4">
            <CallIcon className="me-3" />
            <span className="text-lg">
              تلفن :
              <Link href="tel:+982177339303" className="ms-4">
                77339303
              </Link>
              - <Link href="tel:+982177353645">77353645</Link>
            </span>
          </div>
          <div className="flex items-center mt-8 mb-4">
            <FaxIcon className="me-3" />
            <span className="text-lg">
              فکس :
              <Link href="fax:+982177792929" className="ms-4">
                77792929
              </Link>
            </span>
          </div>
          <div className="flex mb-4">
            <Link
              className="flex items-center my-4 me-10"
              href="https://t.me/abtinplastic"
            >
              <TelegramIcon className="me-3" />
              <span className="text-lg">کانال تلگرام</span>
            </Link>
            <Link
              className="flex items-center my-4"
              href="https://www.instagram.com/abtinplastic"
            >
              <InstagramIcon className="me-3" />
              <span className="text-lg">اینستاگرام</span>
            </Link>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1020.1302788117742!2d51.57614670059392!3d35.733305779883516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1712459489520!5m2!1sen!2sca"
              loading="lazy"
              height="100px"
              className="map h-96 w-full rounded-2xl"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
