import styles from '../stylesheet/login.module.css'
import logo from '../components/images/logo.png'
import LoginForm from '../components/forms/loginForm'

export default function LoginPage() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.logo} alt={styles.logo} />
        <h3>Welcome Back!</h3>
        <LoginForm />
        <a
          className={styles.AppLink}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          New? Register Here!
        </a>
        <a
          className={styles.AppLink}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forgot Password?
        </a>
      </header>
    </div>
  );
}
