import React, { Component } from 'react';
import '../../resources/styles.css'
import MyButton from '../utils/MyButtons';
import Zoom from 'react-reveal/Zoom';


class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        position: ['Balcony', 'Medium', 'Start'],
        desc: [
            'sssdagawouihow34yihnklsnvmxc,nvc,x',
            'sdgsdgdsgaakehgoiwehgasdsvdsasrhah',
            'cmxnkcjxnbiheoair sajgiarwhrl'
        ],
        linkTo: ['http://sales/balcony', 'https://sales/medium', 'https://sales/start'],
        delay: [800, 0, 500] 
    }

    showBoxes = () =>(
        this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state.delay[i]}  >
                <div className='pricing_item'>
                <div className='pricing_inner_wrapper'>
                    <div className='pricing_title'>
                        <span >${box}</span>
                        <span>{this.state.position[i]}</span>
                    </div>
                    <div className='pricing_description'>
                        {this.state.desc[i]}
                    </div>
                    <div className='pricing_button'>
                        <MyButton link={this.state.linkTo[i]} text='purchase the Ticket' bck='red' color='#fff' />
                    </div>
                </div>
                
                </div>

            </Zoom>
            
        ))
    )

    render() {
        return (
            <div className='bck_black'>
                <div className='pricing_section center_wrapper'>
                    <h2>Pricing</h2>
                    <div className='pricing_wrapper'>
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;