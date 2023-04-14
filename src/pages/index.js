import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" bg-slate-700 text-left text-black">
      Hello from the Next js app
    </div>
  );
}
