import React from 'react';
import { Col, Row } from 'react-bootstrap';

function NotificationItem({
  id,
  title,
  message,
  privets,
  additionalMessage,
  timestamp,
  pictureUrl,
  isRead,
  picture,
  onClick,
}) {
  const markAsRead = () => {
    console.log(`Marking notification with ID ${id} as read.`);
    onClick(id);
  };

  return (
    <div
      className={`notification-item alert alert-${
        isRead ? '' : 'custom-color'
      }`}
      onClick={markAsRead}
      style={{
        backgroundColor: isRead ? '' : 'hsl(210, 60%, 98%)',
        marginTop: '20px',
      }}
    >
      <Row className='align-items-center'>
        <Col xs='auto'>
          <img
            src={pictureUrl}
            alt='Notification'
            className='notification-image'
            style={{ width: '50%' }}
          />
        </Col>
        <Col>
          <div className='d-flex flex-column' style={{ marginLeft: '-50px' }}>
            <div className='d-flex align-items-center'>
              <h5
                className='mb-0 text-xs title'
                style={{
                  maxWidth: 'calc(100% - 80px)',
                  marginRight: '10px',
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                {title}
              </h5>
              <p
                className='mb-0 text-xs Message'
                style={{ fontSize: '12px', cursor: 'pointer' }}
                dangerouslySetInnerHTML={{
                  __html: `${message}<span style="color: hsl(219, 85%, 26%); cursor: pointer; font-size: 14px;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">${additionalMessage}</span>`,
                }}
              ></p>
              {!isRead && <div className='red-point'></div>}
            </div>
            <p
              className='mb-0 text-xs'
              style={{ cursor: 'pointer', fontSize: '12px' }}
            >
              {timestamp}
            </p>
            {privets && (
              <p
                className='mb-0 text-xs privets'
                style={{
                  cursor: 'pointer',
                  fontSize: '12px',
                  margin: '5px 0',
                  padding: '15px',
                  color: 'hsl(219, 12%, 42%)',
                  border: '1px solid hsl(205, 33%, 90%)',
                  borderRadius: '5px',
                }}
              >
                {privets}
              </p>
            )}
          </div>
        </Col>
        <Col xs='auto'>
          {picture && (
            <img
              src={picture}
              alt='Picture'
              style={{ width: '50px', margin: '0' }}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default NotificationItem;
