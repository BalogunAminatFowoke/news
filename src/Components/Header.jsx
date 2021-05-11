import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date().toLocaleString(),
        }
    }


    render() {
        return (
            <>
                <div className="pa2 bg-red  fc-white tc" style={{ color: 'white' }}>
                    <h2>Today's News</h2>
                    <p>{this.state.date}</p>

                    <div>
                        <ul className="list" style={{ color: 'white' }}>

                            <li className="dib mr2 white">
                                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                                    World
                                </Link>
                            </li>

                            <li className="dib mr2" >
                                <Link to='/technology' style={{ textDecoration: 'none', color: 'white' }}>
                                    Technology
                                </Link>
                            </li>

                            <li className="dib mr2">
                                <Link to='/business' style={{ textDecoration: 'none', color: 'white' }}>
                                    Business
                                </Link>
                            </li>

                            <li className="dib mr2">
                                <Link to='/entertainment' style={{ textDecoration: 'none', color: 'white' }}>
                                    Entertainment
                                </Link>
                            </li>

                            <li className="dib mr2">
                                <Link to='/health' style={{ textDecoration: 'none', color: 'white' }}>
                                    Health
                                </Link>
                            </li>

                            <li className="dib mr2">
                                <Link to='/science' style={{ textDecoration: 'none', color: 'white' }}>
                                    Science
                                </Link>
                            </li>

                            <li className="dib mr2">
                                <Link to='/sports' style={{ textDecoration: 'none', color: 'white' }}>
                                    Sports
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </>
        )
    }
}

export default Header;