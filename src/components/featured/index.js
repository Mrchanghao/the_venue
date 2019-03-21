import React from 'react';
import Carousel from './Carousel';
import TimeUntil from './TimeUnitl';


const Featured = (props) => {
  return (
  	<div style={{position: 'relative'}}>

			<Carousel />

			<div className='artist_name'>
				<div className='wrapper'>
					<p className='wrapper__p'>WORLD DJ FESTIVAL 2019</p>
				</div>
			</div>
			<TimeUntil />
    </div>
  )
}

export default Featured;