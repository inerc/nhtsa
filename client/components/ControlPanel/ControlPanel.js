import React from 'react';
import {connect} from 'react-redux';
import './ControlPanel.css';
import {validateInputDecoder} from '../Validator/decoder';
import {getDecoderRequest} from '../../actions/getDecoder';
import classnames from 'classnames';

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            vin: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handlerSubmit() {
        let validation = validateInputDecoder(this.state);

        if (validation.isValid) {
            this.props.getDecoderRequest(this.state);

        } else {
            this.setState({
                errors: validation.errors
            })
        }
    }

    getResume(props) {
        if (props.SearchCriteria) {
            return (
                <div className="row">
                    <div className="col-25">
                        {props.Message}
                    </div>
                    <div className="col-75">
                        <label>{props.SearchCriteria}</label>
                    </div>
                </div>
            )
        }
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
                                <input type="text" name="vin" placeholder="Enter 17 character VIN"
                                       onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Model year</label>
                            </div>
                            <div className="col-75">
                                <input type="number" name="modelyear" placeholder="Enter model year. Example: '2011'"
                                       onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Network status</label>
                            </div>
                            <div className="col-75">
                            <div className={classnames('online', {
                                'green': this.props.network.isOnline == true,
                                'red': this.props.network.isOnline == false
                            })}></div>
                            <input type="submit" value={this.state.vin.length == 17 ? "Submit" : "Deactivate"}
                                   disabled={this.state.vin.length == 17 ? false : "disabled"}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                            </div>
                            <div className="col-75">
                                <label>* Required fields</label>
                            </div>
                        </div>
                        {this.getResume(this.props.decoder)}
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        decoder: state.decoder,
        network: state.network
    };
};

export default connect(mapStateToProps, {getDecoderRequest})(ControlPanel)