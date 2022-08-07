import React from 'react'
import {Image} from  "./Thumb.styles"

export const Thumb = ({image, movieId, clickable}) => {
  return (
    <div>
        <Image src={image} alt='movie-thumb' />
    </div>
  )
}
