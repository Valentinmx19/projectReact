import { FC, ReactNode } from "react";
import { Col, FloatingLabel, Form } from "react-bootstrap";

type CustomSelectType = {
    children: ReactNode;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    colSize: string;
    fieldTitle?: string;
    fieldValue?:string;
}

const CustomSelect: FC<CustomSelectType> = ({children, onChange, colSize, fieldTitle, fieldValue}) => {
    return (
        <>
            <Form.Group as={Col} md={colSize}>
                {
                    fieldTitle ? 
                    <FloatingLabel label={fieldTitle} >
                        <Form.Select onChange={onChange} value={fieldValue} >
                            {children}
                        </Form.Select>
                    </FloatingLabel> : 
                    <Form.Select onChange={onChange} value={fieldValue} >
                        {children}
                    </Form.Select>
                }
            </Form.Group>
        </>
    );
};

export default CustomSelect;