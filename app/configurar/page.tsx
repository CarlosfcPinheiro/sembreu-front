import { useState } from 'react';
import Link from 'next/link';

export default function NeedsSelection() {
  const [selectedNeeds, setSelectedNeeds] = useState([]);

  const toggleNeed = (need) => {
    setSelectedNeeds(prev => 
      prev.includes(need) 
        ? prev.filter(item => item !== need) 
        : [...prev, need]
    );
  };

  return (
    <div className="config-screen">
      <h1>Configuração Inicial</h1>
      <h2>Quais são as suas principais necessidades?</h2>
      <p>Selecione mais de uma, se necessário</p>

      <div className="needs-grid">
        {['Deficiência Visual', 'Baixa Visão'].map((need) => (
          <button
            key={need}
            className={need-card ${selectedNeeds.includes(need) ? 'selected' : ''}}
            onClick={() => toggleNeed(need)}
            aria-pressed={selectedNeeds.includes(need)}
          >
            {need}
          </button>
        ))}
      </div>

      <Link href="/config/accessibility" className="continue-btn">
        Continuar
      </Link>
    </div>
  );
}