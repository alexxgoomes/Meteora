import Category from 'components/Category';
import Text from 'components/Text';
import styles from './Categories.module.css';
import categories from 'components/json/categories.json';

export default function Cards() {
    return (
        <>
            <Text>
                <h3>Busque por categoria:</h3>
            </Text>
            <div className={styles.container}>
                {categories.map((category) => {
                    return (
                        <Category {...category} key={category.id}/>
                    )   
                })}
            </div>
        </>
    )
}