import Text from 'components/Text';
import styles from './Products.module.css';
import products from 'components/json/products.json';
import Product from 'components/Product';

export default function Products() {
    return (
        <>
            <Text>
                <h3>Produtos que estão bombando!</h3>
            </Text>
            <div className={styles.container}>
                {products.map((product) => {
                    return <Product {...product} key={product.id} />
                })}
            </div>
        </>
    )
}