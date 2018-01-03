import React from 'react';
import {connect} from 'react-redux';
import {AgGridReact, AgGridColumn} from "ag-grid-react";
import './Table.css';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: [
                {variable: "Toyota", value: "Celica"},
                {variable: "Ford", value: "Mondeo"},
                {variable: "Porsche", value: "Boxter"}
            ]
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }

    onDataCreate(props) {
        let res = [];
        if(props.Results) {
            for (let i in props.Results[0]){
                res.push({variable: i, value: props.Results[0][i]})
            }
        }
        return res

    }




    render() {

        let containerStyle = {
            height: 700
        };

        return (
            <div>
                <div style={containerStyle} className="ag-theme-fresh">
                    <AgGridReact
                        // properties
                        //rowData={this.state.rowData}
                        rowData={this.onDataCreate(this.props.decoder)}
                        // events
                        enableSorting={true}
                        enableFilter={true}
                        onGridReady={this.onGridReady}>

                        {/*column definitions */}
                        <AgGridColumn field="variable"></AgGridColumn>
                        <AgGridColumn field="value"></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        decoder: state.decoder
    };
};

export default connect(mapStateToProps, {})(Table)