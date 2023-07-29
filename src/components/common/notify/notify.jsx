import ReactDOM from 'react-dom'
import styles from './notify.module.css'

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
    ReactDOM.render(
      <Notification level={level}>{message}</Notification>,
      notificationsContainerElement,
    )

    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(notificationsContainerElement)
    }, 5000)
  }
}
