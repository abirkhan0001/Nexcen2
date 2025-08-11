import Logo1 from '../assets/svg/Logo1.svg'
import Logo2 from '../assets/svg/Logo2.svg'
import Logo3 from '../assets/svg/Logo3.svg'
import Logo4 from '../assets/svg/Logo4.svg'
import Logo5 from '../assets/svg/Logo5.svg'
import Logo6 from '../assets/svg/Logo6.svg'

const OurClients = () => {
  const clientsLogo = [
    { id: 1, img: Logo1 },
    { id: 2, img: Logo2 },
    { id: 3, img: Logo3 },
    { id: 4, img: Logo4 },
    { id: 5, img: Logo5 },
    { id: 6, img: Logo6 },
  ]

  return (
    <div className="px-[102px] max-w-[1002px] mx-auto">
      
      <div className="text-[#4D4D4D] font-semibold text-[25px] flex justify-center mt-[13px]">
        <h1>Our Clients</h1>
      </div>

      <div className="text-[#717171] text-[11px] flex justify-center pt-2 text-center">
        <p>We have been working with some Fortune 500+ clients</p>
      </div>

     
      <div className="flex justify-between items-center py-4 flex-wrap gap-6">
        {clientsLogo.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt={`Client logo ${item.id}`}
            className="w-[70px] h-[82px] object-contain"
          />
        ))}
      </div>
    </div>
  )
}

export default OurClients
