module.exports = function ({ to, children }) {
    return (
        <a href={to} className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">
            {children}
        </a>
    );
};