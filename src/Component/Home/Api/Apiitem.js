//Examination
import Examination from "./Examination.json";
//Finalexamination
import Finalexamination from "./Finalexamination.json";
//Reform
import Reform from "./Reform.json";
//Repairreport
import Repairreport from "./Repairreport.json";


//get Examination
function getExamination(){
    return Promise.resolve(Examination);
}
//get Finalexamination
function getFinalexamination(){
    return Promise.resolve(Finalexamination);
}
//get Reform
function getReform(){
    return Promise.resolve(Reform);
}
//get Repairreport
function getRepairreport(){
    return Promise.resolve(Repairreport);
}


export default {
    //export Examination
    getExamination,
    //export Finalexamination
    getFinalexamination,
    //export Reform
    getReform,
    //export Repairreport
    getRepairreport,
}