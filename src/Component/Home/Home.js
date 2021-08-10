import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import {BrowserRouter,Route,Switch}from 'react-router-dom';
import Create from './Create/Create';
import Datarecording from './Create/Datarecording';
import {Searchdevice, Searchnumber, Searchreceipt} from './Search/Search';
import { Examination, Finalexamination, Reform, Repaired } from './Device/Devices';
import { Examinationitem,Reformitem,Finaleitem ,Repaireditem} from './Device/Deviceitem';
import { Searchitem } from './Search/Searchitem';

function Home() {
    return (<BrowserRouter>
            <>
            <Navbar/>
            <Homerouter/>
            <Footer/>
            </>
        </BrowserRouter>
    )
}

export default Home;

function Homerouter() {
    return (
        <Switch>
            <Route path="/" component={Create} exact />
            <Route path="/datarecording" component={Datarecording} exact />
            <Route path="/searchreceipt" component={Searchreceipt} exact />
            <Route path="/searchdevice" component={Searchdevice} exact />
            <Route path="/searchnumber" component={Searchnumber} exact />
            <Route path="/search/:id" component={Searchitem} exact />
            <Route path="/examinationstage" component={Examination} exact />
            <Route path="/examinationstage/:id" component={Examinationitem} exact/>
            <Route path="/reformstage" component={Reform} exact/>
            <Route path="/reformstage/:id" component={Reformitem} exact/>
            <Route path="/finalexaminationstage" component={Finalexamination} exact/>
            <Route path="/finalexaminationstage/:id" component={Finaleitem} exact/>
            <Route path="/repaired" component={Repaired} exact/>
            <Route path="/repaired/:id" component={Repaireditem} exact/>
        </Switch>
    )
}

