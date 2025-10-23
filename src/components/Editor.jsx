import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

export default function Editor() {
  const editorRef = useRef(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: editorRef.current,
      fromElement: false,
      height: '600px',
      storageManager: false,
      plugins: [], // optional
    });
    
    // we'll register components/blocks later
    return () => editor.destroy();
  }, []);
  return <div ref={editorRef} />;
}
