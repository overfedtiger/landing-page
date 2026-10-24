const testimonialData = [
  {
    name: 'Dishade',
    // image:,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    aosDelay: '0',
  },
  {
    name: 'Chance',
    // image:,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    aosDelay: '300',
  },
  {
    name: 'Delight',
    // image:,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    aosDelay: '1000',
  },
]

const Testimonial = () => {
  return (
    <div className='dark:bg-black dark:text-white py-14'>
        <div className="container">
          <div className='space-y-4 pb-12 '>
            <div>
              <p 
              data-aos='fade-up'
              className='text-3xl font-semibold text-center sm:text-4xl font-serif'
              >
                What Our Clients Say About Us
              </p>
              <p 
              data-aos='fade-up'
              className='text-center sm:px-44'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum fugit laborum beatae sint libero, quas dolores ipsam quasi? Culpa, aperiam!
              </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 '>
              {
                testimonialData.map((item) => {
                  return (
                    <div key={item.name}
                    data-aos='fade-up'
                    data-aos-delay={item.aosDelay}
                    className='card text-center group space-y-3 sm:space-y-6  p-4 dark:bg-gray-900 py-12 duration-300 rounded-lg '
                    >
                      <div className='grid place-items-center'>
                         <img src='https://picsum.photos/230' alt=""
                      className='h-20 w-20 rounded-full border-1 border-orange-400' />
                      </div>
                      <div>
                        <div className=' text-2xl text-orange-300 text-center'>o o o o o o o</div>
                        <p className=''>{item.description}</p>
                        <p className='font-semibold text-center'>{item.name}</p>
                      </div>
                     
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
    </div>
  )
};

export default Testimonial;