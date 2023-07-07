/* eslint-disable react/no-unescaped-entities */

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { note } from "./note";

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    content: note,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    },
    injectCSS: false
  });

  return (
    <EditorContent editor={ editor } className="prose w-full max-w-3xl min-w-none mx-auto mt-16 outline-0" />
  );
}