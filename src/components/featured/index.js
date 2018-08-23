import React from 'react';
import Carousel from './Carousel';
import TimeUntil from './TimeUnitl';


const Featured = (props) => {
  return (
  	<div style={{position: 'relative'}}>

			<Carousel />

			<div className='artist_name'>
				<div className='wrapper'>
					Spectrum 2018
				</div>
			</div>
			<TimeUntil />
    </div>
  )
}

export default Featured;