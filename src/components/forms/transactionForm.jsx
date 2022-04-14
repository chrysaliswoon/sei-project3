import Button from "../buttons/button"

export default function TransactionForm() {
  return (
    <div className="mx-auto max-w-6xl bg-gray-200 py-20 px-12 lg:px-24 shadow-xl mb-24">
      <form>
        <Button
          css="bg-pink-500 font-bold py-2 px-4 border-b-4 rounded-full"
          type="submit"
          name="expenseSubmit"
          id="expenseSubmit"
          description="Expense"
        />
        <Button
          css="bg-green-500 font-bold py-2 px-4 border-b-4 rounded-full"
          type="submit"
          name="incomeSubmit"
          id="incomeSubmit"
          description="Income"
        />
      </form>
    </div>
  );
}
