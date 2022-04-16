import SideNavigation from "../components/navigation/navbar";
import Button from "../components/buttons/button";

export default function Transaction() {
  return (
    <div className="flex">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNavigation />
      </div>
      <div className="w-md h-full p-4 m-8 overflow-y-auto">
        <h1 className="uppercase font-bold">Financial Transactions</h1>
        <p>Have an overview of your financial transactions here</p>
        <div className="bg-slate-500 px-10">
        </div>
      </div>
    </div>
  );
}
