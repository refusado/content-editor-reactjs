import { useState, useEffect } from "react";
import Editor from "./components/Editor";
import Menu from "./components/Menu";

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
  const randomIndex = Math.floor(Math.random() * gradients.length);

  return gradients[randomIndex];
}

const currentNote = 1;

export default function App() {
  const [bgGradient, setBgGradient] = useState(getRandomGradient);
  useEffect(() => {}, [ bgGradient ]);

  return (
    <div className={"h-screen text-zinc-900 flex justify-center items-center " + bgGradient}>
      <div
        className="@container flex bg-white w-11/12 max-w-screen-2xl h-5/6 max-h-screen mx-auto rounded-xl border border-black/20 shadow-md overflow-hidden resize">
        <Menu onClickEvent={() => setBgGradient(getRandomGradient())} activeNote={currentNote} />
        <div className="flex overflow-y-auto overflow-x-hidden h-full grow">
          <main className="flex-1">
            <Editor noteId={currentNote}></Editor>
          </main>
        </div>
      </div>
    </div>
  );
}
