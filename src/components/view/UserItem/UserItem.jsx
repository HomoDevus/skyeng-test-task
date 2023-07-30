import { useEffect, useState } from 'react'
import usersAPI from '../../../api/users'
import styles from './UserItem.module.css'

export default function UserItem({ avatarUrl, login }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    if (isExpanded) {
      usersAPI.userInfo(login).then(res => setUserInfo(res.data))
    }
  }, [isExpanded, login])

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <img className={styles.avatar} src={avatarUrl} alt='User avatar' />
          <p>{login}</p>
        </div>
        <button
          className={styles.expandButton}
          onClick={() => setIsExpanded(prev => !prev)}
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>
      {isExpanded && userInfo && (
        <div className={styles.body}>
          {userInfo.name && <p className={styles.userName}>{userInfo.name}</p>}
          {userInfo.bio && <p className={styles.description}>{userInfo.bio}</p>}
          {(userInfo.location ||
            userInfo.public_repos ||
            userInfo.followers) && (
            <p className={styles.additionalInfo}>
              {[
                userInfo.location && userInfo.location,
                userInfo.public_repos && '🗃️ ' + userInfo.public_repos,
                userInfo.followers &&
                  userInfo.followers &&
                  '👥 ' + userInfo.followers,
              ]
                .filter(item => item)
                .join(' · ')}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
