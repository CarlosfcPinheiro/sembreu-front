import Link from 'next/link';

import '../styles.css';

export default function Menu(){
    return (
        <main className="flex justify-center items-center h-full">
            <div className='content__container flex flex-col items-center w-[80%]'>
                <h1 className='text-5xl'>Início</h1>
                <p className='mt-24 text-xl font-light'>Tudo pronto para usar o <string>SemBreu</string> como seu assistente inclusivo!</p>
                <p className='text-left'>Selecione mais de uma, se necessário</p>

                <div className='rect__container flex flex-col gap-4 mt-24'>
                    <Link href={'/dispositivos'} className='rect'>
                        <img src={'/eye.svg'}></img>
                        Deficiência Visual
                    </Link>
                    <Link href={'/permissoes'} className='rect'>
                        <img src={'/eye.svg'}></img>
                        Baixa Visão
                    </Link>
                </div>
            </div>
        </main>
    );
}