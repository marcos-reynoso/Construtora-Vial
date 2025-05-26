import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem,Province ,Work} from '@/types';
import { Head, useForm } from '@inertiajs/react'
import { Select} from '@radix-ui/react-select';




  
  interface PageProps {
  work: Work;
  provinces: Province[];


}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Actualizar  Obra',
        href: '/works/create',
    },
];
export default function Edit ({ provinces=[],work}: PageProps) {    
    const {data, setData, put,processing,  errors} = useForm({
name: work.name,
  start_date: work.start_date instanceof Date
      ? work.start_date.toISOString().slice(0, 10)
      : work.start_date,
    end_date: work.end_date instanceof Date
      ? work.end_date.toISOString().slice(0, 10)
      : work.end_date,
province_id: work.province.id,

    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('works.update', work.id));

    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Editar Obra" />
        <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <h1 className="text-2xl font-bold text-foreground">Editar Obra</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label>Nombre</Label>
                <Input
                type="text"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                />
                {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
            </div>
                <div>
                    <Label>Fecha Inicio</Label>
                    <Input
                    type='date'
                    value={data.start_date}
                    onChange={(e)=>setData('start_date',e.target.value)}
                    />
                </div>
                <div>
                    <Label>Fecha Final</Label>
                    <Input
                    type='date'
                    value={data.end_date}
                    onChange={(e)=>setData('end_date',e.target.value)}
                    />
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
          
                <Button className='cursor-pointer bg-blue-400' type="submit" disabled={processing} >Actualizar</Button>
            </form>
            </div>
            </AppLayout>
   );
}