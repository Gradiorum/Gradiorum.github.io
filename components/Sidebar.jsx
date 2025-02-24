import Link from "next/link";

export default function Sidebar() {
  // Placeholder list of projects/workflows
  const items = [
    { name: "Project Alpha", link: "/dashboard?project=alpha" },
    { name: "Workflow Beta", link: "/dashboard?workflow=beta" },
    { name: "Custom Model", link: "/dashboard?model=custom" }
  ];

  return (
    <aside className="w-64 bg-gray-800 text-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Projects & Workflows</h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.link} className="hover:text-accent">{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Model Selector</h3>
        {/* This is a placeholder – later you can add inputs to let users enter a model name and API key */}
        <select className="w-full p-2 rounded bg-gray-700 text-white">
          <option value="default">Default GPT Model</option>
          <option value="custom">Add New Model...</option>
        </select>
      </div>
    </aside>
  );
}
