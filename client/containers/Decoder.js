import React, {Component} from 'react';
import Header from '../components/Header/Header';
import ControlPanel from '../components/ControlPanel/ControlPanel';

class Decoder extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ControlPanel/>
                {/*<Table/>*/}
            </div>
        );
    }
}

export default Decoder;