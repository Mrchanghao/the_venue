import React from 'react'
import Zoom from 'react-reveal/Zoom'
import icon_calendar from '../../resources/images/icons/calendar.png'
import icon_location from '../../resources/images/icons/location.png'

const VenueNfo = () => {
    return (
        <div className='bck_black'>
            <div className='center_wrapper'>
                <div className='vn_wrapper'>

                    <Zoom duration={500}>
                    <div className='vn_item'>
                        <div className='vn_outer'>
                            <div className='vn_inner'>
                                <div className='vn_icon_square bck_red'></div>
                                <div 
                                style={{
                                    background:`url(${icon_calendar})`
                                }}
                                className='vn_icon'>
                                </div>
                                <div className='vn_title'>Event& time</div>
                                <div className='vn_desc'>8 September @8:00 pm</div>
                            </div>
                        </div>
                    </div>

                    </Zoom>
                    
                    <Zoom duration={500} delay={500}>
                    <div className='vn_item'>
                        <div className='vn_outer'>
                            <div className='vn_inner'>
                                <div className='vn_icon_square bck_yellow'></div>
                                <div 
                                style={{
                                    background:`url(${icon_location})`
                                }}
                                className='vn_icon'>
                                </div>
                                <div className='vn_title'>Event location</div>
                                <div className='vn_desc'>잠실 종합 운동장</div>
                            </div>
                        </div>
                    </div>
                    </Zoom>

                    
        
                </div>
            </div>
        </div>
    )
};

export default VenueNfo;