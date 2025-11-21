import { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { FaGithub } from 'react-icons/fa';

const years = [2025, 2024, 2023];

export const Github = () => {
  const [calendarYear, setCalendarYear] = useState<number>(2025);

  const theme = {
    light: ["#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280", "#374151"],
    dark: ["#374151", "#6b7280", "#9ca3af", "#d1d5db", "#e5e7eb"],
  };

  return (
    <section className="github-section min-h-[400px] flex flex-col items-center justify-center py-10 px-4 sm:px-8">
      <h2 className=" flex items-center sm:text-5xl font-bold bebas tracking-wider mb-6 text-center bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
        <FaGithub className="inline-block mr-2 text-gray-400 " />
        GitHub Contributions
      </h2>
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 w-full max-w-5xl shadow-lg">
          <GitHubCalendar
            username="bnaveenbharathi"
            year={calendarYear}
            blockSize={14}
            blockMargin={4}
            fontSize={16}
            theme={theme}
            colorScheme="dark"
          />
        </div>
        <div className="flex gap-3 justify-center mt-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setCalendarYear(year)}
              className={`px-4 py-2 rounded-lg font-semibold montserrat transition-all border-2 focus:outline-none ${calendarYear === year ? 'bg-gray-700 text-gray-100 border-gray-500' : 'bg-gray-900 text-gray-400 border-gray-700 hover:bg-gray-700 hover:text-gray-100'}`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
