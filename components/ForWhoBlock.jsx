/**
 * 
 * @param {{ title: string,goal: string,goals: string[] }} props 
 * @returns 
 */
module.exports = function ForWhoBlock({ title,goal,goals}) {
    
    return (
      <details class="group">
        <summary
          class="flex items-center justify-between cursor-pointer 
        py-3 px-4 border-y border-y-gray-300 mb-2"
        >
          <p class="text-lg font-medium text-gray-800 lg:text-xl ">{title}</p>
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
        </summary>

        <div class="py-1 px-4 leading-relaxed text-gray-700">
          <ul>
            <li class="font-bold mb-2 mr-2">{goal}</li>

            {goals.map((item, index) => (
              <li key={index} class="flex items-start flex-row mb-1.5">
                <i class="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                <div class="">
                  <p>{item}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </details>
    );
}