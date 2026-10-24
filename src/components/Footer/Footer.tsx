import {FaFacebookF, FaInstagram, FaLocationArrow, FaMailBulk, FaMobileAlt, } from "react-icons/fa";
import {FaXTwitter } from "react-icons/fa6";

const FooterLinks = [
    {
        title: 'Home',
        link: '/#',
    },
    {
        title: 'About',
        link: '/#',
    },
    {
        title: 'Contact',
        link: '/#',
    },
    {
        title: 'Blog',
        link: '/#',
    },
    
]


const Footer = () => {
  return (
    <div className='dark:bg-dark mt-14 rounded-t-3xl'>
        <div className='container'>
            <div className='grid md:grid-cols-3 py-5'>
                <div className='py-8 px-4'>
                    <h2 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                        OverFed Tiger
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, optio!

                    </p>
                    <br />
                    <div 
                     className='flex items-center gap-3'>
                        <FaLocationArrow />
                        <p>
                            Lorem, ipsum dolor.
                        </p>
                    </div>
                    <div
                     className='flex items-center gap-3'>
                        <FaMobileAlt/>
                        <p>+234 8125605953</p>
                    </div>
                    <div
                     className='flex items-center gap-3'>
                        <FaMailBulk/>
                        <p>OverfedTiger@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href=""
                        >
                         <FaInstagram
                            className='text-3xl hover:text-orange-700 duration-300 '/>
                        </a>
                         <a href=""
                        >
                         <FaFacebookF
                            className='text-3xl hover:text-orange-700 duration-300 '/>
                        </a>
                         <a href=""
                        >
                         <FaXTwitter
                            className='text-3xl hover:text-orange-700 duration-300 '/>
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pt-10'>
                    
                    <div>
                        <div className='py-8 px-4'>
                            <h2 className='text-xl font-bold sm:text-left text-justify mb-3'>
                                Important Links
                            </h2>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=> {
                                        return(
                                            <li key={link.title}
                                            className='cursor-pointer hover:text-orange-700 duration-300'
                                            >
                                                <a href={link.link}
                                                >{link.title}</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h2 className='text-xl font-bold sm:text-left text-justify mb-3'>
                                Links
                            </h2>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=> {
                                        return(
                                            <li key={link.title}
                                            className='cursor-pointer hover:text-orange-700 duration-300'
                                            >
                                                <a href={link.link}
                                                >{link.title}</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h2 className='text-xl font-bold sm:text-left text-justify mb-3'>
                                Important Links
                            </h2>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=> {
                                        return(
                                            <li key={link.title}
                                            className='cursor-pointer hover:text-orange-700 duration-300'
                                            >
                                                <a href={link.link}
                                                >{link.title}</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;