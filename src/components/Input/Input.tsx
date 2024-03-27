import { Col, Form } from "react-bootstrap";
import { useController } from "react-hook-form";
import { UserFormInputType } from "../../types/user";
import { FC } from "react";

const Input: FC<UserFormInputType> = ({control, name, fieldName, fieldType, fieldErrors, fieldStyles, colSize}) => {

    const { field } = useController({name, control});

    return (
        <>
            <Form.Group as={Col} md={colSize}>
                <Form.Label>{fieldName}</Form.Label>
                <Form.Control 
                    type={fieldType}
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    isInvalid={!!fieldErrors}
                    className={fieldStyles}
                />
                <Form.Control.Feedback type="invalid">{fieldErrors}</Form.Control.Feedback>
            </Form.Group>
        </>
    );
};

export default Input;
