import React, { useContext } from 'react';
import {Formik,Form} from 'formik';
import { Textfiled } from './Textfiled';
import * as Yup from 'yup';
import { Authcontext } from '../../../Context';

function Detilesshipping() {

    const authcontext = useContext(Authcontext);
    const classbutton = authcontext.classbutton;

    const validate=Yup.object({
        firstName:Yup.string()
        .max(20,'Must be 15 characters or less')
        .required('Required'),
        lastName:Yup.string()
        .max(20,'Must be 15 characters or less')
        .required('Required'),
        address:Yup.string()
        .required('Required'),
        city:Yup.string()
        .required('Required'),
        phone:Yup.string()
        .required('Required'),
    })
    return (<Formik 
        initialValues={{
            firstName:'',
            lastName:'',
            address:'',
            city:'',
            phone:'',
        }}
        validationSchema={validate}
        >
        {formik=>(<>
            <Form>
                <Textfiled label="First Name" name="firstName" type="text"
                placeholder="First name"/>
                <Textfiled label="Last Name" name="lastName" type="text"
                placeholder="Last name"/>
                <Textfiled label="Address" name="address" type="text"
                placeholder="Address"/>
                <Textfiled label="City" name="city" type="text"
                placeholder="City"/>
                <Textfiled label="Phone" name="phone" type="phone"
                placeholder="Phone"/>
                <button type="submit" className={`btn btn-border ${classbutton}`}>
                Continue to shipping
                </button>
            </Form>
            </>
        )}
    </Formik>)
}

export default Detilesshipping;
/*==========================*/
import React from 'react';
import { ErrorMessage,useField } from 'formik';

