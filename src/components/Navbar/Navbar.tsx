import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import ResponsiveMenu from './ResponsiveMenu'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
type Theme = 'light' | 'dark';

type NavbarProps = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const NavLinks = [
  {
    id: 1,
    name: 'HOME',
    link: '/#',
  },
  {
    id: 2,
    name: 'PRODUCTS',
    link: '/#products',
  },
  {
    id: 3,
    name: 'ABOUT',
    link: '/#about',
  },
  {
    id: 4,
    name: 'BOOKING',
    link: '/#booking',
  },
];

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const togglemenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 p-5 bg-gray-100/90 shadow-md backdrop-blur-sm transition-all duration-300 dark:bg-gray-800/90 dark:text-white ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className='container relative'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-3xl font-bold text-orange-400 font-serif'>OverfedTiger</h1>
          </div>
          <div className='hidden md:block'>
            <ul className='flex item-center gap-8'>
              {NavLinks.map((items) => (
                <li key={items.id} className='py-1'>
                  <a
                    className='inline-block py-1 hover:border-b-1 hover:text-orange-200 transition-colors duration-300 text-lg font-medium'
                    href={items.link}
                  >
                    {items.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className='hover:text-orange-700'>
              {theme === 'dark' ? (
                <BiSolidSun onClick={() => setTheme('light')} className='text-2xl' />
              ) : (
                <BiSolidMoon onClick={() => setTheme('dark')} className='text-2xl' />
              )}
            </div>
          </div>
          {
            showMenu? (
              <HiMenuAlt1
               onClick={togglemenu}
               size={30}
               className='cursor-pointer transition-all'/>
            ):(
              <HiMenuAlt3
               onClick={togglemenu}
               size={30}
               className='cursor-pointer transition-all'/>
            )
          }
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu}/>
    </nav>
  );
};

export default Navbar;