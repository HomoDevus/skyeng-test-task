import ReactDOMClient from 'react-dom/client'
import styles from './notify.module.css'

let notificationsContainerRoot

function Notification({ level, children }) {
  return (
    <div className={`notification ${styles.notification} ${styles[level]}`}>
      {children}
    </div>
  )
}

export function notify(message, level) {
  const notificationsContainerElement = document.getElementById(
    'notifications-container',
  )

  if (notificationsContainerElement && level === 'error') {
    if (notificationsContainerRoot) {
      notificationsContainerRoot.unmount()
    }

    notificationsContainerRoot = ReactDOMClient.createRoot(
      notificationsContainerElement,
    )
    notificationsContainerRoot.render(
      <Notification level={level}>{message}</Notification>,
    )

    setTimeout(() => {
      if (notificationsContainerRoot) {
        notificationsContainerRoot.unmount()
        notificationsContainerRoot = undefined
      }
    }, 5000)
  }
}
