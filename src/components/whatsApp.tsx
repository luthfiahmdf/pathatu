
import React from 'react';
import { Button } from './ui/button';

export const WhatsApp = () => {
  const onClick = () => {
    console.log("clicked")
  }
  return (

    <div onClick={() => onClick()} className='  cursor-pointer fixed flex items-center justify-center transition-transform bottom-24 md:bottom-28 right-9 md:right-12 xl:right-12 z-50 gap-2 rounded-full h-10 w-10 md:h-12 md:w-12  '>
      <Button className='bg-green-400'>Donasi Buku</Button>

    </div>
  );
};

