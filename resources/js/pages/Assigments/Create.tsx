
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem ,Assignment,Work,Machine,ReasonEnd} from '@/types';
import { Head, useForm } from '@inertiajs/react'




interface Props {
  machines: Machine[]
  assigments:Assignment[]
 works:Work[]
 reasonends:ReasonEnd[]
}
type AssigmentForm = {
  start_date:string;
  end_date:string;
  reason_end_id:number|null;
  mileage:number|null;
  machine_id:number|null;
  work_id:number|null
};
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Crear una Nueva Asignacion',
        href: '/assigments/create',
    },
];
export default function Create({machines=[],works=[],reasonends=[]}: Props) {
    const { data, setData, post, processing, errors } = useForm<AssigmentForm>({
    start_date:'',
    end_date:'',
    reason_end_id:null,
    mileage:null,
    machine_id:null,
    work_id:null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/assigments');
  };

  return (
       <AppLayout breadcrumbs={breadcrumbs}>
       <Head title="Nueva Asignacion" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Registrar Asignacion</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <Label htmlFor="start_date">Fecha de Inicio</Label>
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
              value={data.end_date}
              onChange={(e) => setData('end_date', e.target.value)}
              className="mt-1"
            />
            {errors.end_date && <p className="text-sm text-red-600">{errors.end_date}</p>}
            </div>
          
          <div>
            <Label>Motivo</Label>
            <Select onValueChange={(value) => setData('reason_end_id', Number(value))}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar un Motivo" />
              </SelectTrigger>
              <SelectContent>
                {reasonends.map((reasonend:ReasonEnd) => (
                  <SelectItem key={reasonend.id} value={String(reasonend.id)}>
                    {reasonend.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.reason_end_id&& <p className="text-sm text-red-600">{errors.reason_end_id}</p>}
          </div>

          <div>
            <Label htmlFor="mileage">Kilometros</Label>
            <Input
              id="mileage"
              type="number"
              value={data.mileage || ''}
              onChange={(e) => setData('mileage', Number(e.target.value))}
              className="mt-1"
            />
            {errors.mileage && <p className="text-sm text-red-600">{errors.mileage}</p>}
              </div>
          <div>
            <Label>Maquina</Label>
            <Select onValueChange={(value) => setData('machine_id', Number(value))}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar una Maquina" />
              </SelectTrigger>
              <SelectContent>
                {machines.map((machine:Machine) => (
                  <SelectItem key={machine.id} value={String(machine.id)}>
                    {machine.num_ser}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.machine_id && <p className="text-sm text-red-600">{errors.machine_id}</p>}
          </div>

          <div>
            <Label>Obra</Label>
            <Select onValueChange={(value) => setData('work_id', Number(value))}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar una Obra" />
              </SelectTrigger>
              <SelectContent>
                {works.map((work:Work) => (
                  <SelectItem key={work.id} value={String(work.id)}>
                    {work.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.work_id && <p className="text-sm text-red-600">{errors.work_id}</p>}
          </div>

          <Button type="submit" disabled={processing} className="w-auto cursor-pointer hover:bg-blue-500">
            Guardar Asignacion
          </Button>
        </form>
      </div>
</AppLayout>
  );
}

