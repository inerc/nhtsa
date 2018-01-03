import React from 'react';
import './reset.css'
import {connect} from 'react-redux';
import Loader from '../components/Loader/Loader';
import {setNetworkStatus} from '../actions/setNetworkStatus';
class App extends React.Component {

    componentDidMount(){
        setInterval(()=>{
            this.props.setNetworkStatus(navigator.onLine);
        }, 500)
    }

    render() {

        // if (this.props.loader.isFetching) {
        //     return <Loader/>;
        // }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loader: state.loader
    }
};


export default connect(mapStateToProps, {setNetworkStatus})(App);
