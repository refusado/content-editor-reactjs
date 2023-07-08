import note from "./note";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { lowlight } from "lowlight";
import "highlight.js/styles/github-dark.css";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";

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
        class:
          "p-3 focus:p-4 rounded-md focus:bg-slate-100 focus:cursor-auto duration-75",
      },
    },
  });

  return (
    <>
      <EditorContent
        className="prose w-full max-w-3xl min-w-none mx-auto my-16 cursor-pointer"
        editor={editor}
        spellCheck="false"
      />
      {editor && <BubbleMenu
        className="flex bg-zinc-50 rounded-md border border-zinc-300 divide-x divide-zinc-300 shadow-lg text-black"
        editor={editor}
      >
        <button className="hover:bg-black/5 px-3 py-1 flex items-center gap-1.5 font-medium leading-none text-sm">
          Text
          <RxChevronDown />
        </button>
        <button className="hover:bg-black/5 px-3 py-1 flex items-center gap-1.5 font-medium leading-none text-sm">
          <RxChatBubble />
          Comment
        </button>
        <div className="flex items-center divide-x divide-zinc-300">
          <button
            onClick={() => { editor.chain().focus().toggleBold().run() }}
            className={
              "hover:bg-black/5 px-2 py-1 leading-none " +
              (editor.isActive('bold') ? 'text-zinc-400' : '')
            }
          >
            <RxFontBold />
          </button>
          <button
            onClick={() => { editor.chain().focus().toggleItalic().run() }}
            className={
              "hover:bg-black/5 px-2 py-1 leading-none " +
              (editor.isActive('italic') ? 'text-zinc-400' : '')
            }
          >
            <RxFontItalic />
          </button>
          <button
            onClick={() => { editor.chain().focus().toggleStrike().run() }}
            className={
              "hover:bg-black/5 px-2 py-1 leading-none " +
              (editor.isActive('strike') ? 'text-zinc-400' : '')
            }
          >
            <RxStrikethrough />
          </button>
          <button
            onClick={() => { editor.chain().focus().toggleCode().run() }}
            className={
              "hover:bg-black/5 px-2 py-1 leading-none " +
              (editor.isActive('code') ? 'text-zinc-400' : '')
            }
          >
            <RxCode />
          </button>
        </div>
      </BubbleMenu>
      }
    </>
  );
}
