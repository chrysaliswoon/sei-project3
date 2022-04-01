import styles from '../stylesheet/login.module.css'
import logo from '../components/images/logo.png'

function Login() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
      <img src={logo} className={styles.logo} alt={styles.logo} />
        <p>
          Insert Login Form Here
        </p>
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

export default Login;
