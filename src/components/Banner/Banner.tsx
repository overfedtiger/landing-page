import BannerImage from '../../assets/banner.jpeg'


const bannerImg = {
    backgroundImage: `url(${BannerImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%'
}
const Banner = () => {
  return (
    <div className='dark:bg-black text-black '>
        <div className='container grid place-items-center pb-14'>
            <div className='text-black sm:min-h-[350px] max-w-[700px] py-10 sm:grid sm:place-items-center rounded-xl shadow-md'
                style={bannerImg}>
                <div>
                    <div className='space-y-6 max-w-xl mx-auto'>
                        <h3
                         data-aos='fade-up'
                         className='text-3xl text-center sm:text-4xl font-semibold font-serif'>Get Started With Our App</h3>
                        <p 
                         data-aos='fade-up'
                         className='text-center sm:px-20'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni?
                        </p>
                        <div 
                        data-aos='fade-up'
                        className='flex justify-center item-center flex-wrap gap-4'>
                            {/* playStore Img */}
                            <a href="
                            "> playstore
                                <img src='' alt="" 
                                className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] '/>
                            </a>
                            {/* appStore Img */}
                             <a href="
                            "> appstore
                                <img src='' alt=""
                                 className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] ' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
};

export default Banner;