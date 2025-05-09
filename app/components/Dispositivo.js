import Image from 'next/image';
import '../styles.css';

export default function Dispositivo({ identifier, type, status }) {
    const devices_icons = {
        bluetooth: '/bluetooth_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg',
        camera: '/photo_camera_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg',
        sensor: '/nest_remote_comfort_sensor_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg',
        unknow: '/devices_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg',
    };

    const iconSrc = devices_icons[type] || devices_icons.unknow;

    return (
        <div className="dispositivo__container device flex flex-row items-center justify-between w-2xl mt-4">
            <div className="icon__container flex flex-row gap-1">
                <Image
                    src={iconSrc}
                    alt="bluetooh type"
                    width={48}
                    height={48}
                />
                <div className="info__container">
                    <h2>{identifier}</h2>
                    <h2>{type}</h2>
                </div>
            </div>
            <div className="connect__container">
                <input
                    type="radio"
                    readOnly={false}
                    className="h-8 w-8"
                ></input>
            </div>
        </div>
    );
}
