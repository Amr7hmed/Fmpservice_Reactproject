import React, { useContext,useState } from 'react';
import { Authcontext } from '../../../Context';
import {useParams} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {DetailsFinalexamin, Detailsmaindata,DetailsProblem, DetailsReform, DetailsRepaired} from './Details';

//========================================
//============Device Examination
export function DeviceExamination(props) {
    const item = props.item;
    const [communt,setcommunt]=useState("");
    function Communt(e){
        e.preventDefault();
        console.log(communt)
       
    }

    return (<div className="card border-light mb-3 itemcard">
                <NavLink to={`/examinationstage/${item.id}`}>
                    <div className="card-header">
                        <span>Receipt Number : {item.receiptnumber}</span>
                        </div>
                </NavLink>
            <div className="card-body">
                <div className="card-text row">
                    <div className="col-lg-6 col-md-12">
                        <span className="deviceitem">Device Type : {item.devicetype}</span>
                        <span className="deviceitem">Device Model : {item.devicemodel}</span>
                        <span className="deviceitem">Device Serial : {item.deviceserial}</span>
                    </div>
                    <div className="col-lg-6 col-md-12">
                    <span className="deviceitem">Device Problem : {item.deviceproblem}</span>
                    <div className="form-floating mt-2 mb-1">
                        <input type="email" className="form-control" id="floatingInput"
                         placeholder="Examination Comment" 
                         onChange={e=> setcommunt(e.target.value)}/>
                        <label>Examination Comment</label>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                            <button className="btn btn-primary" type="button" onClick={Communt}>
                                Button
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
   )
}
//============Examination item
export function Examinationitem() {
    const {id}=useParams();
    const authcontext = useContext(Authcontext);
    const examination = authcontext.examination;
    const details=examination.filter((item,index)=>{
        return  item.id===parseInt(id)
        
    })
      
    return (<section className="container">
        <div className="details">
            <div className="panel-group">
                {details.map(itemdevice=>
                <div key={itemdevice.id}>
                            <Detailsmaindata itemdevice={itemdevice}/>
                            <DetailsProblem itemdevice={itemdevice} />
                            <DetailsReform  itemdevice={itemdevice}/>
                            <DetailsFinalexamin itemdevice={itemdevice}/>
                            <DetailsRepaired itemdevice={itemdevice}/> 
                    </div>
                )} 
            </div>
        </div>
                
</section>)}

