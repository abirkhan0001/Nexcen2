import Image from '../../assets/png/Illustration.png'
import Button from '../../button/PrimaryBtn'

const Hero = () => {
  return (
    <div className="bg-[#F5F7FA] w-full py-32">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start px-6 md:px-[102px] max-w-[1002px] mx-auto justify-between gap-8 py-10">
        
  
        <div className="font-semibold flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-[36px] md:text-[45px] text-[#4D4D4D] leading-tight">
            Lessons and insights
          </h1>
          <h1 className="text-[36px] md:text-[45px] text-[#4CAF4F] leading-tight">
            from 8 years
          </h1>
          <p className="text-[#717171] text-[12px] md:text-[11px] mt-3">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className="pt-6">
            <Button>Register</Button>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src={Image} 
            alt="Illustration" 
            className="w-[272px] md:w-[283px] h-auto" 
          />
        </div>

      </div>
    </div>
  )
}

export default Hero
