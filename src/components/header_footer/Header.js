import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import SideDrawer from './SideDrawer'

export default class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {
			drawerOpen: false,
			headerShow: false
		}
		this.toggleDrawer = this.toggleDrawer.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}

	toggleDrawer(value) {
		this.setState({
			drawerOpen: value
		})
	}

	handleScroll(e) {
		// console.log('scrolling')
		if(window.scrollY > 0) {
			this.setState({ headerShow: true })
		}else {
			this.setState( { headerShow: false })
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	render() {
  	return (
    	<AppBar
			position='fixed'
			style={{
				backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
				boxShadow: 'none',
				padding: '10px 0px'
			}}
			>
				<ToolBar>
					<div className='header_logo'>
						<div className='font_righteous header_logo_venue'>The Venue</div>
						<div className='header_logo_title'>Music Event</div>
					</div>
					<IconButton
					aria-label='Menu'
					color='inherit'
					onClick={() => this.toggleDrawer(true)}
					>
						<MenuIcon  />
					</IconButton>
					<SideDrawer
						open={this.state.drawerOpen}
						onClose={(value) => this.toggleDrawer(value) }
					/>

				</ToolBar>
			</AppBar>
    )
  }
}
