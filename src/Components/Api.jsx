import axios from "axios";
import  { Component } from 'react'
const baseUrl = 'http://react.neuralresource.com/public/api/v1';

 class RestApi extends Component {
     static registration(params) {
         return axios.post(`${baseUrl}/register`, params)
     }
     static login(data) {
         return axios.post(`${baseUrl}/login`, data)
     }
 }
export default RestApi;
