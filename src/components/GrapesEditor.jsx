import React, { useEffect, useRef } from 'react'
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import { customCardPlugin } from '../plugins/customCardplugin'

const GrapesEditor = () => {
  const editorRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!editorRef.current && containerRef.current) {
      editorRef.current = grapesjs.init({
        container: containerRef.current,
        height: '100%',
        width: '100%',
        fromElement: true,
        storageManager: false,
        
        blockManager: {
          appendTo: '#blocks-container',
        },
        
        styleManager: {
          appendTo: '#styles-container',
          sectors: [
            {
              name: 'Typography',
              open: true,
              buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align'],
            },
            {
              name: 'Dimension',
              open: false,
              buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
            },
            {
              name: 'Decorations',
              open: false,
              buildProps: ['background-color', 'border-radius', 'border', 'box-shadow', 'opacity'],
            },
            {
              name: 'Layout',
              open: false,
              buildProps: ['display', 'flex-direction', 'justify-content', 'align-items', 'gap'],
            },
          ]
        },
        
        traitManager: {
          appendTo: '#traits-container',
        },
        
        layerManager: {
          appendTo: '#layers-container'
        },

        plugins: [customCardPlugin],
      })

      return () => {
        if (editorRef.current) {
          editorRef.current.destroy()
          editorRef.current = null
        }
      }
    }
  }, [])

  // Tab switching functionality
  useEffect(() => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const panels = document.querySelectorAll('.panel-section');

    const handleTabClick = (button) => {
      const tabName = button.getAttribute('data-tab');
      
      tabButtons.forEach(btn => btn.classList.remove('active'));
      panels.forEach(panel => panel.classList.remove('active'));
      
      button.classList.add('active');
      document.getElementById(`${tabName}-panel`).classList.add('active');
    };

    tabButtons.forEach(button => {
      button.addEventListener('click', () => handleTabClick(button));
    });

    return () => {
      tabButtons.forEach(button => {
        button.removeEventListener('click', () => handleTabClick(button));
      });
    };
  }, []);

  const handleExport = () => {
    if (editorRef.current) {
      try {
        const html = editorRef.current.getHtml();
        const css = editorRef.current.getCss();
        
        const completeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported Template</title>
    <style>
        ${css}
    </style>
</head>
<body>
    ${html}
</body>
</html>`;
        
        const blob = new Blob([completeHtml], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `template-${Date.now()}.html`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        alert('✅ HTML exported successfully!');
      } catch (error) {
        console.error('Export error:', error);
        alert('❌ Error exporting HTML. Check console for details.');
      }
    }
  }

  return (
    <div className="editor-wrapper">
      <div className="top-toolbar">
        <div className="toolbar-left">
          <h2 className="editor-title">🎨 Custom Card Editor</h2>
        </div>
        <div className="toolbar-right">
          <button onClick={handleExport} className="btn-export">
            <span className="export-icon">📥</span>
            <span>Export HTML</span>
          </button>
        </div>
      </div>

      <div className="editor-container">
        
        <div className="left-sidebar">
          <div className="sidebar-header">
            <h3>📦 Components</h3>
          </div>
          <div className="sidebar-content">
            <div id="blocks-container"></div>
          </div>
        </div>

        <div className="center-canvas">
          <div className="canvas-header">
            <span className="canvas-label">✏️ Design Canvas</span>
          </div>
          <div className="canvas-content">
            <div id="gjs" ref={containerRef}></div>
          </div>
        </div>

        <div className="right-sidebar">
          <div className="tabs-container">
            <button className="tab-button active" data-tab="layers">
              📋 Layers
            </button>
            <button className="tab-button" data-tab="styles">
              🎨 Styles
            </button>
            <button className="tab-button" data-tab="traits">
              ⚙️ Traits
            </button>
          </div>

          <div className="tab-content">
            <div id="layers-panel" className="panel-section active">
              <div id="layers-container"></div>
            </div>
            <div id="styles-panel" className="panel-section">
              <div id="styles-container"></div>
            </div>
            <div id="traits-panel" className="panel-section">
              <div id="traits-container"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GrapesEditor
