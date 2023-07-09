import notes from "../data/notes-content";
import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/react";
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
import BubbleMenuButton from "./BubbleMenuButton";

// eslint-disable-next-line react/prop-types
export default function Editor({ noteId }) {
  const note = notes.find(note => note.id == noteId).content;

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
          "p-3 rounded-md focus:bg-slate-100 focus:cursor-auto duration-75",
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
      {editor && (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;

            return currentLineText == "/";
          }}
        >
          <div 
            className="flex flex-col bg-zinc-50 rounded-md border border-zinc-300 divide-y divide-zinc-300 shadow-lg text-black w-fit translate-y-1/2"
          >
            <button
              className="flex py-2 px-5 items-center gap-3 hover:bg-zinc-100"
              onClick={() => editor.chain().focus().clearNodes().run()}
            >
              <RxFontBold className="w-8 h-8 bg-white border border-zinc-200 rounded-sm shadow-sm"/>
              <div className="text-left">
                <p className="font-black text-sm">Texto</p>
                <p className="opacity-60 text-xs">Comece a escrever com um texto comum</p>
              </div>
            </button>
            <button
              className="flex py-2 px-5 items-center gap-3 hover:bg-zinc-100"
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            >
              <RxFontItalic className="w-8 h-8 bg-white border border-zinc-200 rounded-sm shadow-sm"/>
              <div className="text-left">
                <p className="font-black text-sm">Título</p>
                <p className="opacity-60 text-xs">Escreva o título principal</p>
              </div>
            </button>
            <button
              className="flex py-2 px-5 items-center gap-3 hover:bg-zinc-100"
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            >
              <RxCode className="w-8 h-8 bg-white border border-zinc-200 rounded-sm shadow-sm"/>
              <div className="text-left">
                <p className="font-black text-sm">Código</p>
                <p className="opacity-60 text-xs">Escreva um bloco de código</p>
              </div>
            </button>
            <button
              className="flex py-2 px-5 items-center gap-3 hover:bg-zinc-100"
              onClick={() => editor.chain().focus().toggleList().run()}
            >
              <RxChevronDown className="w-8 h-8 bg-white border border-zinc-200 rounded-sm shadow-sm"/>
              <div className="text-left">
                <p className="font-black text-sm">Lista</p>
                <p className="opacity-60 text-xs">Comece uma nova lista</p>
              </div>
            </button>
          </div>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className="flex bg-zinc-50 rounded-md border border-zinc-300 divide-x divide-zinc-300 shadow-lg text-black"
          editor={editor}
        >
          <BubbleMenuButton>
            Text <RxChevronDown />
          </BubbleMenuButton>
          <BubbleMenuButton>
            <RxChatBubble /> Comment
          </BubbleMenuButton>
          <div className="flex items-center divide-x divide-zinc-300">
            <BubbleMenuButton
              onClick={() => { editor.chain().focus().toggleBold().run() }}
              data-format-active={editor.isActive('bold')}
            >
              <RxFontBold />
            </BubbleMenuButton>
            <BubbleMenuButton
              onClick={() => { editor.chain().focus().toggleItalic().run() }}
              data-format-active={editor.isActive('italic')}
            >
              <RxFontItalic />
            </BubbleMenuButton>
            <BubbleMenuButton
              onClick={() => { editor.chain().focus().toggleStrike().run() }}
              data-format-active={editor.isActive('strike')}
            >
              <RxStrikethrough />
            </BubbleMenuButton>
            <BubbleMenuButton
              onClick={() => { editor.chain().focus().toggleCode().run() }}
              data-format-active={editor.isActive('code')}
            >
              <RxCode />
            </BubbleMenuButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
