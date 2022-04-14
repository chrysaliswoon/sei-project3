
import TransactionForm from '../components/forms/transactionForm'

export default function () {
    return (
      <div className="bg-gray-100">
        <h1 className="text-center uppercase tracking-wide text-black text-xl font-bold mb-2 py-5">
          New Transaction
            </h1>
            <TransactionForm />
      </div>
    );
}