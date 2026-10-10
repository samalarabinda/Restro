import {useState, useEffect, React} from 'react'

const Darkmode = () => {
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <>
    <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="rounded-full bg-gray-200 px-4 py-1.5 dark:bg-gray-700 cursor-pointer"
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"  }
      </button>
    </>
  )
}

export default Darkmode