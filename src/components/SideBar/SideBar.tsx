import React, { useEffect, useState } from 'react'
import { DarkModeIcon, HomeIcon, LightModeIcon, StoryIcon } from '~/components/icons'
interface Props {
  mode: string
  current?: number
}

const SideBar = ({ mode, current }: Props) => {
  const [themeMode, setThemeMode] = useState<string>(mode)
  const [tabCurrent, setTabCurrent] = useState<number>(current || 1)
  const handleClickMode = () => {
    themeMode == 'light' ? setThemeMode('dark') : setThemeMode('light')
  }

  // useEffect(() => {}, [mode])
  return (
    <aside className='w-[100px] border-r-slate-300 border-r-2 flex flex-col text-center items-center'>
      <button className='w-[50px] h-[50px] rounded-3xl mt-5 text-5xl font-bold text-white bg-blue-950 flex items-center justify-center'>
        +
      </button>
      <nav className='max-h-[500px] flex flex-col justify-between px-[18px] items-center mt-6'>
        <ul>
          <button
            className={`flex flex-col justify-center items-center text-xl ${
              tabCurrent === 1 ? 'bg-slate-200' : ''
            } w-[65px] h-[65px] rounded-xl`}
          >
            <HomeIcon initialSize={25}></HomeIcon>
            Home
          </button>
          <button
            className={`flex flex-col justify-center items-center text-xl ${
              tabCurrent === 2 ? 'bg-slate-200' : ''
            } w-[65px] h-[65px] rounded-xl`}
          >
            <StoryIcon initialSize={25}></StoryIcon>
            Story
          </button>
          <button
            className={`flex flex-col justify-center items-center text-xl ${
              tabCurrent === 3 ? 'bg-slate-200' : ''
            } w-[65px] h-[65px] rounded-xl`}
          >
            <HomeIcon initialSize={25}></HomeIcon>
            Home
          </button>
          <button
            className={`flex flex-col justify-center items-center text-xl ${
              tabCurrent === 4 ? 'bg-slate-200' : ''
            } w-[65px] h-[65px] rounded-xl`}
          >
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
