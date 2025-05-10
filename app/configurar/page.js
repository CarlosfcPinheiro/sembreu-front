import Link from 'next/link';
import '../styles.css';

export default function Configurar() {
  // const executePython = async () => {
  //   const res = await fetch('/api/execultar-python'); // cuidado com o nome
  //   const data = await res.json();
  //   setSaida(data.resultado || data.erro);
  // };

  return (
    <main className="flex justify-center items-center h-full">
      <div className="content__container flex flex-col items-center w-[80%]">
        <h1 className="text-5xl pt-6 font-bold">Início</h1>

        <div className="text__container mt-20">
          <h2 className="text-left text-2xl font-medium">Permissões concedidas!</h2>
          <p className="mt-2 text-xl">
            Tudo pronto para usar o <strong className='font-bold'>SemBreu</strong> como seu assistente inclusivo!
          </p>

          <h2 className="text-left mt-6 font-bold">Principais ajustes</h2>

          <div className="list__container mt-2">
            <h3>Necessidades</h3>
            <ol className='ml-8'>
              <li>1. Usuário com <strong>baixa visão</strong></li>
            </ol>
          </div>

          <div className="list__container mt-4">
            <p>Assistências prestadas:</p>
            <ol className='ml-8'>
              <li>1. Alto contraste</li>
              <li>2. Tamanho da fonte: 16px</li>
              <li>3. Feedback sonoro</li>
              <li>4. Guia de Visão Computacional</li>
            </ol>
          </div>

          <p className="btn_user mt-6 text-center">
            Para solicitar qualquer coisa, é só dizer: “Sammy, me dê uma luz?”
          </p>
        </div>

        <div className='button__container'>
          <button className='continue'>
            Usar o SemBreu
          </button>
        </div>

        <div className="rect__container flex flex-col gap-1 mt-12">
          <Link href="/" className="rect_inicio">
            Revogar permissões
          </Link>
          <Link href="/" className="rect_inicio">
            Configurações
          </Link>
        </div>
      </div>
    </main>
  );
}
