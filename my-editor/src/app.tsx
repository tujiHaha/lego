import React from 'react'
import { createRoot } from 'react-dom/client';
import './static/reset.less'
import './app.less'
const container = document.getElementById('root') as HTMLDivElement;
function App() {
  return <div className='layout-content'>


    <div className='left-content'>left-content</div>

    <div className='editor-part'>editor-part</div>

    <div className='right-content'>right-contentright-contentright-contentright-content</div>


  </div>
}

const root = createRoot(container);
root.render(<App />);

