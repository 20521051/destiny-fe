import React, { useState } from 'react'
import { EUFlagIcon, USFlagIcon, VNFlagIcon } from '../icons'

const Flag = () => {
  return (
    <form>
      <div className='flex'>
        <button
          id='dropdown-button-2'
          data-dropdown-toggle='dropdown-search-city'
          className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'
          type='button'
        >
          <VNFlagIcon />
          VN{' '}
        </button>
        <div
          id='dropdown-search-city'
          className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
        >
          <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdown-button-2'>
            <li>
              <button
                type='button'
                className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                role='menuitem'
              >
                <div className='inline-flex items-center'>
                  <USFlagIcon />
                  United States
                </div>
              </button>
            </li>
            <li>
              <button
                type='button'
                className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                role='menuitem'
              >
                <div className='inline-flex items-center'>
                  <EUFlagIcon />
                  EU
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </form>
  )
}

export default Flag
