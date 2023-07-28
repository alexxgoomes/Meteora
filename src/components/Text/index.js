import styles from './Text.module.css';

export default function Text({children}) {
    return (
        <div className={styles.text}>
            {children}
        </div>
    )
}