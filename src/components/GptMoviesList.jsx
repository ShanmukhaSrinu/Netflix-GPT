import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

import { useDispatch } from 'react-redux'
import { addSeletedItem } from '../utils/gptSlice'

const GptmoviesList = ({ movies }) => {
    const { title, poster_path } = movies

    const dispatch = useDispatch()

    const handleSeletedItem = () => {
        dispatch(addSeletedItem(movies))
    }
    if (!movies) return
    // console.log(posterpath);


    return (
      <>
            <div className="w-full my-2" onClick={handleSeletedItem}>
                <img
                    className="rounded-lg w-full h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                    src={IMG_CDN_URL + poster_path}
                    alt={title}
                />
            </div>
        </>

  )
}


export default GptmoviesList

