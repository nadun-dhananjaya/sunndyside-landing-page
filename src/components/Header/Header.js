import HeroImage from ".//..//..//images//desktop//image-header.jpg";
import HeroImageMobile from ".//..//..//images//mobile//image-header.jpg";
import ResponsiveImage from "../common/ResponsiveImage";
import ArrowDown from ".//..//..//images//icon-arrow-down.svg";
import NavBar from "../common/NavBar";
const Header = () => {
  return (
    <div className="relative ">
      <NavBar />
      <div className="absolute px-4 -translate-x-1/2 -translate-y-0 left-1/2 bottom-[55%] xsm:bottom-1/2 sm:bottom-[60%]  w-full text-center">
        <h1 className="font-fraunces uppercase  text-white text-[2rem]  xsm:text-[2.5rem] sm:text-[2rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[3.5rem] font-black tracking-[8.75px]">
          We are creatives
        </h1>
      </div>
      <div className="absolute -translate-x-1/2  -translate-y-0 bottom-[26%] left-1/2  sm:bottom-[40%]">
        <img
          src={ArrowDown}
          alt="arrow down"
          className="h-[7.5rem] sm:h-[4rem] md:h-[5rem] lg:h-[6rem] xl:h-[8rem]"
        />
      </div>
      <div className="">
        <ResponsiveImage
          urls={{
            desktop: HeroImage,
            mobile: HeroImageMobile,
          }}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Header;
