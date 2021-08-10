import React, { useContext,useEffect } from 'react';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import { Selectbox } from './Textfiled';
import { Authcontext } from '../../../Context';
import {NavLink,Link} from 'react-router-dom';

export default function Create() {
    return (<div className="container">
            <section className="createheader">
                <div className="createheaderdoc">
                    <h3>Create A Maintenance Receipt</h3>
                    <Formdec/>
                </div>
            </section>
        </div>)
}
/*===============================================================*/
/*=========================Form====decription=====================*/

function Formdec() {
    const authcontext = useContext(Authcontext);
    const device = authcontext.device;
    const setDevice = authcontext.setDevice;

    useEffect(()=>{
        setDevice("")
    },[]);

    const validate=Yup.object({
        devicetype:Yup.string()
        .required('Must Be Selected Device Type !'),
    })
   
return (<Formik 
        initialValues={{
            devicetype :'',
        }}
        validationSchema={validate}
        onSubmit={values => {
            setDevice(values)
        }}
        >
        {formik=>(<>
            <Form>
                <Selectbox label="Device Type" name="devicetype"/>
                     <button type="submit"
                      className="btn btn-border btn-outline-secondary">
                          Create
                      </button>

                    {device===""?(
                        null
                    ):(<NavLink to="/datarecording" className="btn btn-success btn-border">
                        Registration Page 
                        </NavLink>)}
                  
            </Form>
            </>
        )}
    </Formik>)
}

