import React from 'react'

const SideBar = () => {
  return (
    <aside className='w-[100px] border-r-slate-300 border-r-2 text-center items-center'>
      <div className='border-b-slate-300 border-b-2'>avatar</div>
      <nav className='flex flex-col justify-between'>
        <ul>
          <li>home</li>
          <li>story</li>
          <li>rank</li>
        </ul>
        <div>mode</div>
      </nav>
    </aside>
  )
}

export default SideBar
