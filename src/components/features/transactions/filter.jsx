export default function FilterNav({ button, button2, button3 }) {
  return (
    <div>
      <nav>
        <div className="flex items-center justify-between content-center h-20">
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
