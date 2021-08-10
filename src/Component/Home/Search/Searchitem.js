import React, { useContext,useState } from 'react';
import { Authcontext } from '../../../Context';
import {useParams} from 'react-router-dom';
import { DetailsFinalexamin, Detailsmaindata,DetailsProblem, DetailsReform, DetailsRepaired } from '../Device/Details';

export function Searchitem() {
    const {id}=useParams();
    const authcontext = useContext(Authcontext);
    const deviceitem = authcontext.deviceitem;
    const detailsreform=deviceitem.filter((item,index)=>{
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
