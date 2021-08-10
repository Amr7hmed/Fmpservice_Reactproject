import React from 'react';
import { ErrorMessage,useField } from 'formik';

export const Textfiled = ({label,...props}) => {
    const [field,meta]=useField(props);
    return (
        <div className="mb-2 col-lg-6 col-sm-12">
            <label htmlFor={field.name}>{label}</label>
            <br/>
           <input 
            className={`form-control shadow-none mt-2 
            ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props}

            autoComplete="off"/>
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}
/*==========================================================*/
/*=================Select Box Device Type===================*/
export const Selectbox = ({label,...props}) => {
    const [field,meta]=useField(props);
    return (
        <div className="mb-2">
            <label htmlFor={field.name} className="input-group-text">{label}</label>
            <select className={`form-select ${meta.touched && meta.error && 'is-invalid'}`}
             id="inputGroupSelect01"
             {...field} {...props}
             autoComplete="off">
                <option selected>Choose...</option>
                <option value="Mobile">Mobile</option>
                <option value="Laptop">Laptop</option>
                <option value="Tablet">Tablet</option>
            </select>
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}
/*============================================================*/
/*=================Select Box Mobile Type===================*/
export const Selectboxmobile = ({label,...props}) => {
    const [field,meta]=useField(props);
    return (
        <div className="mb-2 col-lg-6 col-sm-12">
            <label htmlFor={field.name}>{label}</label>
            <select className={`form-select ${meta.touched && meta.error && 'is-invalid'}`}
             id="inputGroupSelect01"
             {...field} {...props}
             autoComplete="off">
                <option selected>Choose...</option>
                <option value="samsung">Samsung</option>
                <option value="huawei">Huawei</option>
                <option value="infinix">Infinix</option>
                <option value="oppo">Oppo</option>
            </select>
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}
/*============================================================*/
/*=================Select Box Tablet Type===================*/
export const Selectboxtablet = ({label,...props}) => {
    const [field,meta]=useField(props);
    return (
        <div className="mb-2 col-lg-6 col-sm-12">
            <label htmlFor={field.name}>{label}</label>
            <select className={`form-select ${meta.touched && meta.error && 'is-invalid'}`}
             id="inputGroupSelect01"
             {...field} {...props}
             autoComplete="off">
                <option selected>Choose...</option>
                <option value="samsung">Samsung</option>
                <option value="huawei">Huawei</option>
                <option value="lenovo">Lenovo</option>
            </select>
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}

/*============================================================*/
/*=================Select box Laptop Type===================*/
export const Selectboxlaptop = ({label,...props}) => {
    const [field,meta]=useField(props);
    return (
        <div className="mb-2 col-lg-6 col-sm-12">
            <label htmlFor={field.name}>{label}</label>
            <select className={`form-select ${meta.touched && meta.error && 'is-invalid'}`}
             id="inputGroupSelect01"
             {...field} {...props}
             autoComplete="off">
                <option selected>Choose...</option>
                <option value="acer">Acer</option>
                <option value="dell">Dell</option>
                <option value="asus">Asus</option>
                <option value="hp">Hp</option>
                <option value="lenovo">Lenovo</option>
            </select>
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}
/*============================================================*/
/*=================Select box Warranty Status ===================*/
export const Selectboxwarrantystatus = ({label,...props}) => {
    const [field,meta]=useField(props);
    return (
        <div className="mb-2 col-lg-6 col-sm-12">
            <label htmlFor={field.name}>{label}</label>
            <select className={`form-select ${meta.touched && meta.error && 'is-invalid'}`}
             id="inputGroupSelect01"
             {...field} {...props}
             autoComplete="off">
                <option selected>Choose...</option>
                <option value="insidewarranty">Inside Warranty</option>
                <option value="outofwarranty">Out Of Warranty </option>
            </select>
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}