//========================================
//============Device Reform
export function DeviceReform(props) {
    const item = props.item;
    const [communt,setcommunt]=useState("");
    function Communt(e){
        e.preventDefault();
        console.log(communt)
    }
    return (<div className="card border-light mb-3 itemcard">
                <NavLink to={`/reformstage/${item.id}`}>
                    <div className="card-header">
                        <span>Receipt Number : {item.receiptnumber}</span>
                    </div>
                </NavLink>
            <div className="card-body">
                <div className="card-text row">
                    <div className="col-lg-6 col-md-12">
                        <span className="deviceitem">Device Type : {item.devicetype}</span>
                        <span className="deviceitem">Device Model : {item.devicemodel}</span>
                        <span className="deviceitem">Device Serial : {item.deviceserial}</span>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <span className="deviceitem">Device Problem : {item.deviceproblem}</span>
                        <div className="form-floating mt-2 mb-1">
                        <input type="email" className="form-control" id="floatingInput"
                         placeholder="Reform Comment" 
                         onChange={e=> setcommunt(e.target.value)}/>
                        <label>Reform Comment</label>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                            <button className="btn btn-primary" type="button" onClick={Communt}>
                                Button
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
   )
}
//============Reform item
export function Reformitem() {
    const {id}=useParams();
    const authcontext = useContext(Authcontext);
    const reform = authcontext.reform;
    const detailsreform=reform.filter((item,index)=>{
        return  item.id===parseInt(id)
        
    })
      
    return (<section className="container">
        <div className="details">
            <div className="panel-group">
                {detailsreform.map(itemdevice=>
                <div key={itemdevice.id}>
                            <Detailsmaindata itemdevice={itemdevice}/>
                            <DetailsProblem itemdevice={itemdevice} />
                            <DetailsReform  itemdevice={itemdevice}/>
                            <DetailsFinalexamin itemdevice={itemdevice}/>
                            <DetailsRepaired itemdevice={itemdevice}/> 
                    </div>
                )} 
            </div>
        </div>
                
</section>)}
//========================================
//============Device Finale
export function DeviceFinale(props) {
    const item = props.item;
    const [communt,setcommunt]=useState("");
    function Communt(e){
        e.preventDefault();
        console.log(communt)
    }
    return (<div className="card border-light mb-3 itemcard">
                <NavLink to={`/finalexaminationstage/${item.id}`}>
                    <div className="card-header">
                        <span>Receipt Number : {item.receiptnumber}</span>
                    </div>
                </NavLink>
            <div className="card-body">
                <div className="card-text row">
                    <div className="col-lg-6 col-md-12">
                        <span className="deviceitem">Device Type : {item.devicetype}</span>
                        <span className="deviceitem">Device Model : {item.devicemodel}</span>
                        <span className="deviceitem">Device Serial : {item.deviceserial}</span>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <span className="deviceitem">Device Problem : {item.deviceproblem}</span>
                            <div className="form-floating mt-2 mb-1">
                                <input type="email" className="form-control" id="floatingInput"
                                    placeholder="Final Examination Comment" 
                                    onChange={e=> setcommunt(e.target.value)}/>
                                <label>Final Examination Comment</label>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                                    <button className="btn btn-primary" type="button" onClick={Communt}>
                                        Button
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            </div>
   )
}
//============Finale item
export function Finaleitem() {
    const {id}=useParams();
    const authcontext = useContext(Authcontext);
    const finalexamination = authcontext.finalexamination;
    const detailsfinale=finalexamination.filter((item,index)=>{
        return  item.id===parseInt(id)
        
    })
      
    return (<section className="container">
        <div className="details">
            <div className="panel-group">
                {detailsfinale.map(itemdevice=>
                <div key={itemdevice.id}>
                            <Detailsmaindata itemdevice={itemdevice}/>
                            <DetailsProblem itemdevice={itemdevice} />
                            <DetailsReform  itemdevice={itemdevice}/>
                            <DetailsFinalexamin itemdevice={itemdevice}/>
                            <DetailsRepaired itemdevice={itemdevice}/> 
                    </div>
                )} 
            </div>
        </div>
                
</section>)}
//========================================
//============Device Repaired
export function DeviceRepaired(props) {
    const item = props.item;
    const [communt,setcommunt]=useState("");
    function Communt(e){
        e.preventDefault();
        console.log(communt)
    }
    return (<div className="card border-light mb-3 itemcard">
                <NavLink to={`/repaired/${item.id}`}>
                    <div className="card-header">
                        <span>Receipt Number : {item.receiptnumber}</span>
                    </div>
                </NavLink>
            <div className="card-body">
                <div className="card-text row">
                    <div className="col-lg-6 col-md-12">
                        <span className="deviceitem">Device Type : {item.devicetype}</span>
                        <span className="deviceitem">Device Model : {item.devicemodel}</span>
                        <span className="deviceitem">Device Serial : {item.deviceserial}</span>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <span className="deviceitem">Device Problem : {item.deviceproblem}</span>
                        <div className="form-floating mt-2 mb-1">
                                <input type="email" className="form-control" id="floatingInput"
                                    placeholder="Receipt Comment" 
                                    onChange={e=> setcommunt(e.target.value)}/>
                                <label>Receipt Comment</label>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                                    <button className="btn btn-primary" type="button" onClick={Communt}>
                                        Button
                                    </button>
                                </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
   )
}
//============Repaired item
export function Repaireditem() {
    const {id}=useParams();
    const authcontext = useContext(Authcontext);
    const repairreport = authcontext.repairreport;
    const detailsrepair=repairreport.filter((item,index)=>{
        return  item.id===parseInt(id)
        
    })
      
    return (<section className="container">
        <div className="details">
            <div className="panel-group">
                {detailsrepair.map(itemdevice=>
                <div key={itemdevice.id}>
                            <Detailsmaindata itemdevice={itemdevice}/>
                            <DetailsProblem itemdevice={itemdevice} />
                            <DetailsReform  itemdevice={itemdevice}/>
                            <DetailsFinalexamin itemdevice={itemdevice}/>
                            <DetailsRepaired itemdevice={itemdevice}/>
                    </div>
                )} 
            </div>
        </div>
                
</section>)}
