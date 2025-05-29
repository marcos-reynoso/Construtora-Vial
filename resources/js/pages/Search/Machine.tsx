import { useState } from 'react';
import { Input } from '@/components/ui/input';

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

interface Props {
  machines: Machine[];
}

export default function MachineSearch({ machines }: Props) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Machine | null>(null);

  const filtered = machines.filter(
    m =>
      m.num_ser.toLowerCase().includes(query.toLowerCase()) ||
      m.type.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-2">Buscar Máquina</h2>
      <Input
        placeholder="Buscar por número de serie o tipo..."
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setSelected(null);
        }}
        className="mb-2"
      />
      {query && (
        <ul className="bg-gray-100 rounded shadow mb-4">
          {filtered.map(m => (
            <li
              key={m.id}
              className="p-2 cursor-pointer hover:bg-blue-100"
              onClick={() => setSelected(m)}
            >
              {m.num_ser} - {m.type.name}
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="p-2 text-gray-500">Sin resultados</li>
          )}
        </ul>
      )}

      {selected && (
        <div>
          <h3 className="font-semibold mb-1">Asignación activa:</h3>
          {selected.assigments.find(a => !a.end_date) ? (
            <div className="mb-2 p-2 bg-green-100 rounded">
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
            <div className="mb-2 text-gray-500">No tiene asignación activa</div>
          )}

          <h3 className="font-semibold mb-1">Historial de asignaciones:</h3>
          <ul className="space-y-1">
            {selected.assigments.length === 0 && (
              <li className="text-gray-500">Sin asignaciones</li>
            )}
            {selected.assigments.map(a => (
              <li key={a.id} className="p-2 border rounded">
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