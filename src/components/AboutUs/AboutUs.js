import ResponsiveImage from "../common/ResponsiveImage";
import EggImage from ".//..//..//images//desktop//image-transform.jpg";
import EggMobileImage from ".//..//..//images//mobile//image-transform.jpg";
import GlassImage from ".//..//..//images//desktop//image-stand-out.jpg";
import GlassMobileImage from ".//..//..//images//mobile//image-stand-out.jpg";
import CherryImage from ".//..//..//images//desktop//image-graphic-design.jpg";
import CherryMobileImage from ".//..//..//images//mobile//image-graphic-design.jpg";
import OrangeImage from ".//..//..//images//desktop//image-photography.jpg";
import OrangeMobileImage from ".//..//..//images//mobile//image-photography.jpg";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center md:order-1 order-2">
          <div className="w-2/3 py-12">
            <h2 className="font-fraunces text-[40px] font-black leading-normal -tracking-[0.286px]">
              Transform your brand
            </h2>
            <p className="font-fraunces mt-8 mb-10">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a className="font-fraunces font-black text-[15px] relative  link-yellow">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2  order-1 md:order-2">
          <ResponsiveImage
            urls={{
              desktop: EggImage,
              mobile: EggMobileImage,
            }}
            alt="Hero Image"
            className={`h-full w-full object-cover`}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 ">
          <ResponsiveImage
            urls={{
              desktop: GlassImage,
              mobile: GlassMobileImage,
            }}
            alt="Hero Image"
            className={`h-full w-full object-cover`}
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-2/3 py-12 ">
            <h2 className="font-fraunces text-[40px] font-black leading-normal -tracking-[0.286px]">
              Stand out to the right audience
            </h2>
            <p className="font-fraunces mt-8 mb-10">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a className="font-fraunces font-black text-[15px] relative link-red">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative">
          <ResponsiveImage
            urls={{
              desktop: CherryImage,
              mobile: CherryMobileImage,
            }}
            alt="Hero Image"
            className={`w-full `}
          />
          <div className="absolute bottom-0 translate-y-0 w-full  flex justify-center">
            <div className=" text-center">
              <h2 className="font-fraunces text-[30px]  font-black leading-normal -tracking-[0.286px]">
                Graphic Design
              </h2>
              <p className="font-fraunces text-[14px] mt-8 md:mt-2 lg:mt-8 mb-10">
                Great design makes you memorable. We deliver <br /> artwork that
                underscores your brand message <br /> and captures potential
                clients’ attention.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <ResponsiveImage
            urls={{
              desktop: OrangeImage,
              mobile: OrangeMobileImage,
            }}
            alt="Hero Image"
            className={`w-full`}
          />
          <div className="absolute bottom-0 translate-y-0 w-full flex justify-center">
            <div className=" text-center">
              <h2 className="font-fraunces text-[30px]  font-black leading-normal -tracking-[0.286px]">
                Photography
              </h2>
              <p className="font-fraunces text-[14px] mt-8 md:mt-2 lg:mt-8 mb-10">
                Increase your credibility by getting the most <br /> stunning,
                high-quality photos that improve your
                <br /> business image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
