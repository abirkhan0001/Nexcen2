import Pana from '../assets/png/pana.png'
import Button from '../button/PrimaryBtn'

const Calendar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-6 md:px-12 max-w-[1002px] mx-auto py-8 items-center gap-10 md:gap-20">
      <div>
        <img
          src={Pana}
          alt="Calendar Illustration"
          className="w-full max-w-[308px] h-auto md:h-[302px] object-contain"
        />
      </div>

      <div className="text-center md:text-left max-w-md">
        <h1 className="text-[#4D4D4D] leading-[30px] font-semibold text-[25px]">
          How to design your site footer like<br /> we did
        </h1>
        <p className="text-[#717171] text-[12px] mt-4 leading-[18px]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec<br /> tincidunt
          molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec<br /> quis erat at
          libero ultrices mollis. In hac habitasse platea dictumst. Vivamus<br /> vehicula leo dui, at porta
          nisi facilisis finibus. In euismod augue vitae nisi ultricies,<br /> non aliquet urna tincidunt. Integer
          in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi
          ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button className="mt-8">Learn More</Button>
      </div>
    </div>
  )
}

export default Calendar
