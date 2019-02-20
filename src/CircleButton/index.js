import React from 'react'
import PropTypes from 'prop-types'
import './circleButton.css'

const CircleButton = ({ onClick, isClicked }) => {
    const innerCircleClass = isClicked ? 'webcam-photo-inner-circle is-clicked' : 'webcam-photo-inner-circle'
    return(
        <div id='webcam-photo-container-circles'>
            <div className='webcam-photo-outter-circle'>
                <div className={innerCircleClass}></div>
            </div>

        </div>
    )
}


CircleButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    isClicked: PropTypes.bool.isRequired
}

export default CircleButton