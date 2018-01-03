import React from 'react';
import {connect} from 'react-redux';
import './Loader.css';

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div id="page-preload">
                    <div className="background-loaders">
                        <div className="loader-default"></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(Loader)