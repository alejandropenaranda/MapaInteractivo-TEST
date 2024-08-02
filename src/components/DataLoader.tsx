import React, { useEffect } from 'react';
import * as XLSX from 'xlsx';

interface EthnicGroup {
  name: string;
  nombreBase?: string;
  nombrePueblo?: string;
  nombreLengua?: string;
  hablantes?: string;
  mitologia?: string;
  comentarios?: string;
  ubicaciones?: string;
  coords?: string;
  linkMapa?: string;
  enlace1?: string;
  enlace2?: string;
  enlace3?: string;
  enlace4?: string;
  enlace5?: string;
  enlace6?: string;
  enlace7?: string;
  [key: string]: any;
}

interface DataLoaderProps {
  setData: (data: { [name: string]: EthnicGroup[] }) => void;
}

const DataLoader: React.FC<DataLoaderProps> = ({ setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/Datos_actualizados.xlsx'); // Asegúrate de que la ruta sea correcta
      const arrayBuffer = await response.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });

      const processSheet = (sheetName: string, keyMap: { [key: string]: string }) => {
        const sheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(sheet);
        return json.map((row: any) => {
          const result: any = {};
          for (const key in keyMap) {
            if (row[key]) {
              result[keyMap[key]] = row[key];
            }
          }
          return result;
        });
      };

      const combineData = (existingData: { [name: string]: EthnicGroup[] }, newData: EthnicGroup[], keys: string[]) => {
        newData.forEach((item) => {
          const name = item.name;
          if (!existingData[name]) {
            existingData[name] = [];
          }
          const entry: EthnicGroup = { name };
          keys.forEach(key => {
            if (item[key]) {
              entry[key] = item[key];
            }
          });
          existingData[name].push(entry);
        });
      };

      const languageNames1 = processSheet('Hoja1', {
        'Nombre': 'name',
        'NombreBase': 'nombreBase',
        'Enlace1': 'enlace1'
      });

      const languageNames2 = processSheet('Hoja2', {
        'Nombre': 'name',
        'NombrePueblo': 'nombrePueblo',
        'Enlace2': 'enlace2'
      });

      const languageNames3 = processSheet('Hoja3', {
        'Nombre': 'name',
        'NombreLengua': 'nombreLengua',
        'Enlace3': 'enlace3'
      });

      const speakersCount = processSheet('Hoja4', {
        'Nombre': 'name',
        'Hablantes': 'hablantes',
        'Enlace4': 'enlace4'
      });

      const ethnicMythology = processSheet('Hoja5', {
        'Nombre': 'name',
        'Mitologia': 'mitologia',
        'Enlace5': 'enlace5'
      });

      const commentsCitations = processSheet('Hoja6', {
        'Nombre': 'name',
        'Comentarios': 'comentarios',
        'Enlace6': 'enlace6'
      });

      const languageMapInfo = processSheet('Hoja7', {
        'Nombre': 'name',
        'Ubicaciones': 'ubicaciones',
        'Coords': 'coords',
        'Enlace7': 'enlace7',
        'LinkMapa': 'linkMapa'
      });

      const combinedData: { [name: string]: EthnicGroup[] } = {};

      combineData(combinedData, languageNames1, ['nombreBase', 'enlace1']);
      combineData(combinedData, languageNames2, ['nombrePueblo', 'enlace2']);
      combineData(combinedData, languageNames3, ['nombreLengua', 'enlace3']);
      combineData(combinedData, speakersCount, ['hablantes', 'enlace4']);
      combineData(combinedData, ethnicMythology, ['mitologia', 'enlace5']);
      combineData(combinedData, commentsCitations, ['comentarios', 'enlace6']);
      combineData(combinedData, languageMapInfo, ['ubicaciones', 'coords', 'enlace7', 'linkMapa']);

      setData(combinedData);
    };

    fetchData();
  }, [setData]);

  return null;
};

export default DataLoader;