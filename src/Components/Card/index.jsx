import styles from './styles.module.css'
import star from '../../assets/star.png'

export default function Card(item) {
    let label;
    if (item.openSpots === 0) {
        label = <span>Sold</span>
    } else if (item.location) {
        label = <span>{item.location}</span>
    }

    return (
        <article className={styles.card} id={item.coverImg}>
            <p className={styles.label}>{label}</p>
            <img
                src={`./images/${item.coverImg}`}
                alt={item.title}
                className={styles.image}
            />
            <p>
                <img src={star} alt="star" className={styles.star} />
                <span className={styles.stars}>{item.stats.rating}</span>
                <span className={styles.gray}>({item.stats.reviewCount})</span>
                <span className={styles.gray}>·{item.location}</span>
            </p>
            <p>{item.title}</p>
            <p>
                <span className={styles.bold}>From ${item.price} / </span>
                <span className={styles.gray}>person</span>
            </p>
            
        </article>
    )
}