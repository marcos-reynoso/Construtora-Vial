
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem ,Type,Province,Brand,Maintenance,Machine} from '@/types';
import { Head, useForm } from '@inertiajs/react'




interface Props {
  machine: Machine[]
  types: Type[]
  provinces: Province[]
  brands: Brand[]
  maintenances: Maintenance[]
}
type MachineForm = {
  num_ser: string;
  type_id: number | null;
  province_id: number | null;
  brand_id: number | null;
  maintenance_id: number | null;
};
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Crear una Nueva Maquina',
        href: '/machines/create',
    },
];
export default function Create({types=[], provinces=[], brands=[], maintenances=[]}: Props) {
    const { data, setData, post, processing, errors } = useForm<MachineForm>({
    num_ser: '',
    type_id: null,
    province_id: null,
    brand_id: null,
    maintenance_id: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/machines');
  };

  return (
       <AppLayout breadcrumbs={breadcrumbs}>
       <Head title="Nueva Máquina" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Registrar Máquina</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <Label htmlFor="num_ser">Número de Serie</Label>
            <Input
              id="num_ser"
              value={data.num_ser}
              onChange={(e) => setData('num_ser', e.target.value)}
              className="mt-1"
            />
            {errors.num_ser && <p className="text-sm text-red-600">{errors.num_ser}</p>}
          </div>

          <div>
            <Label>Tipo</Label>
            <Select onValueChange={(value) => setData('type_id', Number(value))}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar un tipo" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type.id} value={String(type.id)}>
                    {type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.type_id && <p className="text-sm text-red-600">{errors.type_id}</p>}
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

          <div>
            <Label>Marca</Label>
            <Select onValueChange={(value) => setData('brand_id', Number(value))}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar una marca" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand.id} value={String(brand.id)}>
                    {brand.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.brand_id && <p className="text-sm text-red-600">{errors.brand_id}</p>}
          </div>

          <div>
            <Label>Mantenimiento</Label>
            <Select onValueChange={(value) => setData('maintenance_id', Number(value))}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar un mantenimiento" />
              </SelectTrigger>
              <SelectContent>
                {maintenances?.map((m) => (
                  <SelectItem key={m.id} value={String(m.id)}>
                    {m.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.maintenance_id && <p className="text-sm text-red-600">{errors.maintenance_id}</p>}
          </div>

          <Button type="submit" disabled={processing} className="w-auto  hover:bg-blue-500">
            Guardar Máquina
          </Button>
        </form>
      </div>
</AppLayout>
  );
}

