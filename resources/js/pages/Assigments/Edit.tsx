import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem,Work,ReasonEnd ,Machine,Assignment} from '@/types';
import { Head, useForm } from '@inertiajs/react'
import { Select} from '@radix-ui/react-select';




  
  interface PageProps {
      machines: Machine[]
      assigment:Assignment
     works:Work[]
     reasonends:ReasonEnd[]

}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Actualizar Asignacion',
        href: '/assigments/create',
    },
];
export default function Edit ({machines=[], works=[],assigment,reasonends=[]}: PageProps) {   
  const {data, setData, put,processing,  errors} = useForm({
 start_date: assigment.start_date instanceof Date
 ? assigment.start_date.toISOString().slice(0, 10)
      : assigment.start_date,
      end_date: assigment.end_date instanceof Date
      ? assigment.end_date.toISOString().slice(0, 10)
      : assigment.end_date,
      reason_end_id: assigment.reasonend.id,
      mileage: assigment.mileage ,
      machine_id: assigment.machine.id ,
      work_id:assigment.work.id,
      
    });
  
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('assigments.update',assigment.id));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Actualizar Asignacion" />
        <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <h1 className="text-2xl font-bold text-foreground">Actualizar Asignacion</h1>
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
                       <Select value={String(data.reason_end_id)} onValueChange={(value) => setData('reason_end_id', Number(value))}>
                         <SelectTrigger>
                           <SelectValue placeholder="Seleccionar un Motivo" />
                         </SelectTrigger>
                         <SelectContent>
                           {reasonends.map((reason_end:ReasonEnd) => (
                             <SelectItem key={reason_end.id} value={String(reason_end.id)}>
                               {reason_end.name}
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
                        value={data.mileage ?? ''}
                         onChange={(e) => setData('mileage', Number(e.target.value))}
                         className="mt-1"
                       />
                       {errors.mileage && <p className="text-sm text-red-600">{errors.mileage}</p>}
                         </div>
                     <div>
                       <Label>Maquina</Label>
                       <Select value={String(data.machine_id)}  onValueChange={(value) => setData('machine_id', Number(value))}>
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
                       <Select value={String(data.work_id)} onValueChange={(value) => setData('work_id', Number(value))}>
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
                      Actualizar
                     </Button>
                   </form>
            </div>
            </AppLayout>
   );
}