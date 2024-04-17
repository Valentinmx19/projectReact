import { Form, Table } from "react-bootstrap";
import "./TabFilter.css";
import React, { ReactElement } from "react";
import { number } from "yup";

const TabFilter = () => {
    const chechValues= (e:React.ChangeEvent<HTMLInputElement>) => {
        let values = e.target.checked ? e.target.value : ""
        console.log(values);

        let tabla: any = document.getElementById('table');
        let row = tabla?.rows;

        if(e.target.checked){
            let celIndex=null;
            for (let j = 0; j < row.length; j++) {
                let celdas=row[j].cells;
                for (let i = 0; i < celdas.length; i++) {
                        if(celdas[i].innerText === values){
                            celIndex = celdas[i].cellIndex
                        }
                        if(i == celIndex){
                            celdas[celIndex].remove()
                        }
                    }
                }
        }        
};

    return (
        <>
            <Form.Check type="checkbox" id="ad" className="" >
                <Form.Check.Input type="checkbox" value={"First Name"} className="check" onChange={chechValues} />
                <Form.Check.Label>First Name</Form.Check.Label>
            </Form.Check>
            <Form.Check type="checkbox" id="ada" name="chekbox3" className="" >
                <Form.Check.Input type="checkbox" value={"Last Name"} className="check" onChange={chechValues} />
                <Form.Check.Label>Last Name</Form.Check.Label>
            </Form.Check>
            <Form.Check type="checkbox" id="adad" name="chekbox4" className="" >
                <Form.Check.Input type="checkbox" value={"Username"} className="check" onChange={chechValues} />
                <Form.Check.Label>Username</Form.Check.Label>
            </Form.Check>



            <Table responsive variant="dark" hover id="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry the Bird</td>
                      <td>Larry the Bird</td>
                      <td>@twitter</td>
                      <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default TabFilter;