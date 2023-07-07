/* eslint-disable react/no-unescaped-entities */

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { note } from "./note";

import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { lowlight } from "lowlight";

import xml from "highlight.js/lib/languages/xml"
import css from "highlight.js/lib/languages/css"
import js from "highlight.js/lib/languages/javascript"
import bash from "highlight.js/lib/languages/bash"

import 'highlight.js/styles/github-dark.css'

export default function Editor() {
  lowlight.registerLanguage('xml', xml);
  lowlight.registerLanguage('css', css);
  lowlight.registerLanguage('js', js);
  lowlight.registerLanguage('bash', bash);

  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight
      })
    ],
    content: note,
    editorProps: {
      attributes: {
        class: 'p-3 rounded-md focus:bg-zinc-100 focus:cursor-auto'
      }
    },
    injectCSS: false
  });

  return (
    <EditorContent editor={ editor } spellCheck="false" className="prose w-full max-w-3xl min-w-none mx-auto my-16 cursor-pointer" />
  );
}