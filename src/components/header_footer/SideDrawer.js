import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';


const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        console.log(element);
        scroller.scrollTo(element, {
            duration: 1000,
            delay: 100,
            smooth: true,
            // offset: -150
        });
    }

    return (
        <Drawer
        anchor='right'
        open={props.open}
        onClose={() => props.onClose(false)}
        >
            <List component='nav'>
                <ListItem button onClick={() => scrollToElement('header')}>
                    Evnet Start
                </ListItem>

                <ListItem button onClick={() => scrollToElement('venueNfo')}>
                    Venue inFo
                </ListItem>

                <ListItem button onClick={() => scrollToElement('highlights')}>
                    Highlight
                </ListItem>

                <ListItem button onClick={() => scrollToElement('pricing')}>
                    pricing
                </ListItem>

                <ListItem button onClick={() => scrollToElement('location')}>
                    location
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideDrawer;