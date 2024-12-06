import React from 'react';
import '../styles/EthnicSelector.css';

interface EthnicSelectorProps {
  data: string[];
  setSelectedEthnicGroup: (name: string) => void;
}

const EthnicSelector: React.FC<EthnicSelectorProps> = ({ data, setSelectedEthnicGroup }) => {
  const sortedData = [...data].sort((a, b) => a.localeCompare(b));

  return (
    <div className="ethnic-selector-container">
      <label htmlFor="ethnicSelector" className="ethnic-selector-label">
        Selecciona una lengua:
      </label>
      <select
        id="ethnicSelector"
        className="ethnic-selector-dropdown"
        defaultValue=""
        onChange={(e) => setSelectedEthnicGroup(e.target.value)}
      >
        <option value="" disabled hidden>
          Seleccione una opción
        </option>
        {sortedData.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EthnicSelector;