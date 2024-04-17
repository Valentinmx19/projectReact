import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useController } from "react-hook-form";
import { UserFormInputType } from "../../types/user";
import { FC, useState } from "react";

const Input: FC<UserFormInputType> = ({control, name, fieldName, fieldType, fieldErrors, fieldStyles, colSize, readonly}) => {

    const { field } = useController({name, control});
    const [isVisible, setIsVisible] = useState(false)
    const handleSeePassword = () => {
        setIsVisible(!isVisible)
    }

    return (
        <>{
            fieldType === "password" ?
            <Form.Group as={Col} md={colSize}>
                <Form.Label>{fieldName}</Form.Label>
                <InputGroup>
                    <Form.Control 
                        type={isVisible ? "text" : fieldType }
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        isInvalid={!!fieldErrors}
                        className={field.value ? fieldStyles : `rounded-end-2 ${fieldStyles}`}
                        readOnly={readonly}
                    />
                     {field.value ? <Button variant="light" className="border border-start-0 rounded-end-2" onClick={handleSeePassword}><i className={`bi bi-${isVisible ? "eye-fill": "eye-slash-fill"}`} ></i></Button> : ""}
                    <Form.Control.Feedback type="invalid">{fieldErrors}</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            :
            <Form.Group as={Col} md={colSize}>
                <Form.Label>{fieldName}</Form.Label>
                <Form.Control 
                    type={fieldType}
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    isInvalid={!!fieldErrors}
                    className={fieldStyles}
                    readOnly={readonly}
                />
                <Form.Control.Feedback type="invalid">{fieldErrors}</Form.Control.Feedback>
            </Form.Group>
            }
        </>
    );
};

export default Input;
