import React from 'react'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star';
const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
}

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
}

const Quality = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <div className='rounded-2xl	 border-2 border-slate-300 w-[300px] h-[250px] '>
      <div className='m-2'>
        <h3 className='text-red-600 font-bold text-5xl '>1,000,000 đ/h</h3>
        <div>
          {' '}
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Rating
              name='hover-feedback'
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover)
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
            />
            {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
          </Box>
        </div>
      </div>
      <div className='flex flex-col items-center h-[180px] justify-between'>
        <button className='rounded-2xl border-2 border-slate-300 bg-red-500 text-white w-[290px] h-[50px] font-bold text-3xl '>Thuê</button>
        <button className='rounded-2xl border-2 border-slate-300 bg-white text-black w-[290px] h-[50px] font-bold text-3xl'>Donate</button>
        <button className='rounded-2xl border-2 border-slate-300 bg-white text-black w-[290px] h-[50px] font-bold text-3xl'>Icon Chat</button>
      </div>
    </div>
  )
}

export default Quality