import SuccessImage from '../assets/money.gif'
import { Link } from 'react-router-dom';

export default function RegistrationSuccess() {
    return (
      <div className="text-4xl font-normal leading-normal mt-0 mb-2 text-blue-800 text-center">
        <h1>
          We've received your registration!
        </h1>
            <img
                className="justify-center"
                src={SuccessImage} alt="success registration" />
          <Link
            to="/"
          >
            Click here to login to your account
          </Link>
      </div>
    );
}