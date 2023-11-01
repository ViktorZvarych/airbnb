import styles from './styles.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h2 className={styles.heroTitle}>Online Experiences</h2>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}