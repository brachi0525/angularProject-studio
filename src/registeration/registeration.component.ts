import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent  {
  gridOptions = {
    context: { }
  };

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'firstName', headerName: 'שם פרטי', filter: 'agTextColumnFilter', editable: true },
    { field: 'lastName', headerName: 'שם משפחה', filter: 'agTextColumnFilter', editable: true },
    { field: 'phone', headerName: 'טלפון', filter: 'agTextColumnFilter', editable: true },
    { field: 'idNumber', headerName: 'מספר זהות', filter: 'agTextColumnFilter', editable: true },
    { field: 'course', headerName: 'שיעור', filter: 'agTextColumnFilter', editable: true },
    { field: 'price', headerName: 'מחיר', filter: 'agNumberColumnFilter', editable: true, cellEditor: 'agNumberCellEditor' },
    { 
      field: 'paid', 
      headerName: 'האם שולם', 
      filter: 'agTextColumnFilter',
      cellRenderer: (params: any) => params.value ? 'כן' : 'לא'
    },
    {
      field: '',
      headerName: 'פרטים',
      cellRenderer: function (params: any) {
        const eDiv = document.createElement('div');
        eDiv.innerHTML = "<button style='background-color:yellow'>פרטי הנרשמת</button>";
        eDiv.addEventListener('click', function () {
          alert(`פרטי הנרשמת: ${params.data.firstName} ${params.data.lastName}`);
        });
        return eDiv;
      }
    }
  ];

  paginationPageSize = 10;
  paginationPageSizeSelector: number[] | boolean = [10, 20, 50];
   allRegistrations = [
    { firstName: 'שרה', lastName: 'כהן', phone: '0501234567', idNumber: '123456789', course: 'מתקדמים', price: 200, paid: true },
    { firstName: 'דניאל', lastName: 'לוי', phone: '0529876543', idNumber: '987654321', course: 'מתחילים', price: 150, paid: false },
    { firstName: 'מרים', lastName: 'ישראל', phone: '0532468101', idNumber: '654321987', course: 'מתקדמים', price: 200, paid: true },
    { firstName: 'יוסי', lastName: 'משה', phone: '0541239876', idNumber: '112233445', course: 'בינוניים', price: 180, paid: false },
    { firstName: 'רחל', lastName: 'רוזנברג', phone: '0552348765', idNumber: '223344556', course: 'מתחילים', price: 150, paid: true },
  ];
  rowDataList = this.allRegistrations; // Initial data for the grid
   
}
