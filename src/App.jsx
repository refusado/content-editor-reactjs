import Editor from "./components/Editor";

export default function App() {
  function getBgGradient() {
    const gradients = [
      "bg-gradient-to-r from-rose-900 via-amber-800 to-rose-400",
      "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
      "bg-gradient-to-r from-yellow-200 via-red-500 to-fuchsia-500",
      "bg-gradient-to-br from-violet-500 to-orange-300",
      "bg-gradient-to-br from-red-900 via-violet-200 to-orange-500",
      "bg-gradient-to-br from-sky-400 to-indigo-900"
    ]

    const min = 0;
    const max = gradients.length - 1;
    const randomPos = Math.floor(Math.random() * (max - min + 1) + min);

    return gradients[randomPos];
  }

  const notes = [
    "Introdução ao Next.js: Construindo um aplicativo React server-side renderizado",
    "Iniciando um projeto React com Vite e adicionando Tailwind CSS",
    "Adicionando animações e transições suaves em um projeto React com Framer Motion",
    "Integração de mapas interativos em um aplicativo React com Mapbox",
    "Otimizando o desempenho de um aplicativo React com Lazy Loading e Code Splitting",
    "Construindo um aplicativo de chat em tempo real com React e Socket.io",
    "Implementando um sistema de busca em um aplicativo React utilizando a biblioteca Algolia",
    "Introdução ao Redux: Gerenciando o estado global de um aplicativo React",
    "Construindo uma aplicação de previsão do tempo com React e uma API de clima",
    "Adicionando suporte a internacionalização em um projeto React com a biblioteca react-intl",
    "Implementando um recurso de arrastar e soltar (drag and drop) em um aplicativo React com React DnD",
    "Integração de autenticação social (Google, Facebook, etc.) em um aplicativo React com Firebase"
  ];
  const currentNote = 1;

  const notesListItems = notes.map((name, index) => {
    const highlightStyles = "hover:underline cursor-pointer text-zinc-800";
    const defaultStyles = "hover:underline cursor-pointer";

    return (
      <li key={index} className={index === currentNote ? highlightStyles : defaultStyles}>
        <a href="#">{name}</a>
      </li>
    )
  });

  return (
    <div className={"h-screen text-zinc-900 flex justify-center items-center " + getBgGradient()}>
      <div className="bg-white w-11/12 max-w-screen-2xl block h-5/6 mx-auto rounded-xl border border-black/20 shadow-md overflow-hidden">
        <aside className="w-60 lg:w-80 h-5/6 bg-zinc-100 border border-black/10 border-r-zinc-200 rounded-l-xl overflow-y-auto fixed z-20">
          <div className="p-4 bg-zinc-100 flex gap-2 group w-full sticky top-0 z-30">
            <button className="w-4 h-4 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-4 h-4 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-4 h-4 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
          <ul className="m-4 space-y-4 text-zinc-500 sticky">
            { notesListItems }
          </ul>
        </aside>
        <div className="overflow-y-auto overflow-x-hidden h-full flex sticky pl-60 lg:pl-80">
          <main className="p-4 flex-1">
            <Editor></Editor>
          </main>
        </div>
      </div>
    </div>
  );
}
