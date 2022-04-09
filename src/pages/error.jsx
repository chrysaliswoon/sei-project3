import errorImage from '../assets/error.svg'

export default function Error() {
    return (
        <div>
            <h1 className="text-5xl font-normal leading-normal mt-0 mb-2 text-blue-800 text-center">404 Error!</h1>
            <img src={errorImage} alt="404 Error"/>
            <p className="text-base font-normal leading-normal mt-0 mb-2 text-blue-800 text-center">We can't seem to find the page you're looking for!</p>
        </div>
    )
}