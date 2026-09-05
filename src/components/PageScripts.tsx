export function PageScripts({scripts}:{scripts:string[]}){
  return <>{scripts.map((code,i)=><script key={i} dangerouslySetInnerHTML={{__html:code}} />)}</>;
}
