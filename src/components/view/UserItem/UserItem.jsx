import styles from './UserItem.module.css'

export default function UserItem({ avatarUrl, login }) {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={avatarUrl} />
      <p>{login}</p>
    </div>
  )
}
