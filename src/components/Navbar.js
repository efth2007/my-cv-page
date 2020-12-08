import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render(){
        return(
            <>
            <nav className='light-blue darken-4'>
                <div className='container'>
                    <div className='nav-wrapper'>
                        <Link to='/' className='brand-logo'>
                            CV
                        </Link>
                        <Link to='/' data-target='side-nav' className='sidenav-trigger'>
                            <i class='material-icons'>menu</i>
                        </Link>
                        <ul className='right hide-on-med-and-down'>
                            <li>
                                <Link to="/">
                                    <i className='fas fa-home'></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/skills">
                                    <i className='fas fa-copy'></i> Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="/experience">
                                    <i className='fas fa-id-badge'></i> Experience
                                </Link>
                            </li>
                            <li>
                                <Link to="/education">
                                    <i className='fas fa-graduation-cap'></i> Education
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects">
                                    <i className='fas fa-address-card'></i> Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul className='sidenav' id='side-nav'>
                            <li>
                                <Link to="/">
                                    <i className='fas fa-home'></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/skills">
                                    <i className='fas fa-copy'></i> Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="/experience">
                                    <i className='fas fa-id-badge'></i> Experience
                                </Link>
                            </li>
                            <li>
                                <Link to="/education">
                                    <i className='fas fa-graduation-cap'></i> Education
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects">
                                    <i className='fas fa-address-card'></i> Projects
                                </Link>
                            </li>
                        </ul>
            </>
        )
    }
}