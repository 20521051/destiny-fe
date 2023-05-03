import React, { useEffect, useState } from 'react'
import { DarkModeIcon, HomeIcon, LightModeIcon, StoryIcon } from '~/components/icons'
interface Props {
  mode: string
}

const SideBar = ({ mode }: Props) => {
  const [themeMode, setThemeMode] = useState<string>(mode)
  const handleClickMode = () => {
    themeMode == 'light' ? setThemeMode('dark') : setThemeMode('light')
  }

  // useEffect(() => {}, [mode])
  return (
    <aside className='w-[100px] border-r-slate-300 border-r-2 flex flex-col text-center items-center'>
      <div className='w-[50px] h-[50px] rounded-full bg-slate-400 mt-5 overflow-hidden flex'>
        <img src='/src/assets/images/Naraka.jpg' alt='avatar' className='inline-block object-cover' />
      </div>
      <nav className='max-h-[500px] flex flex-col justify-between px-[18px] items-center mt-6'>
        <ul>
          <button className='flex flex-col justify-center items-center text-xl bg-slate-200 w-[65px] h-[65px] rounded-xl '>
            <HomeIcon initialSize={25}></HomeIcon>
            Home
          </button>
          <button className='flex flex-col justify-center items-center text-xl bg-slate-200 w-[65px] h-[65px] rounded-xl '>
            <StoryIcon initialSize={25}></StoryIcon>
            Story
          </button>
          <button className='flex flex-col justify-center items-center text-xl bg-slate-200 w-[65px] h-[65px] rounded-xl '>
            <HomeIcon initialSize={25}></HomeIcon>
            Home
          </button>
          <button className='flex flex-col justify-center items-center text-xl bg-slate-200 w-[65px] h-[65px] rounded-xl '>
            <HomeIcon initialSize={25}></HomeIcon>
            Home
          </button>
        </ul>
        <button
          onClick={handleClickMode}
          className='w-[35px] h-[35px] bg-indigo-950 hover:bg-indigo-800 rounded-xl flex justify-center items-center'
        >
          {themeMode == 'dark' ? <LightModeIcon initialSize={25} /> : <DarkModeIcon initialSize={25} />}
        </button>
      </nav>
    </aside>
  )
}

export default SideBar
