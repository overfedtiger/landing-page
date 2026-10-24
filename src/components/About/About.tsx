import DarkImg from '../../assets/aboutDarkImg.png';
import LightImg from '../../assets/aboutLightImg.png';

type Theme = 'dark' | 'light';

type AboutProps = {
  theme: Theme
};

const About = ({ theme }: AboutProps) => {
  return (
    <div className='dark:bg-dark dark:text-white duration-300 sm:min-h[600px] sm:grid  sm:place-items-center'>
      <div className='w-full mx-auto px-1'>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
          <div
            data-aos={theme === 'dark' ? 'fade-right' : 'zoom-in'}
            data-aos-duration='1200'
            data-aos-once={true}
            className='relative'
          >
            <img
              src={theme === 'dark' ? DarkImg : LightImg}
              alt='About visuals'
              className='object-cover sm:scale-105 sm:-translate-x-11 max-h-[400px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.5)]'
            />
          </div>
          <div 
          data-aos-delay='500'
          data-aos='fade-up'
          >
            <div className='space-y-5 sm:p-16 pb-6'>
              <h2 className='grid-items-start text-3xl sm:text-4xl font-bold font-serif'>About us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam officiis vero consectetur magnam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, rem.
              </p>
              <button
              data-aos='fade-up'
              className='button-outline' 
              >Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;