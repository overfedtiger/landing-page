
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'



const skillsData = [
    {
        name: 'Best Price',
        icon : (
        <FaCameraRetro className='text-5xl text-orange-300 group-hover:text-black duration-300' />
    ),
    link : '#',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, error?',
    aosDelay: '0'
},
{
     name: 'SuperB Plan',
        icon : (
        <GiNotebook className='text-5xl text-orange-300 group-hover:text-black duration-300' />
    ),
    link : '#',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, error?',
    aosDelay: '500'
},
{
     name: 'Premium Superb',
        icon : (
        <SlNote className='text-5xl text-orange-300 group-hover:text-black duration-300' />
    ),
    link : '#',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, error?',
    aosDelay: '1000'
},

]
const Products = () => {
  return (
    <div className='py-14 dark:bg-dark dark:text-white sm:min-h-[600px]'>
        <div  className='w-full mx-auto px-1 grid place-items-center'>
            <div className='pb-12'>
                <h1
                className='text-3xl font-bold sm:text-4xl text-center font-serif '>
                    Our Products Speaks
                </h1>
            </div>
            <div className='max-w-[800px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                {
                    skillsData.map((item) => (
                        <div 
                        key={item.name}
                        data-aos='fade-up'
                        data-aos-delay={item.aosDelay}
                        className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-black hover:bg-orange-200 duration-300 text-white hover:text-black rounded-md'
                        >
                            <div className='grid place-items-center'>{item.icon}</div>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <a className='button-outline' href={item.link}>Try Now</a>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products