import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  selectModalHidden,
  selectModalNotification,
} from "../../redux/modal/modal.selector";
import { hideModal } from "../../redux/modal/modal.actions";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

export default function NotificationComponent() {
  const show = useSelector(selectModalHidden);
  const notification = useSelector(selectModalNotification);
  const dispatch = useDispatch();

  const handleClose = useCallback(() => dispatch(hideModal()), [dispatch]);

  return (
    <>
      <Modal show={!show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
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
