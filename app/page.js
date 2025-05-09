import Rect from './components/Rect';
import './styles.css';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full">
      <div className='content__container flex flex-col items-center'>
        <img src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="" className="h-52"/>
        <h1 className='text-5xl'>Seja Bem-vindo ao <span className='font-bold'>SemBreu</span></h1>
        <p className='mt-1 text-xl'>Enxergue o mundo através do seu próprio agente de IA.</p>

        <Link href={'/menu'} className='start'>Iniciar</Link>
      </div>
    </main>
  );
}
