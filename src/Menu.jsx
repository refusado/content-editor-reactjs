const titles = [
  'Introdução ao Next.js: Construindo um aplicativo React server-side renderizado',
  'Iniciando um projeto React com Vite e adicionando Tailwind CSS',
  'Adicionando animações e transições suaves em um projeto React com Framer Motion',
  'Integração de mapas interativos em um aplicativo React com Mapbox',
  'Otimizando o desempenho de um aplicativo React com Lazy Loading e Code Splitting',
  'Construindo um aplicativo de chat em tempo real com React e Socket.io',
  'Implementando um sistema de busca em um aplicativo React utilizando a biblioteca Algolia',
  'Introdução ao Redux: Gerenciando o estado global de um aplicativo React',
  'Construindo uma aplicação de previsão do tempo com React e uma API de clima',
  'Adicionando suporte a internacionalização em um projeto React com a biblioteca react-intl',
  'Implementando um recurso de arrastar e soltar (drag and drop) em um aplicativo React com React DnD',
  'Integração de autenticação social (Google, Facebook, etc.) em um aplicativo React com Firebase'
];

// eslint-disable-next-line react/prop-types
export default function Menu({ onClickEvent, activeNote }) {
  const notesListItems = titles.map((name, index) => {
    const highlightStyles = 'text-zinc-800';
    const defaultStyles = 'hover:underline cursor-pointer';
  
    return (
      <li key={index} className={index == activeNote ? highlightStyles : defaultStyles}>
        <a className={index == activeNote ? "cursor-default" : "cursor-pointer" } href="#">{name}</a>
      </li>
    )
  });

  return (
    <aside className="w-60 lg:w-80 h-5/6 bg-zinc-100 border border-black/10 border-r-zinc-200 rounded-l-xl overflow-y-auto fixed z-20">
      <div className="p-4 bg-zinc-100 flex gap-2 group w-full sticky top-0 z-30" onClick={onClickEvent}>
        <button className="w-4 h-4 rounded-full bg-zinc-300 group-hover:bg-red-400" />
        <button className="w-4 h-4 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
        <button className="w-4 h-4 rounded-full bg-zinc-300 group-hover:bg-green-400" />
      </div>
      <ul className="m-4 space-y-4 text-zinc-500 sticky">
        { notesListItems }
      </ul>
    </aside>
  );
}