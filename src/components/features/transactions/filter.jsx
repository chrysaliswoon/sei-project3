export default function FilterNav({ button, button2, button3, date }) {
  return (
    <div>
      <nav>
        <div className="flex items-center justify-between content-center h-20">
          <div className="hidden sm:block sm:ml-5">
            <div className="flex space-x-20">
              {button}
              {button2}
              {button3}
              <input className="bg-gray-500 text-white px-5 py-2 rounded-md text-sm font-medium" type="date" value={date}/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
