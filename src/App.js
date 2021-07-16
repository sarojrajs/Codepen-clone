import { useEffect, useState } from "react";
import Editor from "./components/Editor";


function App() {
  const [html,setHtml]=useState('')
  const [css,setCss]=useState('')
  const [javascript,setJavascript]=useState('')
  const [srcDoc,setSrcDoc]=useState('')

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
    <>
    <div>
    <Editor language='xml' displayName='HTML' value={html} onChange={setHtml}/>
    <Editor language='css' displayName='CSS' value={css} onChange={setCss}/>
    <Editor language='javascript' displayName='JAVASCRIPTS' value={javascript} onChange={setJavascript}/>
    </div>
    <div>
      <iframe
      srcDoc={srcDoc}
      title='output'
      sandbox='allow-scripts'
      frameBorder='0'
      width='100%'
      height='100%'
      />
    </div>
    </>
       
  );
}

export default App;
