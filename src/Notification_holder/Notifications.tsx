import "./Notifications.sass";
import Notification from "../Notification/Notification";
import { useEffect, useState } from "react";
import React from "react";


function Notifications() {
  const [count, setCount] = useState<number>(0);
  const data = [
    {
      userhandle: "Mark Webber",
      userhandle_image:
        "https://res.cloudinary.com/pengpengong/image/upload/v1676576284/Notification_profile_pictures/avatar-mark-webber_abhjpr.webp",
      action: "reacted to your recent post",
      action_target: "My first tournament today!",
      action_target_type: "post",
      post_date: "1m ago",
      id: 76567,
      hasRead: false,
    },
    {
      userhandle: "Angela Gray",
      userhandle_image:
        "https://res.cloudinary.com/pengpengong/image/upload/v1676576283/Notification_profile_pictures/avatar-angela-gray_okofcg.webp",
      action: "followed you",
      post_date: "5m ago",
      id: 6789,
      hasRead: false,
    },
    {
      userhandle: "Jacob Thompson",
      userhandle_image:
        "https://res.cloudinary.com/pengpengong/image/upload/v1676576284/Notification_profile_pictures/avatar-jacob-thompson_nzvq2e.webp",
      action: "has joined your group",
      action_target: "Chess Club",
      action_target_type: "group",
      post_date: "1 day ago",
      id: 768,
      hasRead: false,
    },
    {
      userhandle: "Rizky Hasanuddin",
      userhandle_image:
        "https://res.cloudinary.com/pengpengong/image/upload/v1676576284/Notification_profile_pictures/avatar-rizky-hasanuddin_x9sxni.webp",
      action: "sent you a private message",
      private_message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      post_date: "5 days ago",
      id: 654,
      hasRead: true,
    },
    {
      userhandle: "Kimberly Smith",
      userhandle_image:
        "https://res.cloudinary.com/pengpengong/image/upload/v1676576284/Notification_profile_pictures/avatar-kimberly-smith_bkes9n.webp",
      action: "commented on your picture",
      commented_picture:
        "https://res.cloudinary.com/pengpengong/image/upload/v1676576284/Notification_profile_pictures/image-chess_zjgggc.webp",
      post_date: "1 week ago",
      id: 534,
      hasRead: true,
    },
    {
      userhandle: "Nathan Peterson",
      userhandle_image:
        "https://res.cloudinary.com/pengpengong/image/upload/v1676576284/Notification_profile_pictures/avatar-nathan-peterson_ip33wa.webp",
      action: "reacted to your recent post",
      action_target: "5 end-game strategies to increase your win rate",
      action_target_type: "post",
      post_date: "2 weeks ago",
      id: 5678,
      hasRead: true,
    },
    {
      userhandle: "Anna Kim",
      userhandle_image:
        "https://res.cloudinary.com/pengpengong/image/upload/v1676576283/Notification_profile_pictures/avatar-anna-kim_kttgjj.webp",
      action: "left the group",
      action_target: "Chess Club",
      action_target_type: "group",
      post_date: "2 weeks ago",
      id: 1234,
      hasRead: true,
    },
  ];

  // update count notification
  const notificationCount = () => {
    const amount: number = document.querySelectorAll(".unread").length;
    setCount(amount);
  };

  const hasRead = (e: React.MouseEvent) => {
    // const element: Element = e.currentTarget;

    if (e.currentTarget instanceof Element) {
      const element: Element = e.currentTarget;
      const redDot: Element =
        e.currentTarget!.children[0].children[1].children[0].children[2];

      if (redDot instanceof HTMLSpanElement) {
        redDot.classList.remove("redDot");
      }

      if (element instanceof HTMLDivElement) {
        element.classList.remove("unread");
      }
    }
    // UPDATING DATABASE
    // change hasRead property to true in MongoDB with ID - get ID from data-id label in element
    // const notificationId = element.dataset.id;

    notificationCount();
  };

  // mark all notification as read
  const readAll = () => {
    const elements: Element[] = Array.from(
      document.querySelectorAll(".unread")
    );

    elements.forEach((obj) => {
      obj.classList.remove("unread");
      // // change all docs in mopngoDB entry hasRead property to true
      // if (obj instanceof HTMLDivElement) {
      // // use ID to find all docs in MongoDB
      //   const elementId: string | unknown = obj.dataset.id;
      //   console.log(elementId)
      // }
    });

    notificationCount();
  };

  // count notification after component mounted
  useEffect(() => {
    notificationCount();
  });

  // map through data and create items
  const notificationItems = data.map((obj, index) => {
    if (obj.hasRead === true) {
      return (
        <li key={index}>
          <Notification
            userhandle={obj.userhandle}
            userhandle_image={obj.userhandle_image}
            userhandle_action={obj.action}
            action_target={obj.action_target ?? ""}
            action_target_style={obj.action_target_type ?? ""}
            post_date={obj.post_date}
            private_message={obj.private_message ?? ""}
            commented_picture={obj.commented_picture ?? ""}
            id={obj.id}
            onClick={hasRead}
            hasRead=""
            hasReadDot=""
          />
        </li>
      );
    } else {
      return (
        <li key={index}>
          <Notification
            userhandle={obj.userhandle}
            userhandle_image={obj.userhandle_image}
            userhandle_action={obj.action}
            action_target={obj.action_target ?? ""}
            action_target_style={obj.action_target_type ?? ""}
            post_date={obj.post_date}
            private_message={obj.private_message ?? ""}
            commented_picture={obj.commented_picture ?? ""}
            id={obj.id}
            onClick={hasRead}
            hasRead="unread"
            hasReadDot="redDot"
          />
        </li>
      );
    }
  });

  return (
    <div className="notifications">
      <div className="notifications_head">
        <div className="notification_count_holder">
          <h1>Notifications</h1>
          <h2 className="notification_count">{count}</h2>
        </div>
        <p className="markRead" onClick={readAll}>
          Mark all as read
        </p>
      </div>
      <div className="notification_holder">
        <ul>{notificationItems}</ul>
      </div>
    </div>
  );
}

export default Notifications;
