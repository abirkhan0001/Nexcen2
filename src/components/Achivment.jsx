import Icon5 from '../assets/svg/Icon5.svg'
import Icon6 from '../assets/svg/Icon6.svg'
import Icon7 from '../assets/svg/Icon7.svg'
import Icon8 from '../assets/svg/Icon8.svg'

const Achivment = () => {
  const icons = [
    { id: 1, img: Icon5, label: 'Member', count: '2,245,341' },
    { id: 2, img: Icon6, label: 'Clubs', count: '1,024' },
    { id: 3, img: Icon7, label: 'Event Booking', count: '5,678' },
    { id: 4, img: Icon8, label: 'Payments', count: '12,345' },
  ]

  return (
    <div className="flex flex-col md:flex-row justify-center w-full bg-[#F5F7FA] py-32 px-8 md:px-[48px] mx-auto gap-[128px]">
      <div className="max-w-full md:max-w-[40%]">
        <h1 className="text-[25px] md:text-[45px] text-[#4D4D4D] leading-tight">Helping a local</h1> 
        <h1 className="text-[25px] md:text-[45px] text-[#4CAF4F] leading-tight">business reinvent itself</h1>
        <p className="text-[#717171] text-[12px] md:text-[11px] mt-3">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="max-w-full md:max-w-[50%] grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-6">
        {icons.map(({ id, img, label, count }) => (
          <div key={id} className="flex items-center gap-3">
            <img src={img} alt={`${label} icon`} className="w-[33px] h-[33px]" />
            <div>
              <h1 className="font-bold text-lg">{count}</h1>
              <p className="text-[11px] text-[#18191F]">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achivment
