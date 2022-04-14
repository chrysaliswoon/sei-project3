import Cards from "../accountOverview/cardsOverview";
import data from "../../../testData/cards"

export default function Accounts() {
  // const [balance, setBalance] = useState(data)
  const cardBalance =
    data.map(({ accountBalance }) => (
        <h3>${accountBalance}</h3>
    ));
  
  return (
    <div className="grid grid-cols-2 gap-4 py-8">
      <div>
        <h1 className="uppercase font-bold">Accounts</h1>
        <Cards />
      </div>
      <div>
        {cardBalance}
        <p>Current balance</p>
        <h3>$1,430</h3>
        <p>Income</p>
        <h3>$1,430</h3>
        <p>Expenses</p>
      </div>
    </div>
  );
}
