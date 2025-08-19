import React, { useState, useRef } from "react";
import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiLink,
  FiImage,
  FiVideo,
  FiList,
  FiLinkedin,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
  FiGlobe,
  FiMinus,
} from "react-icons/fi";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const editorRef = useRef(null);
  // Formatting handler
  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Title */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-4 py-3 text-2xl font-semibold border-b focus:outline-none bg-white"
      />

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 px-3 py-2 border-b bg-white overflow-x-auto">
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => handleFormat("bold")}
        >
          <FiBold />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => handleFormat("italic")}
        >
          <FiItalic />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => handleFormat("underline")}
        >
          <FiUnderline />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => handleFormat("createLink", prompt("Enter URL:"))}
        >
          <FiLink />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() =>
            handleFormat("insertImage", prompt("Enter image URL:"))
          }
        >
          <FiImage />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => handleFormat("insertOrderedList")}
        >
          <FiList />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => handleFormat("insertUnorderedList")}
        >
          <FiMinus />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => handleFormat("justifyLeft")}
        >
          <FiAlignLeft />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => handleFormat("justifyCenter")}
        >
          <FiAlignCenter />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => handleFormat("justifyRight")}
        >
          <FiAlignRight />
        </button>
        {/* Add more handlers as needed */}
      </div>

      {/* Writing Area */}
      <div
        ref={editorRef}
        contentEditable
        className="flex-1 p-4 bg-gray-50 focus:outline-none resize-none text-base leading-relaxed border"
        style={{ minHeight: "300px", overflowY: "auto" }}
        suppressContentEditableWarning={true}
      />
    </div>
  );
}
