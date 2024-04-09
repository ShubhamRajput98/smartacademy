import Category from "./components/category/Category";
import MainSection from "./components/mainsection/MainSection";
import Navbar from "./components/navbar/Navbar";
import Image from "next/image";
import Star1 from "./assist/Group 58.png";
import Star2 from "./assist/Group 61.png";
import Roap1 from "./assist/Vector 8.png";
import Roap2 from "./assist/Vector 7.png";
import Star3 from "./assist/Group 56.png";
import Line from "./assist/line.png";

import Discover from "./components/discover/Discover";
import Institutes from "./components/institutes/Institutes";
import Instrutors from "./components/instrutors/Instrutors";
import Achieve from "./components/achieve/Achieve";
import NewsLetter from "./components/newsletter/NewsLetter";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <main>
        <nav>
          <Navbar />
        </nav>

        <section className="bg-mainlener relative">
          <div className="absolute top-[75px] left-[56px]">
            <Image src={Star1} alt="star" />
          </div>
          <div className="absolute top-[30px] left-[0px]">
            <Image src={Roap1} alt="roap" />
          </div>
          <div className="absolute bottom-[204px] left-[0px]">
            <Image src={Star2} alt="star" />
          </div>
          <div className="absolute bottom-[116px] right-[0px]">
            <Image src={Roap2} alt="roap" />
          </div>
          <div className="absolute top-[75px] right-[492px] xmd:right-[280px]">
            <Image src={Star3} alt="star" />
          </div>
          <MainSection />
        </section>

        <section className="bg-bgtheme">
          <Category />
        </section>

        <section className="bg-bgtheme">
          <Discover />
        </section>

        <section className="bg-bgtheme">
          <Institutes />
        </section>

        <section className="bg-bgdark">
          <Instrutors />
        </section>

        <section className="gradeant relative z-10">
          <div className="line absolute left-0 top-[115px] z-[1] xl:hidden">
            <Image src={Line} alt='Line' />
          </div>
          <Achieve />

          <div className="absolute bottom-0 w-full h-[45px] bg-[#9C79B3] z-[-1] lg:h-[37px] xl:h-[39px] "></div>
        </section>


        <section className="bg-bgtheme">
          <NewsLetter />
        </section>

        <footer>
          <Footer />
        </footer>

      </main>
    </>

  );
}
