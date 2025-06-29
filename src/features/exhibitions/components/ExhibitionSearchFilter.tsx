"use client";

export default function ExhibitionSearchFilter() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 mb-10">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <label className="font-bold text-xl mr-4" htmlFor="search">Search exhibitions</label>
        <input id="search" type="text" placeholder="Search..." className="flex-1 border-b-2 border-black bg-transparent px-2 py-1 text-lg outline-none" />
        <button className="ml-2 text-2xl">🔍</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <select className="border-2 border-black px-4 py-2 font-bold text-lg bg-white dark:bg-black">
          <option>All types</option>
        </select>
        <select className="border-2 border-black px-4 py-2 font-bold text-lg bg-white dark:bg-black">
          <option>All Years</option>
        </select>
        <select className="border-2 border-black px-4 py-2 font-bold text-lg bg-white dark:bg-black">
          <option>All locations</option>
        </select>
        <select className="border-2 border-black px-4 py-2 font-bold text-lg bg-white dark:bg-black">
          <option>Relevance</option>
        </select>
      </div>
    </div>
  );
} 