import Cards from "../accountOverview/cardsOverview";

export default function Accounts() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="py-8">
        <h1 className="uppercase font-bold">Accounts</h1>
        <Cards />
      </div>
      <div>
        <h3>$1,430</h3>
        <p>Current balance</p>
        <h3>$1,430</h3>
        <p>Income</p>
        <h3>$1,430</h3>
        <p>Expenses</p>
      </div>
    </div>
  );
}
