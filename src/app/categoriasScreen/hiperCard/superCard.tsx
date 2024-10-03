"use client";
import * as React from 'react';
import { styled } from '@mui/system';  
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography } from '@mui/material';
import Image from 'next/image';

const StyledRating = styled(Rating)( {
  '& .MuiRating-iconFilled': {
    color: '#ff3d47',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

interface SuperProps{
  name:string
}


export default function SuperCard({name}: SuperProps) {
  return (
    <div className="w-[300px] h-[350px] bg-slate-200 rounded hover:scale-105 transition-all duration-3000 cursor-pointer ">
      <div className="relative h-[80%]"> 
        <img
          src='/newbiqui.jpg'
          alt='produto'
          className='object-cover w-full h-[100%] rounded-t' 
        />
      </div>
        <p className='text-center font-semibold pt-4'>{name}</p>
        <div className="w-full flex items-center justify-end p-1 ">
            <StyledRating
              name="customized-color"
              defaultValue={0}
              getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={1}
              max={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
        </div>
    </div>
  );
}
