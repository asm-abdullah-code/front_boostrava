import { readShared } from '@/lib/content';
export function SharedFooter(){ return <div dangerouslySetInnerHTML={{__html:readShared('footer')}} />; }
