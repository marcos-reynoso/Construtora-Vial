import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, ReasonEnd } from '@/types';
import { Head, useForm } from '@inertiajs/react';

interface PageProps {
  reasonEnd: ReasonEnd;
}

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Actualizar Tipo de Motivo',
    href: '/reasonend/create',
  },
];

export default function Edit({ reasonEnd }: PageProps) {
  const { data, setData, put, processing, errors } = useForm({
    name: reasonEnd.name,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    put(route('reasons-end.update', reasonEnd.id));
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Editar Tipo de Motivos" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <h1 className="text-2xl font-bold text-foreground">Editar Motivo</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <Label htmlFor="name">Nombre del Motivo</Label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className="mt-2 rounded-md border border-gray-300 px-4 py-2 text-sm text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <Button className='cursor-pointer bg-blue-500' type="submit" disabled={processing}>
            Actualizar
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}
