import axios from "axios";
export function GetStudent(){
    return axios.get(`https://hoppperstasknode.herokuapp.com/student/:id`)
}

export function GetCollege()
{
    return axios.get(`https://hoppperstasknode.herokuapp.com/college/:id`)

}

export function GetStudents(){
    return axios.get(`https://hoppperstasknode.herokuapp.com/students`)
}

export function GetColleges()
{
    return axios.get(`https://hoppperstasknode.herokuapp.com/colleges`)

}

export function PostCollege(data){
    return axios.post(`https://hoppperstasknode.herokuapp.com/college`,data);
}

export function PostStudent(data){
    return axios.post(`https://hoppperstasknode.herokuapp.com/student`,data)
}