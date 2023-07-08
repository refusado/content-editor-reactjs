import { useState, useEffect } from "react";
import Editor from "./components/Editor";
import Menu from "./Menu";

export default function App() {
  const [bgGradient, setBgGradient] = useState(getRandomGradient);
  useEffect(() => {}, [ bgGradient ]);

  function getRandomGradient() {
    const gradients = [
      'bg-gradient-to-r from-emerald-500 to-emerald-900',
      'bg-gradient-to-r from-amber-200 via-yellow-200 to-yellow-400',
      'bg-gradient-to-br from-fuchsia-600 via-rose-500 to-pink-600',
      'bg-gradient-to-r from-blue-200 via-sky-300 to-cyan-200',
      'bg-gradient-to-r from-slate-500 via-sky-900 to-slate-800',
      'bg-gradient-to-r from-violet-500 to-purple-500',
      'bg-gradient-to-tr from-cyan-900 via-teal-900 to-emerald-900',
      'bg-gradient-to-br from-orange-700 via-orange-600 to-red-700',
      'bg-gradient-to-br from-violet-900 via-indigo-800 to-purple-900',
      'bg-gradient-to-r from-rose-900 via-amber-800 to-rose-400',
      'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400',
      'bg-gradient-to-br from-violet-500 to-orange-300',
      'bg-gradient-to-br from-sky-400 to-indigo-900'
    ]
    const max = gradients.length - 1;
    const randomIndex = Math.floor(Math.random() * (max - 0 + 1) + 0);

    return gradients[randomIndex];
  }

  return (
    <div className={"h-screen text-zinc-900 flex justify-center items-center " + bgGradient}>
      <div className="bg-white w-11/12 max-w-screen-2xl block h-5/6 mx-auto rounded-xl border border-black/20 shadow-md overflow-hidden">
        <Menu onClickEvent={() => setBgGradient(getRandomGradient())} activeNote="1" />
        <div className="overflow-y-auto overflow-x-hidden h-full flex sticky pl-60 lg:pl-80">
          <main className="p-4 flex-1">
            <Editor></Editor>
          </main>
        </div>
      </div>
    </div>
  );
}
