import note from "./note";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { lowlight } from "lowlight";
import "highlight.js/styles/github-dark.css";

export default function Editor() {
  const editor = useEditor({
    content: note,
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
          class: "w-0 min-w-full shadow-md shadow-black/20",
        },
      }),
    ],
    editorProps: {
      attributes: {
        class: "p-3 rounded-md focus:bg-zinc-100 focus:cursor-auto duration-150",
      },
    },
  });

  return (
    <EditorContent
      className="prose w-full max-w-3xl min-w-none mx-auto my-16 cursor-pointer"
      editor={editor}
      spellCheck="false"
    />
  );
}
