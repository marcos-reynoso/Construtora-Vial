import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem,Type,Province,Brand,Maintenance ,Machine} from '@/types';
import { Head, useForm } from '@inertiajs/react'
import { Select} from '@radix-ui/react-select';




  
  interface PageProps {
  machine: Machine;
  types: Type[];
  provinces: Province[];
  brands: Brand[];
  maintenances: Maintenance[];

}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Actualizar  Maquina',
        href: '/machines/create',
    },
];
export default function Edit ({machine, types=[], provinces=[], brands=[], maintenances=[]}: PageProps) {    
    const {data, setData, put,processing,  errors} = useForm({
num_ser: machine.num_ser,
  type_id: machine.type.id,
  province_id: machine.province.id,
  brand_id: machine.brand.id,
  maintenance_id: machine.maintenance?.id,

    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('machines.update', machine.id));

    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Editar Maquina" />
        <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <h1 className="text-2xl font-bold text-foreground">Editar Maquina</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label>Serial</Label>
                <Input
                type="text"
                value={data.num_ser}
                onChange={(e) => setData('num_ser', e.target.value)}
                />
                {errors.num_ser && <p className="text-sm text-red-600">{errors.num_ser}</p>}
            </div>
            <div>
                <Label>Tipo</Label>
                <Select defaultValue={String(data.type_id)} onValueChange={(value) => setData('type_id', Number(value))}>
                <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                    {types.map((type) => (
                    <SelectItem key={type.id} value={String(type.id)}>
                        {type.name}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
                </div>
                <div>
                <Label>Provincia</Label>
                <Select defaultValue={String(data.province_id)} onValueChange={(value) => setData('province_id', Number(value))}>
                <SelectTrigger>
                    <SelectValue placeholder="Seleccionar provincia" />
                </SelectTrigger>
                <SelectContent>
                    {provinces.map((province) => (
                    <SelectItem key={province.id} value={String(province.id)}>
                        {province.name}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
                </div>
                <div>
                <Label>Marca</Label>
                <Select defaultValue={String(data.brand_id)} onValueChange={(value) => setData('brand_id', Number(value))}>
                <SelectTrigger>
                    <SelectValue placeholder="Seleccionar marca" />
                </SelectTrigger>
                <SelectContent>
                    {brands.map((brand) => (
                    <SelectItem key={brand.id} value={String(brand.id)}>
                        {brand.name}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
                </div>
                <div>
                <Label>Mantenimiento</Label>
                <Select defaultValue={String(data.maintenance_id)} onValueChange={(value) => setData('maintenance_id', Number(value))}>
                <SelectTrigger>
                    <SelectValue placeholder="Seleccionar mantenimiento" />
                </SelectTrigger>
                <SelectContent>
                    {maintenances?.map((maintenance) => (
                    <SelectItem key={maintenance.id} value={String(maintenance.id)}>
                        {maintenance.name}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
                </div>
                <Button className='cursor-pointer bg-blue-400' type="submit" disabled={processing} >Actualizar</Button>
            </form>
            </div>
            </AppLayout>
   );
}