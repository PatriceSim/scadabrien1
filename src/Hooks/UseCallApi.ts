import axios, { AxiosResponse } from 'axios';
//import { format } from 'date-fns';
const querystring = require('querystring');

const UseCallApi=async(param:any) =>{

    if(param.action=='getAllVariables') {
        try {
			//const listVariables = await axios.get('http://172.16.30.144:5000/api/Cooker/GetAllVariableDb');
			const listVariables = await axios.get('https://localhost:7246/api/Cooker/GetAllVariableDb');		
			return listVariables.data;
		} catch (err) {
			// Handle Error Here
			console.error(err);
			return [];
		}        
    }	

	if(param.action=='getHistVariable') {

		let params = {
            sensorsID: param.sensorsID,
            startDate: param.startDate,
            endDate: param.endDate
        };

        try {
			
			//const listVariables = await axios.get('http://172.16.30.144:5000/api/Cooker/GetAllVariableDb');
			const listVariables = await axios.get('https://localhost:7246/api/Cooker/GetAllVariableDb' + querystring.stringify(params));		
			return listVariables.data;
		} catch (err) {
			// Handle Error Here
			console.error(err);
			return [];
		}        
    }

}

export default UseCallApi;