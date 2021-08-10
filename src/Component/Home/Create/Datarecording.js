import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../../Context';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import { Selectboxlaptop, Selectboxmobile, Selectboxtablet, Textfiled ,Selectboxwarrantystatus} from './Textfiled';

export default function Datarecording() {
    const authcontext = useContext(Authcontext);
    const device = authcontext.device;
    const [ item,setItem]=useState("");
    useEffect(()=>{
        setItem(device)
    },[]);
    return (
        <div className="container">
            <div className="datarecording">
                    <fieldset disabled>
                        <legend> {item.devicetype}</legend>
                    </fieldset>
                    <Formdetails/>
            </div>
        </div>
    )
}
/*============================================================*/
/*===========================User form==========================*/
function Formdetails() {
    const authcontext = useContext(Authcontext);
    const device = authcontext.device;
    const datadevice = authcontext.datadevice;
    const setDatadevice = authcontext.setDatadevice;
    const validate=Yup.object({
        name:Yup.string()
        .required('Required'),
        phone:Yup.string()
        .required('Required'),
        phone2:Yup.string()
        .required('Required'),
        email:Yup.string()
        .required('Required'),
        devicemodel:Yup.string()
        .max(20,'Must be 15 characters or less')
        .required('Required'),
        deviceserial:Yup.string()
        .max(20,'Must be 15 characters or less')
        .required('Required'),
        deviceproblem:Yup.string()
        .required('Required'),
        devicetypeitem:Yup.string()
        .required('Required'),
        warrantystatus:Yup.string()
        .required('Required'),
    })

    return (<Formik 
        initialValues={{
            name:'',
            phone:'',
            phone2:'',
            email:'',
            devicemodel:'',
            deviceserial:'',
            deviceproblem:'',
            devicetypeitem:'',
            warrantystatus:''
        }}
        validationSchema={validate}
        
        onSubmit={values => {
            setDatadevice(values)
            console.log(datadevice)
        }}
        >
        {formik=>(<>
            <Form>
                <div className="formcontrol">
                    <div className="headeform">Customer Data</div>
                    <div className="row">
                        <Textfiled label="Name" name="name" type="text"
                        placeholder="Name"/>
                        <Textfiled label="Phone" name="phone" type="text"
                        placeholder="Phone"/>
                        <Textfiled label="Phone" name="phone2" type="text"
                        placeholder="Phone"/>
                        <Textfiled label="Email" name="email" type="email"
                        placeholder="Email"/>
                    </div>
               </div>
               <div className="formcontrol">
                    <div className="headeform">Device Data</div>
                    <div className="row">
                   {device.devicetype==="Mobile" ?
                        <Selectboxmobile label="Device Type" name="devicetypeitem"/>:
                    device.devicetype==="Laptop" ?
                        <Selectboxlaptop label="Device Type" name="devicetypeitem"/>:
                    device.devicetype==="Tablet" ?
                        <Selectboxtablet  label="Device Type" name="devicetypeitem"/>:
                        null}
                    <Selectboxwarrantystatus label="Warranty Status" name="warrantystatus"/>
                    <Textfiled label="Device Model" name="devicemodel" type="text"
                    placeholder="Device Model" />
                    <Textfiled label="Device Serial" name="deviceserial" type="text"
                    placeholder="Device Serial"/>
                    <Textfiled label="Device Problem" name="deviceproblem" type="text"
                    placeholder="Device Problem"/>
                    </div>
               </div>

               <button type="submit"
                      className="form-control btn btn-border btn-dark mt-4">
                        CREATE
                </button>
            </Form>
            </>
        )}
    </Formik>)
}

