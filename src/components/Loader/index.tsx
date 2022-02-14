import React from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/mainReducer'

const Loader = () => {
    const isLoading = useSelector((state: IRootState) => state.isLoading)
    return (
        <div>
            {isLoading &&
                <div className='z-index-99 main-bg width-100 height-100 fixed center-vertical center-horizontal'>
                    <p>Loading</p>
                </div>
            }
        </div>
    )
}

export default Loader
