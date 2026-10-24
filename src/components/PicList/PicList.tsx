import Asta from '../../assets/asta.png';
import Ichigo from '../../assets/ichigo.png';
import Luffy from '../../assets/luffy.png';
import Bakugo from '../../assets/bakugo.png';
import Deku from '../../assets/deku.png';
import Zenitsu from '../../assets/darkZenitsu.png';






const CardListData = [
  {
    name: 'Asta',
    power: 'lvl300',
    image: Asta,
    aosDelay: '0'
  },
  {
    name: 'Ichigo',
    power: 'lvl250',
    image: Ichigo,
    aosDelay: '400'
  },
  {
    name: 'Luffy',
    power: 'lvl290',
    image: Luffy,
    aosDelay: '550'
  },
  {
    name: 'Bakugo',
    power: 'lvl225',
    image: Bakugo,
    aosDelay: '700'
  },
  {
    name: 'Deku',
    power: 'lvl220',
    image: Deku,
    aosDelay: '850'
  },
  {
    name: 'Zenitsu',
    power: 'lvl243',
    image: Zenitsu,
    aosDelay: '1000'
  },
];


const PicList = () => {
  return (
    <div
     data-aos='fade-up'
     className='pb-24 pt-12 dark:bg-dark dark:text-white'>
      <div className='p-4 m-4 w-full'>
        <h2 
       
        className='text-3xl sm:text-4xl font-serif font-semibold mb-3'>
          Lorem, ipsum dolor.
        </h2>
        <p 
        data-aos='fade-up'
        className='text-sm pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime porro quis?
        </p>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
            {
              CardListData.map((item) => (
                <div  data-aos='fade-up'
                  data-aos-delay={item.aosDelay}
                  className='space-y-3 border-2 border-gray-300 dark:border-black hover:border-orange-100 p-3 rounded-xl relative group'>
                  <div className='w-full h-[120px]'>
                    <img
                    className='w-full h-[120px] object-contain translate-x-7 group-hover:translate-x-20 duration-700 drop-shadow-[2px_10px_6px_rgba(0,0,0,0.3)]' 
                    src={item.image} alt="" />
                  </div>
                  <div className='space-y-2' >
                    <h2 className='text-orange-400 font-semibold'>{item.name}</h2>
                  </div>   
                  <div className='flex justify-between items-center text-xl font-semibold'>
                    <p>${item.power}/500</p>
                    <a className='hover:text-orange-700' href="" >Details</a>
                  </div>
                  <p className='font-semibold text-gray-700 rounded-sm absolute top-1 left-2 bg-gray-100 shadow-md p-4'>
                    TRUSTED
                  </p>         
                </div>
              ))
            } 
          </div>
          <div className='grid place-items-center mt-8'>
            <button
            data-aos='fade-up'
            className='button-outline'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PicList