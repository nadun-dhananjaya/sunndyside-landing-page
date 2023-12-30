import ConeImage from ".//..//..//images//desktop//image-gallery-cone.jpg";
import ConeMobileImage from ".//..//..//images//mobile//image-gallery-cone.jpg";
import MilkBottleImage from ".//..//..//images//desktop//image-gallery-milkbottles.jpg";
import MilkBottleMobileImage from ".//..//..//images//mobile//image-gallery-milkbottles.jpg";
import OrangeImage from ".//..//..//images//desktop//image-gallery-orange.jpg";
import OrangeMobileImage from ".//..//..//images//mobile//image-gallery-orange.jpg";
import SugarCubeImage from ".//..//..//images//desktop//image-gallery-sugarcubes.jpg";
import SugarCubeMobileImage from ".//..//..//images//mobile//image-gallery-sugar-cubes.jpg";
import ResponsiveImage from "../common/ResponsiveImage";
import SiteLogo from ".//..//..//images//logo-green.svg";
import FacebookIcon from ".//..//..//images//icon-facebook.svg";
import InstaIcon from ".//..//..//images//icon-instagram.svg";
import XIcon from ".//..//..//images//icon-twitter.svg";
import PrinterstIcon from ".//..//..//images//icon-pinterest.svg";

const Footer = () => {
  return (
    <>
      <div className="flex md:flex-row flex-wrap">
        <div className="w-1/2 md:w-1/4">
          <ResponsiveImage
            urls={{
              desktop: MilkBottleImage,
              mobile: MilkBottleMobileImage,
            }}
          />
        </div>

        <div className="w-1/2 md:w-1/4">
          <ResponsiveImage
            urls={{
              desktop: OrangeImage,
              mobile: OrangeMobileImage,
            }}
          />
        </div>

        <div className="w-1/2 md:w-1/4">
          <ResponsiveImage
            urls={{
              desktop: ConeImage,
              mobile: ConeMobileImage,
            }}
          />
        </div>

        <div className="w-1/2 md:w-1/4">
          <ResponsiveImage
            urls={{
              desktop: SugarCubeImage,
              mobile: SugarCubeMobileImage,
            }}
          />
        </div>
      </div>
      <div className="py-[4.5rem] bg-green w-full flex flex-col justify-center">
        <div className="flex justify-center">
          <img src={SiteLogo} className="fill-[#2C7566]" />
        </div>
        <div className="flex justify-center mt-[2.5rem]">
          <ul className="flex gap-[3.5rem] text-[#458D7E]">
            <li className="hover:text-white cursor-pointer transition-all duration-200">
              About
            </li>
            <li className="hover:text-white cursor-pointer transition-all duration-200">
              Services
            </li>
            <li className="hover:text-white cursor-pointer transition-all duration-200">
              Project
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-[5.5rem]">
          <ul className="flex gap-[3.5rem] text-[#458D7E]">
            <li className="cursor-pointer">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </li>
            <li className="cursor-pointer">
              <img src={InstaIcon} alt="Facebook Icon" />
            </li>
            <li className="cursor-pointer">
              <img src={XIcon} alt="Facebook Icon" />
            </li>
            <li className="cursor-pointer">
              <img src={PrinterstIcon} alt="Facebook Icon" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
