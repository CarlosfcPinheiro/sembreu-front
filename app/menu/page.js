import Link from 'next/link';

import '../styles.css';

export default function Menu(){
    return (
        <main className="flex justify-center items-center h-full">
            <div className='content__container flex flex-col items-center'>
                <h1 className='text-5xl'>Menu</h1>
                <p className='mt-1 text-xl'>Aqui você pode acessar as funcionalidades e opções do SemBreu.</p>

                <div className='rect__container flex flex-col gap-4 mt-24'>
                    <Link href={'/dispositivos'} className='rect'>Dispositivos</Link>
                    <Link href={'/permissoes'} className='rect'>Permissões</Link>
                </div>
            </div>
        </main>
    );
}