import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { selectNotificationsHidden } from "../../redux/ui/ui.selector";
import { hideNotifications } from "../../redux/ui/ui.actions";
import "./NotificationComponent.css";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const NotificationItem = ({ head, body, type }) => (
  <Card className="notification-item col-xl-12">
    <div className="notification-icon">
      <FontAwesomeIcon
        icon={type === "status" ? faBell : faCommentDots}
        color="grey"
        size="2x"
      />
    </div>
    <div>
      <h5 style={{ fontSize: "15px", fontWeight: 600 }}>{head}</h5>
      <h6 style={{ fontSize: "14px", fontWeight: 500 }}>{body}</h6>
    </div>
  </Card>
);

export default function NotificationComponent() {
  const show = useSelector(selectNotificationsHidden);
  const dispatch = useDispatch();

  const notifications = [
    {
      head: "Order Confirmed",
      body: "Your order 4566UZ for Red T Shirt has been confirmed by Raj fashion",
      type: "status",
    },
    {
      head: "New Message",
      body: "Your have recived a new message from Raj fashion",
      type: "message",
    },
  ];

  const handleClose = useCallback(
    () => dispatch(hideNotifications()),
    [dispatch]
  );

  return (
    <>
      <Modal show={!show} fullscreen onHide={handleClose}>
        <Modal.Header className="notification-head" closeButton>
          <Modal.Title className="notification-head-title">
            Notifications
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="notification-content">
          <div className="container notification-wrapper">
            {notifications.map((value, idx) => (
              <NotificationItem {...value} key={idx} />
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
