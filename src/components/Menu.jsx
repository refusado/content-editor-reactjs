const notesResponse = await fetch('./src/data/mock-notes.json');
const notesData = await notesResponse.json();
const titles = notesData.map(note => note.title);

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
    <aside className="w-60 lg:w-80 h-full bg-zinc-100 border border-black/10 border-r-zinc-200 rounded-l-xl overflow-y-auto resize-x">
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