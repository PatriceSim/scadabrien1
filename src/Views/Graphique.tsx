import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { useState,useMemo} from 'react'
import UseCallApi from '../Hooks/UseCallApi'
import { isDate } from 'util/types';
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    ColumnSeries,
    Legend,
    DateTime,
    Tooltip,
    DataLabel,
    StepLineSeries,
    Crosshair,
    CrosshairSettingsModel,
    AxisModel,
    Inject
} from '@syncfusion/ej2-react-charts'

const Graphique =()=>{

    const param = { action: '',startDate : '',endDate:'',variable:{}}
    const [variables,setVariable] = useState({name:""})
    const [data,setData] = useState([{id:"",dateTime:'',value:0}])
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')
    const [selectedVariable, setSelVariable] = useState('')
    //const startdate1 = isDate

    const primaryxAxis1 = { valueType: 'DateTime', labelFormat: 'dd/ HH:mm',crosshairTooltip: { enable: true }  };
    const primaryyAxis1 = { crosshairTooltip: { enable: true } };
    const crosshair1 = { enable: true };
    const marker1 = { visible: false };

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
        //console.log(data)
    }

    const handleSelectedVariable = (arg:any) =>{
        //console.log(arg.itemData.name)
        setSelVariable(arg.itemData)
    }

    const handleStartDate = (arg:any) =>{
        setStartDate(new Date(arg.value).toISOString())        
    }

    const handleEndDate = (arg:any) =>{
        setEndDate(new Date(arg.value).toISOString())        
    }

    const handleTest = () =>{
        data.map((v,i)=>{
            return(
            console.log(v.dateTime)
               
            )
        })
    }

    return(
    <div>
        <div>
            <label>Date début</label>
            <DateTimePickerComponent onChange={handleStartDate} format="yyyy/MM/dd HH:mm" width={300}
            style={{fontSize:16, textAlign:'center'}}/>
        </div>
        <div>
            <label>Date fin</label>
            <DateTimePickerComponent onChange={handleEndDate} format="yyyy/MM/dd HH:mm" width={300}
            style={{fontSize:16, textAlign:'center'}}/>
        </div>
        <ComboBoxComponent dataSource={variables as any} placeholder="Select une variable" fields={fieldsVariable}  
                           select={handleSelectedVariable} width={350} style={{fontSize:16, textAlign:'center'}}/>
        <div>
            <ButtonComponent onClick={handleClick}>Validez</ButtonComponent>
            <ButtonComponent onClick={handleTest}>test</ButtonComponent>
        </div>
        
        <div>
            <ChartComponent primaryXAxis={primaryxAxis1 as any} primaryYAxis={primaryyAxis1} crosshair={crosshair1}>
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={data} xName='dateTime' yName='value' name='Valeur' type='StepLine' marker={marker1}/>                    
                </SeriesCollectionDirective>
                <Inject services={[StepLineSeries,DateTime,Legend, Tooltip, DataLabel, Crosshair]}/>
            </ChartComponent>
        </div>
        
    </div>
)}

export default Graphique