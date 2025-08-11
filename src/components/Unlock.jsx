import MobileLogInImg from '../assets/png/rafiki.png'
import Button from '../button/PrimaryBtn'

const Unlock = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-6 md:px-12 max-w-[1002px] mx-auto py-8 items-center gap-10 md:gap-40">
      <div>
        <img
          src={MobileLogInImg}
          alt="Mobile Login"
          className="w-full max-w-[388px] h-auto md:h-[302px] object-contain"
        />
      </div>

      <div className="text-center md:text-left max-w-md">
        <h1 className="text-[#4D4D4D] leading-[30px] font-semibold text-[25px]">
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className="text-[#717171] text-[12px] mt-4 leading-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.<br /> Sed
          accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum<br /> lorem sed
          porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus<br /> pretium auctor. Etiam
          quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <Button className="mt-8">Learn More</Button>
      </div>
    </div>
  )
}

export default Unlock
