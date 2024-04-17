import { Modal } from "react-bootstrap";
import { FC, ReactNode } from "react";

type NewUserType = {
    show: boolean;
    onHide: () => void;
    children: ReactNode;
    modaltitle: string;
    size?: "xl" | "sm" | "lg" | undefined;
}

const CustomModal: FC<NewUserType> = (props) =>{
    return (
        <>
            <Modal 
            {...props}
            size={props.size ? props.size : "xl"}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.modaltitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
        </Modal>
        </>
    )
};

export default CustomModal;