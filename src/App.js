import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import './App.css'

function App() {
  const [html,setHtml]=useState('')
  const [css,setCss]=useState('')
  const [javascript,setJavascript]=useState('')
  const [srcDoc,setSrcDoc]=useState('')
  const [openFile,setOpenFile]=useState('index.html')

  useEffect(()=>{
      const timeout=setTimeout(()=>{
        setSrcDoc(`
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javascript}</script>
        </html>
        `)
      },1000)
      return ()=>clearTimeout(timeout)
  },[html,css,javascript])

  return (
    <div className='editor-full'>
    <div className='editorPanel'>
      <div className='editor-navigation'>
        <h1 onClick={()=>{
          setOpenFile('index.html')
        }}>&#62; index.html</h1>
        <h1 onClick={()=>{
          setOpenFile('index.css')
        }}>&#62; index.css</h1>
        <h1 onClick={()=>{
          setOpenFile('index.js')
        }}>&#62; index.js</h1>
      </div>
      {
        openFile==='index.html' && <Editor language='xml' displayName='index.html' value={html} onChange={setHtml} />
      }
      {
        openFile==='index.css' && <Editor language='css' displayName='index.css' value={css} onChange={setCss}/>
      }
      {
        openFile==='index.js' && <Editor language='javascript' displayName='index.js' value={javascript} onChange={setJavascript}/>
      }
    </div>
    <div className='live-screen'>
      <iframe
      srcDoc={srcDoc}
      title='output'
      sandbox='allow-scripts'
      frameBorder='0'
      width='100%'
      height='100%'
      />
    </div>
    </div>
       
  );
}

export default App;
