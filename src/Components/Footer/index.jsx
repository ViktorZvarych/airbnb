import { useState } from 'react'
import styles from './footer.module.css'

export default function Footer() {
    const [currentYear, setCurrentYear] = useState((new Date()).getFullYear());

    return (
        <div className={styles.footer}>
            <p><small>© {currentYear} Viktor Zvarych</small></p>
            <p><small>Designed by Scrimba</small></p>
        </div>
    )
}
