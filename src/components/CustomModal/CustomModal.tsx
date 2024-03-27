import { Button, Modal } from "react-bootstrap";
import { FC, ReactNode } from "react";

type NewUserType = {
    show: boolean;
    onHide: () => void;
    children: ReactNode;
    modaltitle: string;
    titlebuttonchanges: string;
    actionbuttonchanges: () => void;
}

const CustomModal: FC<NewUserType> = (props) =>{
    return (
        <>
            <Modal 
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton className="d-flex justify-content-center">
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.modaltitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                    <Button onClick={props.actionbuttonchanges}>{props.titlebuttonchanges}</Button>
                </Modal.Footer>
        </Modal>
        </>
    )
};

export default CustomModal;