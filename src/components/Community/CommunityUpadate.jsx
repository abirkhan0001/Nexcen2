import Image1 from "../../assets/png/image 18.png";
import Image2 from "../../assets/png/image 19.png";
import Image3 from "../../assets/png/image 20.png";
import SecondaryButton from "../../button/SecondaryBtn";

const cards = [
  {
    id: 1,
    imgSrc: Image1,
    description: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    id: 2,
    imgSrc: Image2,
    description: "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    id: 3,
    imgSrc: Image3,
    description: "Revamping the Membership Model with Triathlon Australia",
  },
];

const ImageCardList = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-4 md:p-6 mb-16">
      {cards.map(({ id, imgSrc, description }) => (
        <div
          key={id}
          className="relative w-full max-w-[256.15px] bg-white rounded-lg shadow-md overflow-visible mx-auto"
        >
          {/* Image */}
          <img
            src={imgSrc}
            alt={`card-${id}`}
            className="w-full h-auto md:h-[199.08px] opacity-100 rounded-[5.57px]"
          />

          {/* Card overlay */}
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 translate-y-1/3 bg-[#F5F7FA] w-[90%] max-w-[220.65px] h-[123.55px] gap-[11.14px] opacity-100 rounded-[5px] p-[11.14px] shadow-md flex flex-col justify-between">
            <p className="font-inter font-semibold text-[13.92px] text-[#717171] leading-[19.49px] tracking-[0] text-center">
              {description}
            </p>
            <div className="flex justify-center w-full text-center h-[31.14px] gap-[5.57px] opacity-100 p-[5.57px] rotate-0 mt-2 mx-auto">
              <SecondaryButton className="font-inter font-semibold text-[13.92px] text-[#4CAF4F] leading-[19.49px] tracking-[0] align-middle hover:text-[#2F6F2F]">
                Readmore
              </SecondaryButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCardList;
