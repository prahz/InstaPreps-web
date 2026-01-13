import React from "react";

export default function PdfModal({ pdf, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 h-5/6 rounded p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-3 py-1 bg-gray-800 text-white rounded"
        >
          Close
        </button>
        <iframe
          src={pdf}
          title="PDF Viewer"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
