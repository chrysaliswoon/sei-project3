import Cards from "../accountOverview/cardsOverview";
import TestCards from "../../../assets/testAccounts/dbs.jpeg"

export default function Accounts() {
  return (
    <div>
      <div className="flex py-8">
        <h1 className="uppercase font-bold">Accounts</h1>
      </div>
      <div>
              <Cards url={TestCards}/>
      </div>
    </div>
  );
}
