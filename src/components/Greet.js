import { Card } from 'primereact/card'
import React, { useRef, useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


function Greet() {
    const update = (e) => {
        setMsg(e.target.value)
    }
    const toast = useRef(null)
    let [msg, setMsg] = useState('')
    const greet=(e)=>
    {
        e.preventDefault();
        if(msg!='')
        toast.current.show({ severity: 'success', summary: 'Success Message', detail: msg, life: 3000 });
    }
    return (
        <div className='grid m-3 mt-8'>
            <Toast ref={toast} position="bottom-right"/>

            <div className='md:col-6'>
                <Card title={"Greeting"} className="bg-green-200">
                    <form>
                        <span className="p-float-label mt-2">
                            <InputText id="in" value={msg} onChange={update} />
                            <label htmlFor="in">Enter Greeting message</label>
                            <Button onClick={greet} type="submit" className='p-button-warning mx-2' label='Greet' />
                        </span>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Greet