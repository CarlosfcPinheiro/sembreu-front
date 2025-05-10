import Rect from './components/Rect';
import './styles.css';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full">
      <div className='content__container flex flex-col items-center'>
        <img src="/logo.svg" alt="logo" className="h-52"/>
        <h1 className='text-5xl mt-3'>Seja Bem-vindo ao <span className='font-bold'>SemBreu</span></h1>
        <p className='mt-1 text-xl'>Seu Assistente de Inclusão Digital por IA.</p>

        <Link href={'/menu'} className='start'>Começar</Link>
      </div>
    </main>
  );
}
