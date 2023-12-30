import UserIcon from ".//..//..//images//image-emily.jpg";

const ReviewCard = ({ icon, testimonial, name, title }) => {
  return (
    <div className="px-8">
      <img src={icon} className="mx-auto w-[4.5rem] rounded-full" />
      <p className="mt-[4rem] text-center font-barlow font-medium text-[#5B636D]">
        {testimonial}
      </p>
      <h3 className="text-center font-fraunces font-black text-black mt-[4rem]">
        {name}
      </h3>
      <p className="text-center text-[14px] font-barlow font-medium text-[#A7AAAD]">
        {title}
      </p>
    </div>
  );
};
export default ReviewCard;
