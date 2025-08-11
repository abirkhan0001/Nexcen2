import Image9 from '../assets/png/image 9.png'
import Logo1 from '../assets/svg/Logo1.svg'
import Logo2 from '../assets/svg/Logo2.svg'
import Logo3 from '../assets/svg/Logo3.svg'
import Logo4 from '../assets/svg/Logo4.svg'
import Logo5 from '../assets/svg/Logo5.svg'
import Logo6 from '../assets/svg/Logo6.svg'
import SecondaryButton from '../button/SecondaryBtn'

const Customar = () => {
  const clientsLogo = [
    { id: 1, img: Logo1 },
    { id: 2, img: Logo2 },
    { id: 3, img: Logo3 },
    { id: 4, img: Logo4 },
    { id: 5, img: Logo5 },
    { id: 6, img: Logo6 },
  ];

  return (
    <div className="bg-[#F5F7FA] py-8 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div>
          <img
            src={Image9}
            alt="Customer"
            className="w-full max-w-[227px] h-auto md:h-[227px] object-contain"
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <p className="text-[#717171] text-[12px] leading-[18px] mb-4 whitespace-pre-line">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui,
            vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
            tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
            elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
            ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium.
            Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h1 className="text-[#4CAF4F] text-[14px] font-semibold mb-1">Tim Smith</h1>
          <p className="text-[#717171] text-[12px] mb-4 leading-[16px]">
            British Dragon Boat Racing Association
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-6">
            {clientsLogo.map((item) => (
              <img
                key={item.id}
                src={item.img}
                alt={`Client logo ${item.id}`}
                className="w-[33px] h-[33px] object-contain"
              />
            ))}
            <SecondaryButton className="whitespace-nowrap hover:text-[#2F6F2F]">
              Meet All Customer
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customar;
