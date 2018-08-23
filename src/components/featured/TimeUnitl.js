import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';

export default class TimeUnitl extends Component {

    state = {
        deadline: 'Sep, 8, 2018',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0) {
            console.log('Event already Passed');
        } else {
            const seconds = Math.floor((time / 1000) % 60)
            const minutes = Math.floor((time / 1000 / 60) % 60)
            // console.log(minutes)
            const hours = Math.floor((time/(1000*60*60) % 24));
            const days = Math.floor((time/(1000*60*60*24)));

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
        
    }

    componentDidMount() {
        setInterval(() =>{this.getTimeUntil(this.state.deadline)} , 1000)
    }

    render() {
        const {days, hours, minutes, seconds} = this.state
        return (
            <Slide left delay={1000}>
                <div className='countdown_wrapper'>
                <div className='countdown_top'>
                    Event-start in
                </div>
                <div className='countdown_bottom'>
                    <div className='countdown_item'>
                        <div className='countdown_time'>{days}</div>
                        <div className='countdown_tags'>Days</div>
                    </div>
                    <div className='countdown_item'>
                        <div className='countdown_time'>{hours}</div>
                        <div className='countdown_tags'>Hours</div>
                    </div>
                    <div className='countdown_item'>
                        <div className='countdown_time'>{minutes}</div>
                        <div className='countdown_tags'>Mins</div>
                    </div>
                    <div className='countdown_item'>
                        <div className='countdown_time'>{seconds}</div>
                        <div className='countdown_tags'>Sec</div>
                    </div>
                </div>
                </div>
            </Slide>
            
        )
    }
}
