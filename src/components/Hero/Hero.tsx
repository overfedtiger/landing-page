import DarkImg from '../../assets/darkImg.png';
import LightImg from '../../assets/lightImg.png';

type Theme = 'light' | 'dark';

type HeroProps = {
  theme: Theme;
};

const Hero = ({ theme }: HeroProps) => {
  return (
    <div className='dark:bg:black mt-5 p-7 dark:text-white duration-300 relative z-20'>
      <div className='container min-h-[620px] flex'>
        <div className='grid place-item-center grid-cols-1 sm:grid-cols-2'>
          <div data-aos='zoom-in' data-aos-duration='1500' data-aos-once className='order-1 sm:order-2'>
            <img
              src={theme === 'dark' ? DarkImg : LightImg}
              alt='hero visual'
              className='relative z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_10px_6px_rgba(0,0,0,0.5)]'
            />
          </div>
          <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
            <p data-aos='fade-up' data-aos-delay='600' className='text-orange-400 text-2xl font-serif'>
              Effortlessly
            </p>
            <h1 data-aos='fade-up' data-aos-delay='600' className='text-5xl lg:text-7xl font-semibold font-serif'>
              OverFed Tiger
            </h1>
            <p data-aos='fade-up' data-aos-delay='1200'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque adipisci maiores nesciunt natus sed.
            </p>
            <button
              data-aos='fade-up'
              data-aos-duration='1200'
              className='bg-orange-400 dark:text-white px-6 py-2 rounded-md hover:bg-orange-600 duration-300'
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;