import React, { useState } from 'react';
import NotificationItem from './NotificationItem';
import { Button, Col, Row, Container } from 'react-bootstrap';
import Mark from '../images/avatar-mark-webber.webp';
import Angela from '../images/avatar-angela-gray.webp';
import Jacob from '../images/avatar-jacob-thompson.webp';
import Rizky from '../images/avatar-rizky-hasanuddin.webp';
import Kimberly from '../images/avatar-kimberly-smith.webp';
import Nathan from '../images/avatar-nathan-peterson.webp';
import Anna from '../images/avatar-anna-kim.webp';
import Picture from '../images/image-chess.webp';
import '../style.css';

function NotificationList() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Mark Webber',
      message:
        'reacted to your recent post <strong>My first tournament today!</strong>',
      additionalMessage: '',
      timestamp: '1m ago',
      isRead: false,
      pictureUrl: Mark,
    },
    {
      id: 2,
      title: 'Angela Gray',
      message: 'followed you',
      additionalMessage: '',
      timestamp: '5m ago',
      isRead: false,
      pictureUrl: Angela,
    },
    {
      id: 3,
      title: 'Jacob Thompson',
      message: 'has joined your group ',
      additionalMessage: 'Chess Club',
      timestamp: '1 day ago',
      isRead: false,
      pictureUrl: Jacob,
    },
    {
      id: 4,
      title: 'Rizky Hasanuddin',
      message: 'sent you a private message',
      additionalMessage: '',
      privets:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      timestamp: '5 days ago',
      isRead: false,
      pictureUrl: Rizky,
    },
    {
      id: 5,
      title: 'Kimberly Smith',
      message: 'commented on your picture',
      additionalMessage: '',
      timestamp: '1 week ago',
      isRead: false,
      pictureUrl: Kimberly,
      picture: Picture,
    },
    {
      id: 6,
      title: 'Nathan Peterson',
      message:
        'reacted to your post <strong>5 end-game strategies to increase your win</strong>',
      additionalMessage: '',
      timestamp: '2 weeks ago',
      isRead: false,
      pictureUrl: Nathan,
    },
    {
      id: 7,
      title: 'Anna Kim',
      message: 'left the group ',
      additionalMessage: 'Chess Club',
      timestamp: '2 weeks ago',
      isRead: false,
      pictureUrl: Anna,
    },
  ]);

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, isRead: true } : notification,
    );
    setNotifications(updatedNotifications);
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      isRead: true,
    }));
    setNotifications(updatedNotifications);
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.isRead,
  ).length;

  return (
    <Container
      className='d-flex justify-content-center shadow p-4 mb-5 bg-white rounded Container '
      style={{
        marginTop: '3.75rem',
        width: '100%',
        maxWidth: '51rem',
        backgroundColor: 'hsl(0, 0%, 100%)',
      }}
    >
      <div
        className='w-100' // Set width to 100%
        style={{
          backgroundColor: 'hsl(0, 0%, 100%)',
          marginTop: '1rem',
        }}
      >
        <Row className='align-items-center'>
          <Col>
            <h1 className='fs-4'>
              Notifications{' '}
              {unreadCount > 0 && (
                <span
                  className='badge fs-6'
                  style={{ backgroundColor: 'hsl(219, 85%, 26%)' }}
                >
                  {unreadCount}
                </span>
              )}
            </h1>
          </Col>
          <Col xs='auto'>
            <Button
              variant='light'
              onClick={markAllAsRead}
              style={{
                color: 'hsl(219, 12%, 42%)',
                backgroundColor: 'transparent',
                border: '0px',
              }}
            >
              Mark all as read
            </Button>
          </Col>
        </Row>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            title={notification.title}
            message={notification.message}
            additionalMessage={notification.additionalMessage}
            privets={notification.privets}
            timestamp={notification.timestamp}
            pictureUrl={notification.pictureUrl}
            isRead={notification.isRead}
            picture={notification.picture}
            onClick={() => markAsRead(notification.id)}
          />
        ))}
      </div>
    </Container>
  );
}

export default NotificationList;
