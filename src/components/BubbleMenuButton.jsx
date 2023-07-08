export default function BubbleMenuButton(props) {
  return (
    <button
      className="hover:bg-black/5 px-2 py-1 flex items-center gap-1.5 font-medium leading-none text-sm data-[format-active=true]:text-zinc-400"
      { ...props }
    />
  );
}
