import { useState, useRef } from 'react'
import {
	ColumnDirective,
	ColumnsDirective,
	GridComponent,
	Inject,
	Resize,
	Reorder,
	ExcelExport,
	ColumnChooser,
	Toolbar,
	Edit
} from '@syncfusion/ej2-react-grids'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import UseCallApi from '../Hooks/UseCallApi'

const Historique= ()=>{

    const param = { action: ''}
    const [ data, setData ] = useState('')

    const toolbarOptions = [ 'ExcelExport', 'ColumnChooser']

	const grid:any = useRef()

    const toolbarClick = (args:any) => {
		const rep = args.item.id
		const sub = 'excelexport'
		
		if (rep.includes(sub)) {
			grid.current.excelExport()
		}
	}

    const handleClick= async ()=>{
        param.action = 'getAllVariables'
		setData(await UseCallApi(param))
		//console.log(data)
    }

    return(
        <div>
            <ButtonComponent onClick={handleClick}>Validez</ButtonComponent>
            <div>
            <GridComponent
				dataSource={data}
				allowResizing={true}
				allowReordering={true}
				allowTextWrap={true}
				ref={grid}
				toolbar={toolbarOptions}
				allowExcelExport={true}
				toolbarClick={toolbarClick}
				showColumnChooser={true}				
                height={600}>
				<ColumnsDirective>
					<ColumnDirective field='name' headerText='Nom' width='100' textAlign='Center' />
                    <ColumnDirective field='description' headerText='Description' width='100' textAlign='Center' />
                    <ColumnDirective field='interval' headerText='Intervale' width='100' textAlign='Center' />
                    <ColumnDirective field='type' headerText='Type' width='100' textAlign='Center' />
                    <ColumnDirective field='value' headerText='Valeur' width='100' textAlign='Center' />
                    <ColumnDirective field='lastUpdated' headerText='Scan' width='100' textAlign='Center' type='date' format="yyyy/MM/dd HH:mm:ss"/>             				
				</ColumnsDirective>
				<Inject services={[ Resize, Reorder, Toolbar, ExcelExport, ColumnChooser, Edit ]} />
			</GridComponent>
            </div>
        </div>
    )}

export default Historique