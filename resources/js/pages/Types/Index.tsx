import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem ,Type} from '@/types';
import { Head, usePage,Link, useForm} from '@inertiajs/react';
import {Table,TableHead,TableBody,TableHeader,TableRow,TableCell} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tipos',
        href: '/types',
       
    },
];


interface PageProps {
   
    types: Type[],
    [key: string]:Type[];
}

export default function Index() {
  const { types} = usePage<PageProps>().props;
  const { processing, delete: destroy } = useForm();

  const handleDelete = (id: number, name: string) => {
    if (confirm(`¿Quieres eliminar este tipo - ${name}?`)) {
      destroy(route("types.destroy", id));
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tipos de Maquinas" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <h1 className="text-2xl font-bold text-foreground">Listado de Tipos de Maquinas</h1>
 <Link href={route('types.create') }><Button className='w-50'>Crear</Button></Link>
        <div className="rounded-xl border bg-background p-4 shadow-sm dark:border-gray-700">
             
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Nombre</TableHead>
                <TableHead className="text-center">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {types.map((type:Type) => (
                <TableRow key={type.id}>
                  <TableCell>{type.name}</TableCell>
                  <TableCell className="text-center space-x-2">
                    <Link href={route('types.edit', type.id)}><Button className="bg-blue-700 hover:bg-blue-500">Editar</Button></Link>
                    <Button disabled={processing} onClick={() => handleDelete(type.id, type.name)} className="bg-red-500 hover:bg-red-700"><Trash /></Button>
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
