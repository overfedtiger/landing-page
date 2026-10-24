import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About/About';
import Products from './components/Products/Products';
import PicList from './components/PicList/PicList';
import Testimonial from './components/Testimonial/Testimonial';
import Banner from './components/Banner/Banner';

type Theme = 'light' | 'dark';

const App = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const element = document.documentElement;

    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='duration-400'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Products />
      <PicList />
      <Testimonial />
      <Banner />
    </div>
  );
};

export default App;