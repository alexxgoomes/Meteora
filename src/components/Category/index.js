import styles from './Category.module.css';
import { Link } from 'react-router-dom';

export default function Card({category, image, title}) {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`${category}`}>
                <img className={styles.image} src={image} alt={title} />
                <p>{title}</p>
            </Link>
        </div>
    )
} 