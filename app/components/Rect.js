import Link from 'next/link';

import '../styles.css';

export default function Rect({page, text}){
    return (
        <div className='rect'>
            <Link href={page}>
                {text}
            </Link>
        </div>
    )
}