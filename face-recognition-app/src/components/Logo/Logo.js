import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt9 pa2'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 50 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{ paddingTop: '6px' }} src={brain} alt='brain-circuit' width='110' />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;