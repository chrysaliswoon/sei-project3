import React from "react";
import {useForm} from 'react-hook-form'

export default function RegisterForm() {
  // const { register, handleSubmit } = useForm();
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (event) =>
    
        fetch("/moneybankbackend.herokuapp.com/moneybank/register", {
          method: "POST",
          body: JSON.stringify({ names: event.target.name.value }),
          headers: {
            "Content-Type": "application/json",
          },
        })
    // console.log(data);

  
      // const handleSubmit = (event) => {
      //   event.preventDefault();
      //   console.log(event.target.name.value)
      //   console.log(event.target.email.value)
      //   console.log(event.target.confirmEmail.value);
      //   console.log(event.target.password.value);
      //   console.log(event.target.confirmPassword.value);

      //   fetch("/moneybankbackend.herokuapp.com/moneybank/register", {
      //     method: "POST",
      //     body: JSON.stringify({ names: event.target.name.value }),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      //     .then((res) => res.json())
      //     .then((resJson) => {
      //       props.handleAddUser(resJson);
      //     })
      //     .catch((error) => console.log({ Error: error }));
      // };

  return (
    <div className="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="name"
            >
              Full Name
            </label>
            <input
              {...register("name", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.name?.type === "required" && <p>This field is required</p>}
            {errors?.name?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                type="email"
                name="email"
                id="email"
              ></input>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="email"
              >
                Confirm Email Address
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                type="email"
                name="confirmEmail"
                id="confirmEmail"
              ></input>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                type="password"
                name="password"
                id="password"
              ></input>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="password"
              >
                Confirm Password
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              ></input>
            </div>
          </div>
          <div className="-mx-3 md:flex mt-2">
            <div className="md:w-full px-3">
              <input
                className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
                type="submit"
                name="submit"
                id="submit"
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
