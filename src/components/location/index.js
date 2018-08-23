import React from 'react'

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe 
            title='스펙트럼 로케이션'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.7064726835497!2d127.0709183506258!3d37.51484057970856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca450879adccd%3A0xe970a92cdbc5ef71!2z7J6g7Iuk7KKF7ZWp7Jq064-Z7J6l!5e0!3m2!1sko!2skr!4v1535017119969" 
            width="100%" height="500px" frameBorder="0" style={{border:0}} 
            allowFullScreen>
            </iframe>
            <div className='location_tag'>
                <div>Location</div>
            </div>
        </div>
    )
};

export default Location;