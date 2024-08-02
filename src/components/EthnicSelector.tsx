import React from 'react';
import '../styles/EthnicSelector.css';

interface EthnicSelectorProps {
  data: string[];
  setSelectedEthnicGroup: (name: string) => void;
}

const EthnicSelector: React.FC<EthnicSelectorProps> = ({ data, setSelectedEthnicGroup }) => {
  return (
    <div className="ethnic-selector-container">
      <div className="label-container">
        <label htmlFor="ethnicSelector" className="ethnic-selector-label">
          Selector de Lenguas
        </label>
      </div>
      <div className="selector-container">
        <select
          id="ethnicSelector"
          className="ethnic-selector-dropdown"
          defaultValue=""
          onChange={(e) => setSelectedEthnicGroup(e.target.value)}
        >
          <option value="" disabled hidden>
            Seleccione una opción
          </option>
          {data.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default EthnicSelector;