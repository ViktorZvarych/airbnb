import logo from '../../assets/airbnb-logo.png'
import styles from './styles.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <img src={logo} alt="logo" className='logo' />
            </nav>
        </header>
    )
}
