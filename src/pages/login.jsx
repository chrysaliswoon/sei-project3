import LoginForm from '../components/forms/loginForm'
export default function LoginPage({setLoggedIn}) {
  
  return (
    <div>
      <LoginForm setLoggedIn={setLoggedIn}/>
    </div>
  );
}
