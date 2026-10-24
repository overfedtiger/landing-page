import { FaUserCircle } from "react-icons/fa"
import { NavLinks } from "./Navbar"


const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className={`${showMenu ? 'left-0' : '-left-full'}fixed top-0 z-50 bg-white dark:bg-gray-800/90 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex-col justify-between px-8 pb-6 pt-12 transiton-all duration-300`} 
    >
        <div className='card'>
            <div className='flex items-center gap-3 justify-start'>
                <FaUserCircle 
                size={50} />
                <div>
                    <h2>Hello User</h2>
                    <h3>Premium User</h3>
                </div>
            </div>
                <nav>
                    <ul className='space-y-5 text-xl'>
                        {
                            NavLinks.map((link) =>{
                                return (
                                    <li
                                    key={link.id}>
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
        </div>
    </div>
  )
}

export default ResponsiveMenu