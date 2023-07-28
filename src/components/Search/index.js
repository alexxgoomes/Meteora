import styles from './Search.module.css';

export default function Search() {
    return (
        <div className={styles.container}>
            <input className={styles.search} type="search" placeholder="Digite o produto"/>
            <button className={styles.button}>Buscar</button>
        </div>
    )
}