import styles from './Banner.module.css';
import banner from './Banner1.png';
 
export default function Banner() {
    return(
        <>
            <img className={styles.image} src={banner} alt='Banner do Meteora'/>
        </>
    )
}