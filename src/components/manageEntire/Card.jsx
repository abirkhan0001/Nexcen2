import CardImg1 from '../../assets/svg/Icon1.svg'
import CardImg2 from '../../assets/svg/Icon2.svg'
import CardImg3 from '../../assets/svg/Icon3.svg'

const Card = () => {
  return (
    <div className="max-w-[1002px] mx-auto px-4 md:px-[102px]">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center max-w-sm bg-white rounded-lg shadow-sm p-5 text-center">
            <img src={CardImg1} alt="Membership Icon" className="w-[45px] h-[38px]" />
            <h1 className="font-bold text-[#4D4D4D] text-[20px] mt-3">
              Membership <br /> Organisations
            </h1>
            <p className="text-gray-600 text-[11px] mt-2 leading-relaxed">
              Our membership management <br />
              software provides full automation of <br />
              membership renewals and payments.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center max-w-sm bg-white rounded-lg shadow-sm p-5 text-center">
            <img src={CardImg2} alt="National Associations Icon" className="w-[45px] h-[38px]" />
            <h1 className="font-bold text-[#4D4D4D] text-[20px] mt-3">
              National <br /> Associations
            </h1>
            <p className="text-gray-600 text-[11px] mt-2 leading-relaxed">
              Our membership management <br />
              software provides full automation of <br />
              membership renewals and payments.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center max-w-sm bg-white rounded-lg shadow-sm p-5 text-center">
            <img src={CardImg3} alt="Clubs and Groups Icon" className="w-[45px] h-[38px]" />
            <h1 className="font-bold text-[#4D4D4D] text-[20px] mt-3">
              Clubs And <br /> Groups
            </h1>
            <p className="text-gray-600 text-[11px] mt-2 leading-relaxed">
              Our membership management <br />software provides full automation of<br />membership renewals and payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
