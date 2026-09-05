import { readShared } from '@/lib/content';
import { HeaderBehavior } from './HeaderBehavior';
export function SharedHeader(){ return <><div dangerouslySetInnerHTML={{__html:readShared('header')}} /><HeaderBehavior/></>; }
