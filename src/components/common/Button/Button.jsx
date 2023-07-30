import styles from './Button.module.css'

export default function Button({ styleType, children, ...props }) {
  return <button {...props} className={`${styles.button} ${styles[styleType]} ${props.className}`}>{children}</button>
}
