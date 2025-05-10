'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AccessibilitySettings() {
    const [features, setFeatures] = useState({
        highContrast: false,
        narration: false,
        captions: false,
    });

    const toggleFeature = (feature) => {
        setFeatures(prev => ({ ...prev, [feature]: !prev[feature] }));
    };

    return (
        <div className="config-screen">
            <h1>Configuração Inicial</h1>
            <h2>Recursos de acessibilidade</h2>
            <p>Você poderá ativar ou desativar esses recursos a qualquer momento em configurações</p>

            <div className="features-list">
                {Object.keys(features).map((feature) => (
                    <label key={feature} className="feature-item">
                        <input
                            type="checkbox"
                            checked={features[feature]}
                            onChange={() => toggleFeature(feature)}
                        />
                        <span>{featureLabels[feature]}</span>
                    </label>
                ))}
            </div>

            <div className="navigation-buttons">
                <Link href="/config/needs" className="back-btn">
                    Voltar à página anterior
                </Link>
                <Link href="/config/summary" className="continue-btn">
                    Continuar
                </Link>
            </div>
        </div>
    );
}

const featureLabels = {
    highContrast: 'Ativar alto contraste',
    narration: 'Ativar narração',
};