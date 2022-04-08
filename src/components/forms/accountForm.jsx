import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Button from '../buttons/button'

export default function AccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(JSON.stringify(data));
  };

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
        <div>
          <Button
            css="md:w-0.9 bg-gray-500 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-300 hover:border-gray-100 rounded-full"
            type="button"
            name="newAccount"
            id="newAccount"
            description="Add another account"
          />
        </div>
        <div>
          <Button
            css="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
            type="submit"
            name="submit"
            id="submit"
            description="Submit"
          />
        </div>
      </form>
    </div>
  );
}
