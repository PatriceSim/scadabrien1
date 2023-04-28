import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { useState,useMemo} from 'react'
import UseCallApi from '../Hooks/UseCallApi'
import { isDate } from 'util/types';

const Graphique =()=>{

    const param = { action: '',startDate : '',endDate:'',variable:{}}
    const [variables,setVariable] = useState({name:""})
    const [data,setData] = useState([])
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')
    const [selectedVariable, setSelVariable] = useState('')
    //const startdate1 = isDate

    useMemo(() =>{
        UseCallApi({action:'getAllVariables'}).then((variables)=>setVariable(variables))
		//console.log(data)
        
      },[])
  
    const fieldsVariable={text: 'name', value: 'name'}

    const handleClick= async ()=>{

        param.action = 'getHistVariable'
        param.startDate = startDate
        param.endDate = endDate
        param.variable = selectedVariable
		setData(await UseCallApi(param))
    }

    const handleSelectedVariable = (arg:any) =>{
        //console.log(arg.itemData.name)
        setSelVariable(arg.itemData)
    }

    const handleStartDate = (arg:any) =>{
        setStartDate(arg.value)
        console.log(arg.value)
    }

    const handleEndDate = (arg:any) =>{
        setEndDate(arg.value)
        console.log(arg.value)
    }

    return(
    <div>
        <div>
            <label>Date début</label>
            <DateTimePickerComponent onChange={handleStartDate} width={300} />
        </div>
        <div>
            <label>Date fin</label>
            <DateTimePickerComponent onChange={handleEndDate} width={300}/>
        </div>
        <ComboBoxComponent dataSource={variables as any} placeholder="Select une variable" fields={fieldsVariable}  
                           select={handleSelectedVariable} width={350}/>
        <div>
            <ButtonComponent onClick={handleClick}>Validez</ButtonComponent>
        </div>
        
        <div>
            <ChartComponent />
        </div>
        
    </div>
)}

export default Graphique