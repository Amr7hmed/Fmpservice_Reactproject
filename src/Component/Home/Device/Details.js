import React, { Component } from 'react';

export class Detailsmaindata extends Component {
    constructor(props) {
        super(props);
        this.state = {
        open: false
        }
    }
  
  render() {
const itemdevice=this.props.itemdevice;
    return (
        <>
            <div className="panel panel-default">
            <div className="panel-heading" onClick={function(){this.setState({open:!this.state.open})}.bind(this)}>
                <h4 className="panel-title">
                    Main Data 
                </h4>
            </div>
            <div className={this.state.open? "panel-collapse panel-open": "panel-collapse panel-close"}>
                    <span>Device Type : {itemdevice.receiptnumber}</span>
                    <span>Device Type : {itemdevice.phone}</span>
                    <span>Device Type : {itemdevice.devicetype}</span>
                    <span>Device Model : {itemdevice.devicemodel}</span>
                    <span>Device Serial : {itemdevice.deviceserial}</span>
            </div>
            </div>
      </>
    );
  }
}

/*======================DetailsProblem====================*/

export class DetailsProblem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        open: false
        }
    }
  
  render() {
const itemdevice=this.props.itemdevice;
    return (
            <div className="panel panel-default">
            <div className="panel-heading" onClick={function(){this.setState({open:!this.state.open})}.bind(this)}>
                <h4 className="panel-title">
                    The Problem
                </h4>
            </div>
            <div className={this.state.open? "panel-collapse panel-open": "panel-collapse panel-close"}>
                    <span>Device Serial : {itemdevice.deviceproblem}</span>
                    <span>Examination Comment : {itemdevice.Examinationcomment}</span>
            </div>
            </div>
    );
  }
}

/*======================Details reform ====================*/

export class DetailsReform extends Component {
    constructor(props) {
        super(props);
        this.state = {
        open: false
        }
    }
  
  render() {
const itemdevice=this.props.itemdevice;
    return (
            <div className="panel panel-default">
            <div className="panel-heading" onClick={function(){this.setState({open:!this.state.open})}.bind(this)}>
                <h4 className="panel-title">
                    Reform Stage
                </h4>
            </div>
            <div className={this.state.open? "panel-collapse panel-open": "panel-collapse panel-close"}> 
                    <span>Reform Comment : {itemdevice.Reformcomment}</span>
            </div>
            </div>
    );
  }
}

/*======================Details finalexaminationstage ====================*/

export class DetailsFinalexamin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        open: false
        }
    }
  
  render() {
const itemdevice=this.props.itemdevice;
    return (
            <div className="panel panel-default">
            <div className="panel-heading" onClick={function(){this.setState({open:!this.state.open})}.bind(this)}>
                <h4 className="panel-title">
                        Final Examination Stage
                </h4>
            </div>
            <div className={this.state.open? "panel-collapse panel-open": "panel-collapse panel-close"}> 
                    <span>Final Examination Comment : {itemdevice.Finalexaminationcomment}</span>
            </div>
            </div>
    );
  }
}

/*======================Details repaired ====================*/

export class DetailsRepaired extends Component {
    constructor(props) {
        super(props);
        this.state = {
        open: false
        }
    }
  
  render() {
const itemdevice=this.props.itemdevice;
    return (
            <div className="panel panel-default">
            <div className="panel-heading" onClick={function(){this.setState({open:!this.state.open})}.bind(this)}>
                <h4 className="panel-title">
                    Repaired Stage
                </h4>
            </div>
            <div className={this.state.open? "panel-collapse panel-open": "panel-collapse panel-close"}> 
                    <span>Repaired Comment : {itemdevice.Repairreport}</span>
            </div>
            </div>
    );
  }
}

