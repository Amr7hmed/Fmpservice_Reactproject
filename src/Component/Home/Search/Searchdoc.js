import React from 'react';
import {NavLink} from 'react-router-dom';

function Searchdoc(props) {
    const {receiptnumber,item,deviceserial,phone}=props;
    return (<NavLink to={`/search/${item.id}`}>
                <div className="col-lg-12 searchdoc row">
                       <div className="col-lg-4 col-md-12">{receiptnumber}</div>
                       <div className="col-lg-4 col-md-12">{deviceserial}</div>
                       <div className="col-lg-4 col-md-12">{phone}</div>
                </div>
                </NavLink>)}

export default Searchdoc;
/*

 */