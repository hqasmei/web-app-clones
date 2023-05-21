import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center text-center">
      <div className="w-full max-w-sm  md:max-w-3xl">
        <div className="flex flex-col items-center  justify-center space-y-2">
          <Link
            href="/slayerai"
            className="bg-gray-900 px-4 py-2 rounded-md hover:bg-gray-700"
          >
            Slayer
          </Link>
        </div>
      </div>
    </main>
  );
}
