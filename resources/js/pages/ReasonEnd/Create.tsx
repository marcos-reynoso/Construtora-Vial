import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react'


type ReasonEndForm = {
  name: string;
};

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Crear una Nueo Motivo ',
    href: '/reasonend/create',
  },
];

export default function Create() {
  const { data, setData, post, processing, errors } = useForm<ReasonEndForm>({
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/reasonend'); 
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Nuevo Motivo" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Registrar Motivo</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Nombre del Motivo</Label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
          </div>

          <Button type="submit" disabled={processing} className="w-auto cursor-pointer hover:bg-blue-500">
            Guardar Motivo
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}
