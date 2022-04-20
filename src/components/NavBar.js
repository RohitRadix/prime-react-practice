import React from 'react'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
function NavBar() {
  let navigate = useNavigate()
  const items = [
    {
      label: 'Counter', command: () => { navigate('/counter') },
      icon: 'pi pi-plus-circle',
     
        },
   
    {
      label: 'Greet', command: () => { navigate('/greet') },
      icon: 'pi pi-bolt',
      
    },
    {
      label: 'Table', command:() =>{navigate('/table')},
      icon: 'pi pi-table',
    },
    
  ];
  return (
    <div>
      <Menubar className='p-1 bg-indigo-200 fixed w-full top-0 left-0 z-3' 
        model={items}
        start={<h2 className='mr-2'>Custom navbar </h2>}
        end={<Button label="Logout" iconPos='right' icon="pi pi-sign-out" />} 
      />
    </div>
  )
}

export default NavBar