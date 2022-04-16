import SideNavigation from "../components/navigation/navbar";

export default function ProfilePage() {
  return (
    <div className="flex">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className="w-md h-full p-4 m-8 overflow-y-auto">
        <h1 className="uppercase font-bold">Profile Page</h1>
        <div>
          <p>This shows the profile info</p>
        </div>
      </div>
    </div>
  );
}
