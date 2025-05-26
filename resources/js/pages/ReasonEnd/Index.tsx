
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem ,ReasonEnd} from '@/types';
import { Head, usePage,Link, useForm} from '@inertiajs/react';
import {Table,TableHead,TableBody,TableHeader,TableRow,TableCell} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tipos de Motivo de Fin',
        href: '/reasonend',
       
    },
];


interface PageProps {

    reasonEnd: ReasonEnd[],
    [key: string]:ReasonEnd[];
}

export default function Index() {
  const { reasonEnd= []} = usePage<PageProps>().props;
  const { processing, delete: destroy } = useForm();

  const handleDelete = (id: number, name: string) => {
    if (confirm(`¿Quieres eliminar este motivo - ${name}?`)) {
      destroy(route("reasons-end.destroy", id));
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tipo de Motivos" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <h1 className="text-2xl font-bold text-foreground">Listado de Tipos de motivos</h1>
 <Link href={route('reasons-end.create')  }className='w-50'><Button className='w-50 cursor-pointer'>Crear</Button></Link>
        <div className="rounded-xl border bg-background p-4 shadow-sm dark:border-gray-700">
             
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Nombre</TableHead>
                <TableHead className="text-center">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reasonEnd.map((reasonEnd:ReasonEnd) => (
                <TableRow key={reasonEnd.id}>
                  <TableCell>{reasonEnd.name}</TableCell>
                  <TableCell className="text-center space-x-2">
                    <Link href={route('reasons-end.edit', reasonEnd.id)}><Button className="bg-blue-700 hover:bg-blue-500 cursor-pointer">Editar</Button></Link>
                    <Button disabled={processing} onClick={() => handleDelete(reasonEnd.id, reasonEnd.name)} className="bg-red-500 hover:bg-red-700 cursor-pointer"><Trash /></Button>
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
