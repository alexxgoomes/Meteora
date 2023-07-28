import Button from 'components/Button';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';

export default function Product({ image, title, product, description, price }) {
    return (
        <Link className={styles.link} to={`/${product}`}>
            <img src={image} alt={title} />
            <div className={styles.text}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>{price}</p>
                <Button>Ver mais</Button>
            </div>
        </Link>
    )
}