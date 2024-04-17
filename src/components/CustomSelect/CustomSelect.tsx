import { FC, ReactNode } from "react";
import { Col, Form } from "react-bootstrap";

type CustomSelectType = {
    children: ReactNode;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    colSize: string;
    fieldTitle?: string;
    fieldValue?:string;
    stylesSelect?: {};
}

const CustomSelect: FC<CustomSelectType> = ({children, onChange, colSize, fieldTitle, fieldValue, stylesSelect}) => {
    return (
        <>
            <Form.Group as={Col} md={colSize} style={{...stylesSelect}}>
                {
                    fieldTitle ? 
                    <><Form.Label>{fieldTitle}</Form.Label><Form.Select onChange={onChange} value={fieldValue}>
                            {children}
                        </Form.Select></> : 
                    <Form.Select onChange={onChange} value={fieldValue} >
                        {children}
                    </Form.Select>
                }
            </Form.Group>
        </>
    );
};

export default CustomSelect;