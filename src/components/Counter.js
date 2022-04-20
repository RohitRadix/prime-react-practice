import React, { useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
function Counter() {
  let [count, setCount] = useState(0)

  return (
    <div className="m-3  grid mt-8 ">
      <div className="sm:col-4  mb-3 align-items-center">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger md:mt-2  lg:mt-0" label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>
      <div className="sm:col-4  mb-3 ">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger md:mt-2 lg:mt-0 " label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>
      <div className="sm:col-4  mb-3 ">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger  " label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>
      <div className="sm:col-4  mb-3 ">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger  " label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>
      <div className="sm:col-4  mb-3 ">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger  " label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>
      <div className="sm:col-4  mb-3 ">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger  " label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>
      <div className="sm:col-4  mb-3 ">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger  " label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>
      <div className="sm:col-4  mb-3 ">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger  " label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>
      <div className="sm:col-4  mb-3 ">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger  " label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>
      <div className="sm:col-4  mb-3 ">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger  " label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>
      <div className="sm:col-4  mb-3 ">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger  " label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>
      <div className="sm:col-4  mb-3 ">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger  " label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>
      <div className="sm:col-4  mb-3 ">
        <Card className="shadow-5 surface-300" title={"Counter"} subTitle={`Count: ${count}`}>
          <Button className=" p-button-success mr-2 " label="Increment" icon="pi pi-plus" onClick={() => { setCount(count + 1) }}></Button>
          <Button className="p-button-danger  " label="Decrement  " icon="pi pi-minus" onClick={() => { count > 0 && setCount(count - 1) }} />
        </Card>
      </div>


    </div>
  )
}

export default Counter