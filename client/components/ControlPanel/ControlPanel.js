import React from 'react';
import {connect} from 'react-redux';
import './ControlPanel.css';
import {validateInputDecoder} from '../Validator/decoder';
import { FormGroup, ControlLabel, FormControl, HelpBlock  } from 'react-bootstrap';

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlerSubmit(){

        let validation = validateInputDecoder(this.state);

        debugger;
    }


    render() {
        return (
             <div className="control">
                 <div className="container">
                     <form onSubmit={(event) => {
                         event.preventDefault();
                         this.handlerSubmit(event)
                     }}>
                         <div className="row">
                             <div className="col-25">
                                 <label>VIN code *</label>
                             </div>
                             <div className="col-75">
                                 <input type="text" name="vin" placeholder="Enter 17 character VIN" onChange={this.handleChange}/>
                             </div>
                         </div>
                         <div className="row">
                             <div className="col-25">
                                 <label>Model year</label>
                             </div>
                             <div className="col-75">
                                 <input type="number" name="modelyear" placeholder="Enter model year. Example: '2011'" onChange={this.handleChange} />
                             </div>
                         </div>
                         <div className="row">
                             <input type="submit" value="Submit"/>
                         </div>
                         <div className="row">
                             <div className="col-25">
                             </div>
                             <div className="col-75">
                                 <label>* Required fields</label>
                             </div>
                         </div>
                     </form>
                 </div>
             </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(ControlPanel)