import React, { useRef } from "react";
import { useForm } from "react-hook-form";

export default function AccountForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(JSON.stringify(data));
  };

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
    <div className="bg-gray-100 mx-auto max-w-6xl bg-gray-200 py-20 px-12 lg:px-24 shadow-xl mb-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="-mx-3 md:flex mb-6"></div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="accountName"
              >
                Account Name
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                type="text"
                name="accountName"
                id="accountName"
                {...register("accountName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.accountName?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.accountName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
              )}
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="accountType"
              >
                Account Type
              </label>
              <select
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                id="accountType"
              >
                <option value="debit">Debit</option>
                <option value="debit">Credit</option>
                <option value="debit">Investment</option>
                <option value="debit">Insurance</option>
              </select>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="accountDescription"
            >
              Account Description
            </label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              type="text"
              name="accountDescription"
              id="accountDescription"
              {...register("accountDescription", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.accountDescription?.type === "required" && (
              <p>This field is required</p>
            )}
            {errors?.accountDescription?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
