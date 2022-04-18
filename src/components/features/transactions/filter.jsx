export default function FilterNav({ button, button2, button3 }) {
  return (
    <div>
      <nav className="bg-gray-400">
        <div className="relative flex items-center justify-between h-20">
          <div className="hidden sm:block sm:ml-5">
            <div className="flex space-x-20">
              {button}
              {button2}
              {button3}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
