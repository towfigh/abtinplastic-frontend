import type { AppProps } from "next/app";
import Head from "next/head";
import "keen-slider/keen-slider.min.css";
import "@/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ABTIN PLASTIC</title>
        <meta
          name="description"
          content="صنایع پلاستیک آبتین، به عنوان یکی از پیشگامان در تولید محصولات پلاستیکی با کیفیت و متنوع، به تولید انواع محصولات پلاستیکی خانه و آشپزخانه می پردازد. ما با استفاده از تجربه و دانش فنی خود، به تأمین نیازهای مشتریان در صنایع مختلف می پردازیم."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="صنایع پلاستیک آبتین، تولید پلاستیک، محصولات پلاستیکی خانه، محصولات پلاستیکی آشپزخانه، قطعات پلاستیکی، محصولات آشپزخانه پلاستیکی، پلاستیک باکیفیت، مصرف کننده، مواد اولیه پلاستیکی، کیفیت پلاستیک، رنگبندی بی نظیر، آبتین پلاستیک،عبدالله نظریان"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="author"
          content="عبدالله نظریان، توفیق نظری، آبتین پلاستیک"
        />
        <meta name="copyright" content="تمامی حقوق محفوظ است 1403" />
        <meta name="language" content="Persian" />
        <meta name="generator" content="Tofigh Nazari" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
