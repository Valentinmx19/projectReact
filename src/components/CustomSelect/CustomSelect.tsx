import { FC, ReactNode } from "react";
import { Col, Form } from "react-bootstrap";

type CustomSelectType = {
    children: ReactNode;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    colSize: string;
    fieldTitle: string;
}

const CustomSelect: FC<CustomSelectType> = ({children, onChange, colSize, fieldTitle}) => {
    return (
        <>
            <Form.Group as={Col} md={colSize}>
                <Form.Label>{fieldTitle}</Form.Label>
                <Form.Select onChange={onChange}>
                    {children}
                </Form.Select>
            </Form.Group>
        </>
    );
};

export default CustomSelect;