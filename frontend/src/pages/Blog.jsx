import React, { useState } from "react";
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
  const [content, setContent] = useState("");

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
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiBold />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiItalic />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiUnderline />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiLink />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiImage />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiVideo />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiList />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiLinkedin />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiAlignLeft />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiAlignCenter />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiAlignRight />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiMinus />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <FiGlobe />
        </button>
      </div>

      {/* Writing Area */}
      <textarea
        placeholder="Start writing your blog..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 p-4 bg-gray-50 focus:outline-none resize-none text-base leading-relaxed"
      />
    </div>
  );
}
