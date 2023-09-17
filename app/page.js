import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 p-4">
          {/* Add your sidebar content here */}
          <p>Sidebar Content</p>
        </aside>

        {/* Main Area */}
        <main className="w-3/4 p-4">
          {/* Add your main area content here */}
          <p>Main Area Content</p>
        </main>
      </div>
    </main>
  );
}
