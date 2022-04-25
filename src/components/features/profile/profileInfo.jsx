import Button from "../../buttons/button";
import React, { useState, useEffect } from "react";
import { BACKEND } from "../../../utils";

export default function Profile({profilePic}) {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
    
    const getProfile = () => {
    const URL = BACKEND + "user";
    fetch(URL, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.name)
        setEmail(data.email)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="h-screen w-full">
      <div className="my-5">
        <p>This contains your profile information.</p>
      </div>
      <div className="max-w-[400px] w-full mx-auto p-8 px-8 relative justify-center items-center ">
        <form> 
          <div className="m-1 mr-2 w-40 h-40 rounded-full">
            <img src={profilePic} className="rounded-full" />
          </div>
          <div className="my-5">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user}
            ></input>
          </div>
          <div className="my-5">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={email}
            ></input>
          </div>
          <div className="my-5">
            <label htmlFor="photo">Profile Photo: </label>
            <input type="file" id="photo" name="photo"></input>
          <Button
            css="md:w-full bg-gray-900 text-white font-bold py-2 px-4 my-5 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
            type="submit"
            name="profile"
            id="profile"
            description="Update"
            value={profilePic}
          />
          </div>
        </form>
      </div>
    </div>
  );
}
