import '../styles.css';

import ListaDispositivos from '../components/ListaDispositivos';

export default function dispositivos() {
    const deviceListMock = [
        {
            id: 1,
            type: 'bluetooth',
            identifier: '00:11:22:33:44:55',
            status: 'connected',
        },
        {
            id: 2,
            type: 'camera',
            identifier: '00:11:22:33:44:55',
            status: 'avaliable',
        },
        {
            id: 3,
            type: 'sensor',
            identifier: '00:11:22:33:44:55',
            status: 'avaliable',
        },
    ];

    return (
        <main className="dispositivos flex justify-center items-center h-full">
            <div className="content__container flex flex-col items-center">
                <h1 className="text-5xl">Dispositivos</h1>
                <p className="mt-1 text-xl">
                    Aqui você terá acesso a todo os dispositivos disponíveis e
                    conectados
                </p>

                <ListaDispositivos devicesList={deviceListMock} />
            </div>
        </main>
    );
}
