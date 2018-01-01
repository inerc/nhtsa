import React from 'react';
import {connect} from 'react-redux';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <header className="navbar">
                <div className="navbar_logo">
                    <a href="https://www.nhtsa.gov" target="_blank">
                        <img alt="National Highway Traffic Safety Administration" src="https://www.nhtsa.gov/sites/nhtsa.dot.gov/themes/nhtsa_gov/images/logo-NHTSA-white.svg"/>
                    </a>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(Header)