export const Textfiled = ({label,...props}) => {
    const [field,meta]=useField(props);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
           <input 
            className={`form-control shadow-none mt-2 
            ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props}
            autoComplete="off"/>
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}

/*============================*/
/*
<label class="input-group-text" for="inputGroupSelect01">Options</label>
<select class="form-select" id="inputGroupSelect01">
  <option selected>Choose...</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

  <label>Select Box : </label>
            <Field name="type" component="select">
                <option value="1">One</option>
                <option value="2">Two</option>
            </Field><br/>
*/
/*

import React, { Component } from 'react';
import {Formik,Field,ErrorMessage,FieldArray} from "formik";
import * as Yup from 'yup';

export class Formikapp extends Component {
    onSubmit=(value)=>{
        console.log(value);
    }
    form=(props)=>{
        return <form onSubmit={props.handleSubmit}>
            <label>Name : </label>
            <Field name="name"/><br/>
            <ErrorMessage name="name"/><br/>
            <label>Email : </label>
            <Field name="email"/><br/>
            <ErrorMessage name="email"/><br/>

            <label>Select Box : </label>
            <Field name="type" component="select">
                <option value="1">One</option>
                <option value="2">Two</option>
            </Field><br/>

            <label>Check Box : </label>
            <Field name="active" type="checkbox"/><br/>
            <label>Radio: </label>
            <Field name="category" type="radio" value="1"/>
            <Field name="category" type="radio" value="1"/>
            <br/>
            <label>Field Array : </label>
            <FieldArray 
               name="friends" 
               render={arrayHelper=>(
                   <div>
                       {props.values.friends.map((item,index)=>(
                           <div key={index}>
                           <Field name={`friends.${index}`}/>
                           <button type="button" 
                           onClick={()=>arrayHelper.remove(index)}> - </button><br/>
                           <ErrorMessage name={`friends.${index}`}/><br/>
                           </div>
                       ))}
                       <button type="button" 
                       onClick={()=>arrayHelper.push('')}> + </button>
                   </div>
               )} 
            />
            <button type="submit">Send</button>
        </form>
    }
    schema=()=>{
        const schema= Yup.object().shape({
            name:Yup.string().required(),
            email:Yup.string().required(),
            friends:Yup.array().of(
                Yup.string().required('Item is a required field')
            )

        })
        return schema;
    }
    render() {
        return (
            <div>
               <Formik
                initialValues={{
                    name:"",
                    email:"",
                    type:"",
                    active:false,
                    category:"",
                    friends:["Amr"]
                }}
                onSubmit={this.onSubmit}
                render={this.form}
                validationSchema={this.schema()}
               />
            </div>
        )
    }
}

export default Formikapp;




*/
/*==============================================


<div id="popoverOpener">
  <button type="button" class="btn btn-default">Open popover</button>
</div>

<div id="popoverWrapper">
  <div class="popover" role="tooltip">
    <div class="arrow"></div>
    <h3 class="popover-title">Popover title</h3>
    <div class="popover-content">
      And here's some amazing content. It's very engaging. Right?
      <div>
        <a href="#" class="top">Top</a>
        <a href="#" class="right">Right</a>
        <a href="#" class="bottom">Bottom</a>
        <a href="#" class="left">Left</a>
      </div>
      <p>This is the Bootstrap example btw.</p>
    </div>
  </div>
</div>

#popoverOpener {
  position: absolute;
  left: 50%;
  margin-left: -10vw;
  text-align: center;
  top: 45vh;
  width: 20vw;
}

.bootstrap .popover {
  transition: left 400ms ease-out, top 250ms ease-in;
}

.popover-content > div {
  text-align: center;
}

.popover-content > div > a:link {
  border: 1px solid lavender;
  border-radius: 8px;
  display: inline-block;
  padding: 4px;
  text-decoration: none;
  transition: all 250ms;
}

.popover-content > div > a:hover {
  background-color: #eeeeff;
  border-color: #AFAFBF;
  border-radius: 4px;
  box-shadow: 0 0 4px #ccc;
}

'use strict';
class Popover {
  constructor(element, trigger, options) {
    this.options = { // defaults
      position: Popover.BOTTOM
    };
    this.element = element;
    this.trigger = trigger;
    this._isOpen = false;
    Object.assign(this.options, options);
    this.events();
    this.initialPosition();
  }

  events() {
    this.trigger.addEventListener('click', this.toggle.bind(this));
  }

  initialPosition() {
    let triggerRect = this.trigger.getBoundingClientRect();
    this.element.style.top = ~~triggerRect.top + 'px';
    this.element.style.left = ~~triggerRect.left + 'px';
  }

  toggle(e) {
    e.stopPropagation();
    if (this._isOpen) {
      this.close(e);
    } else {
      this.element.style.display = 'block';
      this._isOpen = true;
      this.outsideClick();
      this.position();
    }
  }

  targetIsInsideElement(e) {
    let target = e.target;
    if (target) {
      do {
        if (target === this.element) {
          return true;
        }
      } while (target = target.parentNode);
    }
    return false;
  }

  close(e) {
    if (!this.targetIsInsideElement(e)) {
      this.element.style.display = 'none';
      this._isOpen = false;
      this.killOutSideClick();
    }
  }

  position(overridePosition) {
    let triggerRect = this.trigger.getBoundingClientRect(),
      elementRect = this.element.getBoundingClientRect(),
      position = overridePosition || this.options.position;
    this.element.classList.remove(Popover.TOP, Popover.BOTTOM, Popover.LEFT, Popover.RIGHT); // remove all possible values
    this.element.classList.add(position);
    if (position.indexOf(Popover.BOTTOM) !== -1) {
      this.element.style.left = ~~triggerRect.left + ~~((triggerRect.width / 2) - ~~(elementRect.width / 2)) + 'px';
      this.element.style.top = ~~triggerRect.bottom + 'px';
    } else if (position.indexOf(Popover.TOP) !== -1) {
      this.element.style.left = ~~triggerRect.left + ~~((triggerRect.width / 2) - ~~(elementRect.width / 2)) + 'px';
      this.element.style.top = ~~(triggerRect.top - elementRect.height) + 'px';
    } else if (position.indexOf(Popover.LEFT) !== -1) {
      this.element.style.top = ~~((triggerRect.top + triggerRect.height / 2) - ~~(elementRect.height / 2)) + 'px';
      this.element.style.left = ~~(triggerRect.left - elementRect.width) + 'px';
    } else {
      this.element.style.top = ~~((triggerRect.top + triggerRect.height / 2) - ~~(elementRect.height / 2)) + 'px';
      this.element.style.left = ~~triggerRect.right + 'px';
    }
  }

  outsideClick() {
    document.addEventListener('click', this.close.bind(this));
  }

  killOutSideClick() {
    document.removeEventListener('click', this.close.bind(this));
  }

  isOpen() {
    return this._isOpen;
  }
}

Popover.TOP = 'top';
Popover.RIGHT = 'right';
Popover.BOTTOM = 'bottom';
Popover.LEFT = 'left';

document.addEventListener('DOMContentLoaded', function() {
  let btn = document.querySelector('#popoverOpener button'),
    template = document.querySelector('.popover'),
    pop = new Popover(template, btn, {
      position: Popover.RIGHT
    }),
    links = template.querySelectorAll('.popover-content a');
  for (let i = 0, len = links.length; i < len; ++i) {
    let link = links[i];
    console.log(link);
    link.addEventListener('click', function(e) {
      e.preventDefault();
      pop.position(this.className);
      this.blur();
      return true;
    });
  }
});
*/