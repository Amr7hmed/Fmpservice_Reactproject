import React, { useContext, useEffect } from 'react';
import { Authcontext } from '../../../Context';
import LineMenu from './LineMenu';
import './Devices.css';
import { DeviceExamination,DeviceReform ,DeviceFinale,DeviceRepaired} from './Deviceitem';

//=========================================
//================================Examination
export function Examination() {
    const authcontext = useContext(Authcontext);
    const examination = authcontext.examination;
    return (<section className="container">
             {examination.map((item,index)=>
                 <DeviceExamination key={index} item={item}/>
            )}
        </section>
    )
}
//=========================================
//================================Reform
export function Reform() {
    const authcontext = useContext(Authcontext);
    const reform = authcontext.reform;

    return (<section className="container">
             {reform.map((item,index)=>
                 <DeviceReform key={index} item={item}/>
            )}
        </section>
    )
}
//===============================================
//================================Finalexamination
export function Finalexamination() {
    const authcontext = useContext(Authcontext);
    const finalexamination = authcontext.finalexamination;

    return (<section className="container">
             {finalexamination.map((item,index)=>
                 <DeviceFinale key={index} item={item}/>
            )}
        </section>
    )
}
//===============================================
//================================ Repair Report
export function Repaired() {
    const authcontext = useContext(Authcontext);
    const repairreport = authcontext.repairreport;

    return (<section className="container">
             {repairreport.map((item,index)=>
                 <DeviceRepaired key={index} item={item}/>
            )}
        </section>
    )
}