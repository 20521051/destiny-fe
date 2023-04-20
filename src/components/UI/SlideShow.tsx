import React, { useState, useLayoutEffect } from 'react'

const SlideShow = () => {
  /* set slide in here */
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
    }
  ]
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
    setActiveIndex(slideIndex)
  }
  setInterval(() => {
    nextSlide()
  }, 4000)
  useLayoutEffect(() => {
    goToSlide(currentIndex)
  }, [currentIndex])
  return (
    <div className='max-w-[1800px] h-[450px] w-full m-auto py-16 px-20 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-[1700px] h-[320px] rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <button
        className='hidden group-hover:block absolute top-[50%] translate-x-[150%] translate-y-[-100%] left-5 text-4xl rounded-full bg-black/20 text-white cursor-pointer w-16 h-16 font-josefin'
        onClick={prevSlide}
      >
        &lt;
      </button>
      {/* Right Arrow */}
      <button
        className='hidden group-hover:block absolute top-[50%] -translate-x-[150%] translate-y-[-100%] right-5 text-4xl rounded-full bg-black/20 text-white cursor-pointer w-16 h-16 font-josefin'
        onClick={nextSlide}
      >
        &gt;
      </button>
      <div className='flex top-4 justify-start py-5 ml-6 mt-5'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer container bg-gray-300 rounded-full w-14 h-5 m-2 ${
              activeIndex === slideIndex ? 'w-24 bg-gray-500' : ''
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default SlideShow
