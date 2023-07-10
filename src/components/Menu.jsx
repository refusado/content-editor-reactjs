const notesResponse = await fetch('./src/data/mock-notes.json');
const notesData = await notesResponse.json();

// eslint-disable-next-line react/prop-types
export default function Menu({ onClickEvent, activeNote }) {
  const notesListItems = notesData.map(note => {
    const highlightStyles = 'text-zinc-800';
    const defaultStyles = 'hover:underline cursor-pointer';
  
    return (
      <li
        key={note.id}
        className={note.id == activeNote ? highlightStyles : defaultStyles}
      >
        <a className={note.id == activeNote ? "cursor-default" : "cursor-pointer" } href={`/${note.id}`} >
          {note.title}
        </a>
      </li>
    )
  });

  return (
    <aside className="w-80 hidden @4xl:block h-full bg-zinc-100 border border-black/10 border-r-zinc-200 rounded-l-xl overflow-x-hidden overflow-y-auto resize-x">
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