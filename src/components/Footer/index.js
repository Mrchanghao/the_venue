import React from 'react'
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className='bck_red'>
            <Fade delay={600}>
                <div className='font_righteous footer_log_venue'>
                    The Venue
                </div>
                <div className='footer_copyright'>
                    The Venue 2019.all.right reserved
                </div>
            </Fade>
        </footer>
    )
}

export default Footer;