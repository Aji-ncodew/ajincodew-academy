/**
 * 
 * @param {{ qst: string, ans: string[] }} props 
 * @returns 
 */
module.exports = function FaqBlock({ qst, ans }) {
  return (
    <details
      className="group rounded-lg border border-gray-200 shadow-md"
    >
      <summary className="flex items-center justify-between p-3 rounded-lg cursor-pointer ">
        <h5 className="font-bold  text-gray-800">{qst}</h5>

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

      <p className="px-4 my-3 leading-relaxed text-gray-800 grid grid-cols-1 ">
        {ans.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>
    </details>
  );
};
