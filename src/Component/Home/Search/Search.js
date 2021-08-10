import React, { useContext ,useState} from 'react';
import { Authcontext } from '../../../Context';
import './Search.css';
import Searchdoc from './Searchdoc';

/*===================================================================*/
/*======================Search Receipt===================*/
export function Searchreceipt() {
    const [searchTerm,setSearchTerm]=useState("");
    const authcontext = useContext(Authcontext);
    const deviceitem = authcontext.deviceitem;

        return (<div className="container">
        <section className="searchheader">
            <div className="search">
                    <div className="searchhead mt-4">
                        <div className="row g-3">
                            <div className="col-lg-9 col-md-12">
                                <input type="text" className="form-control"
                                placeholder="Receipt Number"
                                onChange={(event)=>{setSearchTerm(event.target.value)}}/>
                            </div>
                            <div className="col-lg-3 col-md-12 button">
                            <button type="button" className="btn btn-secondary">Search</button>
                            </div>
                        </div>
                   </div>
                   
                    <section className="container">
                        <div className="row mt-4">
                            {deviceitem.filter((item)=>{
                                if(searchTerm==""){
                                    return item
                                }else if(item.receiptnumber.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return item
                                }
                            }).map((item,index)=>
                                <Searchdoc key={index}
                                 receiptnumber={item.receiptnumber} 
                                 deviceserial={item.deviceserial}
                                 phone={item.phone}
                                 item={item}/>
                            )}
                        </div>
                    </section>
            </div>
        </section>
    </div>)
}
/*===================================================================*/
/*======================Search  Device===================*/
export function Searchdevice() {
    const [searchTerm,setSearchTerm]=useState("");
    const authcontext = useContext(Authcontext);
    const deviceitem = authcontext.deviceitem;

        return (<div className="container">
        <section className="searchheader">
            <div className="search">
                    <div className="searchhead mt-4">
                        <div className="row g-3">
                            <div className="col-lg-9 col-md-12">
                                <input type="text" className="form-control"
                                placeholder="Device Serial"
                                onChange={(event)=>{setSearchTerm(event.target.value)}}/>
                            </div>
                            <div className="col-lg-3 col-md-12 button">
                            <button type="button" className="btn btn-secondary">Search</button>
                            </div>
                        </div>
                   </div>

                    <section className="container">
                        <div className="row mt-4">
                            {deviceitem.filter((item)=>{
                                if(searchTerm==""){
                                    return item
                                }else if(item.deviceserial.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return item
                                }
                            }).map((item,index)=>
                                <Searchdoc key={index}
                                 receiptnumber={item.receiptnumber} 
                                 deviceserial={item.deviceserial}
                                 phone={item.phone}
                                 item={item}/>
                            )}
                        </div>
                    </section>
            </div>
        </section>
    </div>)
}
/*===================================================================*/
/*======================Search Number===================*/

export function Searchnumber() {
    const [searchTerm,setSearchTerm]=useState("");
    const authcontext = useContext(Authcontext);
    const deviceitem = authcontext.deviceitem;

        return (<div className="container">
        <section className="searchheader">
            <div className="search">
                   <div className="searchhead mt-4">
                        <div className="row g-3">
                                <div className="col-lg-9 col-md-12">
                                    <input type="text" className="form-control"
                                    placeholder="Number Phone"
                                    onChange={(event)=>{setSearchTerm(event.target.value)}}/>
                                </div>
                                <div className="col-lg-3 col-md-12 button">
                                <button type="button" className="btn btn-secondary">Search</button>
                                </div>
                            </div>
                   </div>
                    <section className="container">
                        <div className="row mt-4">
                            {deviceitem.filter((item)=>{
                                if(searchTerm==""){
                                    return item
                                }else if(item.phone.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return item
                                }
                            }).map((item,index)=>
                                <Searchdoc key={index}
                                 receiptnumber={item.receiptnumber} 
                                 deviceserial={item.deviceserial}
                                 phone={item.phone}
                                 item={item}/>
                            )}
                        </div>
                    </section>
            </div>
        </section>
    </div>)
}