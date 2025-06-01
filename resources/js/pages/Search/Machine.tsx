import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import axios from 'axios';

interface Machine {
  id: number;
  num_ser: string;
  type: { id: number; name: string };
  assigments: {
    id: number;
    work: { id: number; name: string };
    start_date: string;
    end_date: string | null;
    reasonend?: { name: string };
  }[];
}

export default function MachineSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Machine[]>([]);
  const [selected, setSelected] = useState<Machine | null>(null);

  useEffect(() => {
    if (query.length >= 1) {
      axios.get('/machines/search', { params: { query } })
        .then(res => setResults(res.data))
        .catch(() => setResults([]));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
     <div className="p-4 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-2">Buscar Máquina</h2>
      <Input
        placeholder="Buscar por número de serie o tipo..."
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setSelected(null);
        }}
        className="mb-2 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600"
      />
      {results.length > 0 && (
        <ul className="bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded shadow mb-4 max-h-40 overflow-y-auto">
          {results.map(m => (
            <li
              key={m.id}
              className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-cyan-400"
              onClick={() => {
                setSelected(m);
                setQuery(m.num_ser);
                setResults([]);
              }}
            >
              {m.num_ser} - {m.type.name}
            </li>
          ))}
        </ul>
      )}

      {selected && (
        <div>
          <h3 className="font-semibold mb-1">Asignación activa:</h3>
          {selected.assigments.find(a => !a.end_date) ? (
            <div className="mb-2 p-2 bg-green-100 dark:bg-green-900 text-black dark:text-white rounded">
              {(() => {
                const active = selected.assigments.find(a => !a.end_date);
                return (
                  <>
                    <div>Obra: <b>{active?.work.name}</b></div>
                    <div>Inicio: {active?.start_date}</div>
                    <div>Motivo: {active?.reasonend?.name ?? ''}</div>
                  </>
                );
              })()}
            </div>
          ) : (
            <div className="mb-2 text-gray-600 dark:text-gray-300">No tiene asignación activa</div>
          )}

          <h3 className="font-semibold mb-1">Historial de asignaciones:</h3>
          <ul className="space-y-1">
            {selected.assigments.length === 0 && (
              <li className="text-gray-600 dark:text-gray-300">Sin asignaciones</li>
            )}
            {selected.assigments.map(a => (
              <li key={a.id} className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-black dark:text-white">
                <div>Obra: <b>{a.work.name}</b></div>
                <div>Inicio: {a.start_date}</div>
                <div>Fin: {a.end_date ?? ''}</div>
                <div>Motivo: {a.reasonend?.name ?? ''}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}