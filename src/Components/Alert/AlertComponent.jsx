import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  selectAlertHidden,
  selectAlertMessage,
} from "../../redux/ui/ui.selector";
import { hideModal } from "../../redux/ui/ui.actions";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

export default function AlertComponent() {
  const show = useSelector(selectAlertHidden);
  const notification = useSelector(selectAlertMessage);
  const dispatch = useDispatch();

  const handleClose = useCallback(() => dispatch(hideModal()), [dispatch]);

  return (
    <>
      <Modal show={!show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{notification}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
