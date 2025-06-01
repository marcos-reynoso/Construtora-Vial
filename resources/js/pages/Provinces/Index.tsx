import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';

interface Province {
  id: number;
  name: string;

}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Provincias',
        href: '/provinces',
    },
];
interface Props {
  provinces: Province[];
}

export default function ProvincesIndex({ provinces }: Props) {
  const [month, setMonth] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!month) return;
    window.open(route('provinces.report.month', { month }), '_blank');
  };

  return (
     <AppLayout breadcrumbs={breadcrumbs}>
          <Head title="provincias" />
    <div className="p-8">
      <Head title="Provincias" />
      <h1 className="text-2xl font-bold mb-4">Provincias</h1>
      <form onSubmit={handleDownload} className="flex items-center gap-2 mb-6">
        <input
          type="month"
          name="month"
          required
          value={month}
          onChange={e => setMonth(e.target.value)}
          className="border rounded px-2 py-1 text-black bg-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Descargar reporte PDF
        </button>
      </form>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-blue-400 text-white">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nombre</th>
          </tr>
        </thead>
        <tbody>
          {provinces.map(province => (
            <tr key={province.id}>
              <td className="border px-4 py-2">{province.id}</td>
              <td className="border px-4 py-2">{province.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </AppLayout>
  );
}