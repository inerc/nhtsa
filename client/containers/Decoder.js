import React, {Component} from 'react';
import Header from '../components/Header/Header';
import ControlPanel from '../components/ControlPanel/ControlPanel';
import Table from '../components/Table/Table';

class Decoder extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ControlPanel/>
                <Table/>
            </div>
        );
    }
}

export default Decoder;