import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react'


type MaintenanceForm = {
  name: string;
  mileage_application: number|null;
};

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Crear una Nuevo Mantenimiento ',
    href: '/maintenances/create',
  },
];

export default function Create() {
  const { data, setData, post, processing, errors } = useForm<MaintenanceForm>({
    name: '',
    mileage_application: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/maintenances'); 
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Nuevo Mantenimiento" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Registrar Mantenimiento</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Nombre del Mantenimiento</Label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
          </div>
          <div>
            <Label>kilometros para Mantenimiento</Label>
            <input
              type="number"
              value={data.mileage_application?? ''}
              onChange={(e) => setData('mileage_application', Number(e.target.value))}
              className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
            {errors.mileage_application && <p className="text-sm text-red-600">{errors.mileage_application}</p>}
          </div>

          <Button type="submit" disabled={processing} className="w-auto cursor-pointer hover:bg-blue-500">
            Guardar Mantenimiento
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}
