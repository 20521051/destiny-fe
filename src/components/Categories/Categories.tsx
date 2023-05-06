import React from 'react'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className='max-w-[1350px] w-[90%] h-[350px] mx-[50px]'>
      <h2 className='h-[50px] text-3xl font-bold'>Categories</h2>
      <div className='h-[280px] mx-[20px] pt-[10px] flex justify-between overflow-x-scroll items-end'>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
      </div>
    </div>
  )
}

export default Categories
