import '../styles.css';
import Dispositivo from './Dispositivo';

export default function ListaDispositivos({ devicesList }) {
    return (
        <div className="dispositivos__container">
            {devicesList.map((dispositivo) => (
                <Dispositivo
                    key={dispositivo.id}
                    identifier={dispositivo.identifier}
                    type={dispositivo.type}
                    status={dispositivo.status}
                />
            ))}
        </div>
    );
}
