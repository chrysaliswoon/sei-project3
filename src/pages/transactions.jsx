import SideNavigation from "../components/navigation/navbar";
import TransactionTable from "../components/features/transactions/transactionTable";
import FilterNav from "../components/features/transactions/filter";
import Button from "../components/buttons/button";

export default function Transaction() {
  const button = (
    <Button
      css="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium"
      description="Year"
    />
  )
    const button2 = (
      <Button
        css="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium"
        description="Month"
      />
    );
    const button3 = (
      <Button
        css="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium"
        description="Day"
      />
    );
      const button4 = (
        <Button
          css="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium"
          description="All"
        />
      );
      const button5 = (
        <Button
          css="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium"
          description="Income"
        />
      );
      const button6 = (
        <Button
          css="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium"
          description="Expense"
        />
      );
  
  return (
    <div className="flex">
      <div className="flex flex-col px-4 py-8 border-r flex-none">
        <SideNavigation />
      </div>
      <div className="p-4 m-8 flex-auto w-64">
        <h1 className="uppercase font-bold">Financial Transactions</h1>
        <p>Have an overview of your financial transactions here</p>
        <div className="py-5">
          <FilterNav button={button} button2={button2} button3={button3} />
        </div>
        <div className="py-4">
          <FilterNav button={button4} button2={button5} button3={button6} />
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}
