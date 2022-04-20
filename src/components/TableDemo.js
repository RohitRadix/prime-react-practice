// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { DataTable } from 'primereact/datatable';

// function Table() {
//   let [loading,setLoading]= useState(false)
//   let [user,setUser] = useState([])
//   let [errMsg,setErrMsg] = useState(null)
//     useEffect(()=>{ 
//       setLoading(true)
//       axios.get("https://randomuser.me/api/?results=50")
//         .then(res=>{
//           console.log(res);
//           if(res.status=== 200)
//           {
//             setLoading(false)
//             setUser(res.data) 
//           }
//         })
//         .catch(err=>{
//           setErrMsg("Somthing went wrong")
//         })
//     } 
//     )
//   return (
//     <div>Table</div>
//   )
// }

// export default Table


import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import axios from 'axios';

const TableDemo = () => {
  const [customers, setCustomers] = useState(null);
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const [filters, setFilters] = useState({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
    'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'representative': { value: null, matchMode: FilterMatchMode.IN },
    'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    'activity': { value: null, matchMode: FilterMatchMode.BETWEEN }
  });
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  


  const statuses = [
    'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
  ];



  useEffect(()=>{
    axios.get(process.env.REACT_APP_BASEURL+'shownusers/camp')
    .then(res =>{
      if(res.data.success===true)
      {
        console.log(res.data.result);
        setCustomers(res.data.result)
       
      }
    })
      .catch(err =>{
        console.log(err)
        
      }
      )
    
  })

    const formatDate = (value) => {
      return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    }

    const formatCurrency = (value) => {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const onGlobalFilterChange = (e) => {
      const value = e.target.value;
      let _filters = { ...filters };
      _filters['global'].value = value;

      setFilters(_filters);
      setGlobalFilterValue(value);
    }

    const renderHeader = () => {
      return (
        <div className="flex justify-content-between align-items-center ">
          <h5 className="m-0">Customers</h5>
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
          </span>
        </div>
      )
    }

    const statusItemTemplate = (option) => {
      return <span className={`customer-badge status-${option}`}>{option}</span>;
    }
  const statusFilterTemplate = (options) => {
    return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
  }
    const header = renderHeader();

    return (
      <div className="datatable-doc-demo mt-8">
        <div className="card">
          <DataTable value={customers} paginator className="p-datatable-customers" header={header} rows={10}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10, 25, 50]}
            dataKey="id" rowHover selection={selectedCustomers} onSelectionChange={e => setSelectedCustomers(e.value)}
            filters={filters} filterDisplay="menu" responsiveLayout="scroll"
            globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} emptyMessage="No customers found."
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
            <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
            <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
            <Column field="mobile" header="Mobile" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
            <Column field="user_status" header="Status" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
            <Column field="mobile" header="Mobile" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
            <Column field="mobile" header="Mobile" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />

          </DataTable>
        </div>
      </div>
    );
  }
export default TableDemo

