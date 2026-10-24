

const Contact = () => {
  return (
    <div className='py-14 dark:bg-black'>
        <div
         data-aos='zoom-in'
         className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gray-800 py-8 px-6'>
                <div className=' col-span-2 space-y-3'>
                    <h3 className='text-4xl sm:text-5xl font-bold text-white font-serif'>
                        Let's collaborate on your upcoming projects.
                    </h3>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aspernatur laudantium sint facilis perspiciatis accusantium?</p>
                </div>
                <div className='' >
                    <a href="#"
                    className='inline-block font-semibold text-white py-3 px-6 bg-orange-400 rounded-lg tracking-wider uppercase hover:bg-orange-800 duration-300'>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;