import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Button from "../buttons/button";

export default function RegisterForm({profile, nextStage}) {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const email = useRef({});
  email.current = watch("email", "");

  const onSubmit = async (event) => {
    profile(event)
    nextStage()
  };

  return (
    <div className="mx-auto max-w-6xl bg-gray-200 py-20 px-12 lg:px-24 shadow-xl mb-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="-mx-3 md:flex mb-6">
            <label
              className="uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              type="text"
              name="name"
              id="name"
              {...register("name", {
                required: true,
              })}
            />
            {errors?.name?.type === "required" && <p>This field is required</p>}
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                type="email"
                name="email"
                id="email"
                {...register("email", {
                  required: true,
                })}
              ></input>
              {errors?.email?.type === "required" && (
                <p>This field is required</p>
              )}
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="email"
              >
                Confirm Email Address
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                type="email"
                name="confirmEmail"
                id="confirmEmail"
                {...register("confirmEmail", {
                  required: true,
                  validate: (value) => value === email.current,
                })}
              ></input>
              {errors?.confirmEmail && <p>The email don't match</p>}
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                type="password"
                name="password"
                id="password"
                {...register("password", {
                  required: true,
                })}
              ></input>
              {errors?.password?.type === "required" && (
                <p>This field is required</p>
              )}
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password.current,
                })}
              ></input>
              {errors?.confirmPassword && <p>The passwords don't match</p>}
            </div>
          </div>
          <div className="-mx-3 md:flex mt-2">
            <div className="md:w-full px-3">
              <Button
                css="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
                type="submit"
                name="register"
                id="register"
                description="Submit"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
