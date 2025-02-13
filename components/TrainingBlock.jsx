/**
 * 
 * @param {{ title: string,items: string[] }} props 
 * @returns 
 */
module.exports = function TrainingBlock({ title,items}) {
    
    return (
        <details className="group">
            <summary className="flex items-center justify-between cursor-pointer 
            py-3 px-4  border border-gray-300 border-b-0
            ">
                {/*  -border-0 */}
                <svg
            className="flex-shrink-0 mx-1 w-5 h-5 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <p className="text-base font-medium text-gray-800">
              {title}
              </p>
              {/* <i className="fa fa-chevron-down
              flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
              <i className="fa fa-chevron-up
              flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i> */}
            
            </summary>

            <div dir="ltr" className="py-3 px-4 leading-relaxed text-gray-700 border border-gray-300 text-left">
              <ul className="">                 
                {items.map((item, index) => (
                <li>
                    {item}
                </li>
                ))}
              </ul>
            </div>
        </details>
      


    );
}