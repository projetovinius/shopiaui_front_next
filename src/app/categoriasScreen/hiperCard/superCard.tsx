"use client";
import * as React from 'react';
import { styled } from '@mui/system';  
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl?: string;
}

interface SuperCardProps {
  product: Product;
}

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff3d47',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const SuperCard: React.FC<SuperCardProps> = ({ product }) => {
  console.log(product.imageUrl)
  return (
    <div className="w-[300px] h-[350px] bg-slate-200 rounded hover:scale-105 transition-all duration-3000 cursor-pointer ">
      <div className="relative h-[75%]"> 
        <img
          src={product.imageUrl} 
          alt={product.name}  
          className="object-cover w-full h-[100%] rounded-t" 
        />
      </div>
      <p className="text-center font-semibold pt-4">{product.name}</p> 
      <p className="text-center text-sm text-gray-500">R$ {product.price.toFixed(2)}</p> 
      <div className="w-full flex items-center justify-end pr-2 ">
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
};

export default SuperCard;
