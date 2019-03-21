import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import MyButton from '../utils/MyButtons';

export default class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }


    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart +1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.percentage()
        }, 20);
    }

    render() {
        return (
        <div className='center_wrapper'>
            <div className='discount_wrapper'>
                <Fade onReveal={() => this.percentage()}>
                    <div className='discount_percentage'>
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
            <Slide right>
            <div className='discount_description'>
                <h3>Purchase ticket is Free at now</h3>
                <p> 
                    has been the industry's standa
                    rd dummy text ever since the 1500s, when a
                    n unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only 
                    five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with 
                    the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop 
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <MyButton text='Purchase tickets'
                bck='#ffa800'
                color='#ffffff'
                link='https://ticket.melon.com/performance/index.htm?prodId=203181'
                />
            </div>
            </Slide>

            
        
        </div>
      </div>
    )
  }
}
