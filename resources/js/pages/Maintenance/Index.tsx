
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem ,Maintenance} from '@/types';
import { Head, usePage,Link, useForm} from '@inertiajs/react';
import {Table,TableHead,TableBody,TableHeader,TableRow,TableCell} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tipos de Mantenimiento',
        href: '/maintenances',
       
    },
];


interface PageProps {

    maintenances: Maintenance[],
    [key: string]:Maintenance[];
}

export default function Index() {
  const { maintenances=[]} = usePage<PageProps>().props;
  const { processing, delete: destroy } = useForm();

  const handleDelete = (id: number, name: string ,mileage:number) => {
    if (confirm(`¿Quieres eliminar este mantenimiento - ${name} con ${mileage}km ?`)) {
      destroy(route("maintenances.destroy", id));
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tipo de Mantenimiento" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <h1 className="text-2xl font-bold text-foreground">Listado de Tipos de Mantenimiento</h1>
 <Link href={route('maintenances.create')  }className='w-50'><Button className='w-50 cursor-pointer'>Crear</Button></Link>
        <div className="rounded-xl border bg-background p-4 shadow-sm dark:border-gray-700">
             
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Nombre</TableHead>
                <TableHead className='text-left'> kilometros para Mantenimiento </TableHead>
                <TableHead className="text-center">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {maintenances.map((maintenance:Maintenance) => (
                <TableRow key={maintenance.id}>
                  <TableCell>{maintenance.name}</TableCell>
                  <TableCell>{maintenance.mileage_application}</TableCell>
                  <TableCell className="text-center space-x-2">
                    <Link href={route('maintenances.edit', maintenance.id)}><Button className="bg-blue-700 hover:bg-blue-500 cursor-pointer">Editar</Button></Link>
                    <Button disabled={processing} onClick={() => handleDelete(maintenance.id, maintenance.name ,maintenance.mileage_application)} className="bg-red-500 hover:bg-red-700 cursor-pointer"><Trash /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AppLayout>
  );
    
}
