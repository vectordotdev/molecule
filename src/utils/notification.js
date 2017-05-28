import React from 'react';
import { isNative } from 'utils/electron';
import NotificationComponent from 'components/Notification';

/*
 * This renders a target-specific notification.
 * if the app is being run on the web, it returns
 * the Notification component (found in components/Notification)
 * if the app is being run in electron, it returns a native notification.
 * Both notification types utilize the onClick function provided
 *
 * TODO: add polyfill so notifications work on windows 7 or lower
*/
export const showNotification = (text, onClick) => {
  if (isNative()) {
    const notification = new Notification('Molecule Notification', {
      body: text
    });
    notification.onclick = onClick;
    return null;
  }
  return <NotificationComponent onClick={onClick} text={text} />;
};
