import Link from "next/link";

export default function Sidebar() {
  // List of projects and initiatives
  const items = [
    { name: "Project Alpha", link: "/dashboard?project=alpha" },
    { name: "Workflow Beta", link: "/dashboard?workflow=beta" },
    { name: "Custom Model", link: "/dashboard?model=custom" }
  ];

  return (
    <aside className="w-64 bg-gray-800 text-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Projects &amp; Initiatives</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.link} className="hover:text-[var(--accent-color)]">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Model Selector</h3>
        <select className="w-full p-2 rounded bg-gray-700 text-white">
          <option value="default">Default GPT Model</option>
          <option value="custom">Add New Model...</option>
        </select>
      </div>
    </aside>
  );
}
