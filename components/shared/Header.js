import React, { Component } from 'react'
import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        const { handleClick } = this.props

        const menu = [
            {
                title: 'home',
                url: '/'
            },
            {
                title: 'about',
                url: '/about'
            },
            {
                title: 'feedbacks',
                url: '/feedbacks'
            },
            {
                title: 'skills',
                url: '/skills'
            },
            {
                title: 'portfolio',
                url: '/portfolio'
            },
            {
                title: 'experience',
                url: '/experience'
            },
            {
                title: 'education',
                url: '/education'
            },
            {
                title: 'contact',
                url: '/contact'
            }
        ]

        return (
            <>
                <div className="header mb_hide">
                    <div className="header_right text-right light">
                        {menu.map((item, i) => (
                            <Link key={i} href={item.url}>
                                <a className="padding16 inline-block">{item.title}</a>
                            </Link>
                        ))}
                        <div className="padding16 inline">
                            <button className="toggle-mode" onClick={handleClick}>
                                <i className="fas fa-moon"></i>
                                <i className="fas fa-sun"></i>
                            </button>
                        </div>

                    </div>
                </div>

                <Navbar className="dt_hide tb_hide header-mb" collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home" className="font-lg x-bold">NATACHA ROMANO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <button className="toggle-mode" onClick={handleClick}>
                        <i className="fas fa-moon"></i>
                        <i className="fas fa-sun"></i>
                    </button>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto light">
                            {menu.map((item, i) => (
                                <Nav.Link key={i} href={item.url}>{item.title}</Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}