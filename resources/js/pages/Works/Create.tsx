
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem ,Province} from '@/types';
import { Head, useForm } from '@inertiajs/react'




interface Props {
  provinces: Province[]

}
type WorkForm = {
  name: string;
  start_date: string;
  end_date: string;
  province_id: number | null;
 
};
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Crear una Nueva Obra',
        href: '/works/create',
    },
];
export default function Create({ provinces=[]}: Props) {
    const { data, setData, post, processing, errors } = useForm<WorkForm>({
    name: '',
    start_date: '',
    end_date:'',
    province_id: null,
   
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/works');
  };

  return (
       <AppLayout breadcrumbs={breadcrumbs}>
       <Head title="Nueva Obra" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Registrar Obra</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className="mt-1"
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
          </div>
            <div>
                <Label htmlFor="start_date">Fecha Inicio</Label>
                <Input
                id="start_date"
                type="date"
                value={data.start_date}
                onChange={(e) => setData('start_date', e.target.value)}
                className="mt-1"
                />
                {errors.start_date && <p className="text-sm text-red-600">{errors.start_date}</p>}
                </div>
                <div>
                <Label htmlFor="end_date">Fecha Final</Label>
                <Input
                id="end_date"
                type="date"
                value={data?.end_date}
                onChange={(e) => setData('end_date', e.target.value)}
                className="mt-1"
                />
                {errors.start_date && <p className="text-sm text-red-600">{errors.start_date}</p>}
                </div>
          
          <div>
            <Label>Provincia</Label>
            <Select onValueChange={(value) => setData('province_id', Number(value))}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar una provincia" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((province) => (
                  <SelectItem key={province.id} value={String(province.id)}>
                    {province.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.province_id && <p className="text-sm text-red-600">{errors.province_id}</p>}
          </div>
         

          <Button type="submit" disabled={processing} className="w-auto cursor-pointer hover:bg-blue-500">
            Guardar Obra
          </Button>
        </form>
      </div>
</AppLayout>
  );
}

