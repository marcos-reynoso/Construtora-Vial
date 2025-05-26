import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem ,Assignment} from '@/types';
import { Head, useForm, usePage,Link} from '@inertiajs/react';
import {Table,TableHead,TableBody,TableHeader,TableRow,TableCell} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {  Trash } from 'lucide-react';




const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Asignaciones',
        href: '/assigments',
    },
];


interface PageProps {

  assigments: Assignment[];
  [key: string]: Assignment[];
}

export default function Index() {
  const { assigments} = usePage<PageProps>().props;
     const {processing, delete: destroy} = useForm();

     
    const handleDelete = (id: number, name: string ) => {
        if(confirm(`Quiere eliminar esta Asignacion - ${id}. ${name}`)){
            destroy(route("assigments.destroy", id));
        }
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Asignaciones" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <h1 className="text-2xl font-bold text-foreground">Listado de Asignaciones</h1>
    
 <Link href={route('assigments.create') } className='w-50'><Button className='w-50 cursor-pointer'>Crear</Button></Link>
        <div className="rounded-xl border bg-background p-4 shadow-sm dark:border-gray-700">
           
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Fecha de Inicio</TableHead>
                <TableHead className="text-left">Fecha Final</TableHead>
                <TableHead className="text-left">Motivo</TableHead>
                <TableHead className="text-left">kilometros</TableHead>
                <TableHead className="text-left">Maquina</TableHead>
                <TableHead className="text-left">Obra</TableHead>
                <TableHead className="text-center">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assigments.map((assigment:Assignment) => (
                <TableRow key={assigment.id}>
                  <TableCell>{new Date(assigment.start_date).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(assigment?.end_date).toLocaleDateString()}</TableCell>
                  <TableCell>{assigment.reasonend.name}</TableCell>
                  <TableCell>{assigment.mileage}</TableCell>
                  <TableCell>{assigment.machine.num_ser}</TableCell>
                    <TableCell>{assigment.work.name}</TableCell>
                       <TableCell className="text-center space-x-2">
                                       
                         <Link href={route('assigments.edit', assigment.id)}><Button className="bg-blue-700 hover:bg-blue-500 cursor-pointer">Editar</Button></Link>
                         <Button disabled={processing} onClick={() => handleDelete(assigment.id,assigment.reasonend.name)} className="bg-red-500 hover:bg-red-700 cursor-pointer"><Trash /></Button>
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
