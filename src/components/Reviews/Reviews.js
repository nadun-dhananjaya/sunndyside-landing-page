import ReviewCard from "./ReviewCard";
import EmilyImage from ".//..//..//images//image-emily.jpg";
import JennieImage from ".//..//..//images//image-jennie.jpg";
import ThomasImage from ".//..//..//images//image-thomas.jpg";

const Reviews = () => {
  return (
    <div className="py-[10rem]">
      <h2 className="text-center font-fraunces text-light-grey text-[20px] font-black">
        CLIENT TESTIMONIALS
      </h2>
      <div className="w-[90%] gap-10 flex flex-col md:flex-row mx-auto mt-[5rem]">
        <div className="w-full md:w-1/3 ">
          <ReviewCard
            icon={EmilyImage}
            name={`Emily R.`}
            title={`Marketing Director`}
            testimonial={`We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`}
          />
        </div>
        <div className="w-full md:w-1/3 ">
          <ReviewCard
            icon={ThomasImage}
            name={`Thomas S.`}
            title={`Chief Operating Officer`}
            testimonial={`Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.`}
          />
        </div>
        <div className="w-full md:w-1/3 ">
          <ReviewCard
            icon={EmilyImage}
            name={`Jennie F.`}
            title={`Business Owner`}
            testimonial={`Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
