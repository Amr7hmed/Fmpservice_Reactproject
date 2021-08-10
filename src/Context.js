import React, { useState ,useEffect} from 'react';
import Apiitem from './Component/Home/Api/Apiitem';

export const Authcontext=React.createContext();

export function Contextprovider(props) {

    const [account,setAccount]= useState({});
    const [device,setDevice]=useState("");
    const [datadevice,setDatadevice]= useState({});
//=================================================//
//======================Deviceitem==================//
    const [examination,setExamination]=useState([{}]);
    const [finalexamination,setFinalexamination]=useState([{}]);
    const [reform,setReform]=useState([{}]);
    const [repairreport,setRepairreport]=useState([{}]);

   

    useEffect(()=>{
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        if(username&&password){
            setAccount({
                username,
                password
            })
        }
    },[]);

//================================================
//====================Add Api Examination to state
useEffect(() => {
    Apiitem.getExamination()
        .then(data => {
            setExamination(
                data
            )
        });
}, []);
//================================================
//====================Add Api Reform to state
useEffect(() => {
    Apiitem.getReform()
        .then(data => {
            setReform(
                data
            )
        });
}, []);

//================================================
//====================Add Api Finalexamination to state
useEffect(() => {
    Apiitem.getFinalexamination()
        .then(data => {
            setFinalexamination(
                data
            )
        });
}, []);
//================================================
//====================Add Api Repairreport to state
useEffect(() => {
    Apiitem.getRepairreport()
        .then(data => {
            setRepairreport(
                data
            )
        });
}, []);

//================Totel deviceitem
const deviceitem = [...examination,...reform,...finalexamination,...repairreport];

    const value={
        account:account,
        setAccount:setAccount,
        device:device,
        setDevice:setDevice,
        datadevice:datadevice,
        setDatadevice:setDatadevice,
    //===============================//
    //======================Deviceitem
        examination:examination,
        setExamination:setExamination,
        finalexamination:finalexamination,
        setFinalexamination:setFinalexamination,
        reform:reform,
        setReform:setReform,
        repairreport:repairreport,
        setRepairreport:setRepairreport,
        deviceitem:deviceitem,
    }
    return (
        
        <Authcontext.Provider value={value}>
           {props.children}
        </Authcontext.Provider>
    )
}
