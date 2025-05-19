import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage,Link} from '@inertiajs/react';
import {Table,TableHead,TableBody,TableHeader,TableRow,TableCell} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Maquinas',
        href: '/machines',
    },
];
type Machine = {
  id: number;
  num_ser: string;
  type: { id: number; name: string };
  province: { id: number; name: string };
  brand: { id: number; name: string };
  maintenance: { id: number; name: string };
};

interface PageProps {
  
    machines: Machine[],
    [key: string]:Machine[]  ;
}

export default function Index() {
  const { machines } = usePage<PageProps>().props;
     const {processing, delete: destroy} = useForm();

    const handleDelete = (id: number, num_ser: string) => {
        if(confirm(`Quiere eliminar esta Maquina - ${id}. ${num_ser}`)){
            destroy(route("machines.destroy", id));
        }
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Maquinas" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <h1 className="text-2xl font-bold text-foreground">Listado de Máquinas</h1>
 <Link href={route('machines.create') }><Button className='w-50'>Crear</Button></Link>
        <div className="rounded-xl border bg-background p-4 shadow-sm dark:border-gray-700">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Nº Serie</TableHead>
                <TableHead className="text-left">Tipo</TableHead>
                <TableHead className="text-left">Provincia</TableHead>
                <TableHead className="text-left">Marca</TableHead>
                <TableHead className="text-left">Mantenimiento</TableHead>
                <TableHead className="text-center">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {machines.map((machine:Machine) => (
                <TableRow key={machine.id}>
                  <TableCell>{machine.num_ser}</TableCell>
                  <TableCell>{machine.type?.name}</TableCell>
                  <TableCell>{machine.province?.name}</TableCell>
                  <TableCell>{machine.brand?.name}</TableCell>
                  <TableCell>{machine.maintenance?.name}</TableCell>
                       <TableCell className="text-center space-x-2">
                                       
                                        <Link href={route('machines.edit', machine.id)}><Button className="bg-blue-700 hover:bg-blue-500">Editar</Button></Link>
                                        <Button disabled={processing} onClick={() => handleDelete(machine.id, machine.num_ser)} className="bg-red-500 hover:bg-red-700"><Trash /></Button>
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
