import React from 'react'
import "./Notification.sass"

interface NotificationProp {
  hasRead: string, 
  hasReadDot: string,
  onClick: React.MouseEventHandler,
  userhandle_image: string,
  userhandle: string,
  userhandle_action: string,
  action_target: string,
  action_target_style: string,
  post_date: string,
  private_message: string,
  commented_picture: string,
  id: string | number,
}

function Notification({
  hasRead,
  hasReadDot,
  onClick,
  userhandle_image,
  userhandle,
  userhandle_action,
  action_target,
  action_target_style,
  post_date,
  private_message,
  commented_picture,
  id,
}: NotificationProp) {
  return (
    <div className={`${hasRead} notification`} onClick={onClick} data-id={id}>
      <div className='content_holder'>
        <img
          className="profile_picture"
          src={userhandle_image}
          alt="user_profile_picture"
        />
        <div className="notification_content">
          <p className="content">
            <span className="userhandle">{userhandle}</span> {userhandle_action}{" "}
            <a href="#">
              <span className={action_target_style}>{action_target}</span>{" "}
            </a>
            <span className={hasReadDot}></span>
          </p>
          <p className="post_date">{post_date}</p>
          {private_message ? (
            <p className="private_message">{private_message}</p>
          ) : (
            ""
          )}
        </div>
      </div>
      {commented_picture ? (
        <img
          src={commented_picture}
          className="commented_picture"
          alt="commented_picture"
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Notification