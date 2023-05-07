import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <div className='max-w-[1350px] w-[90%] h-[350px] mx-[5%]'>
      <h2 className='h-[50px] text-3xl font-bold'>Categories</h2>
      <div className='h-[280px] mx-[20px] pt-[10px] flex justify-between overflow-x-scroll items-end'>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
      </div>
    </div>
  )
}

export default Categories
