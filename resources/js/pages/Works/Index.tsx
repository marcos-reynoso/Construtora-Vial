import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem ,Work} from '@/types';
import { Head, useForm, usePage,Link} from '@inertiajs/react';
import {Table,TableHead,TableBody,TableHeader,TableRow,TableCell} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {  Trash } from 'lucide-react';




const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Obras',
        href: '/works',
    },
];


interface PageProps {

  works: Work[];
  [key: string]: Work[];
}

export default function Index() {
  const { works} = usePage<PageProps>().props;
     const {processing, delete: destroy} = useForm();

     
    const handleDelete = (id: number, name: string ) => {
        if(confirm(`Quiere eliminar esta Obra - ${id}. ${name}`)){
            destroy(route("works.destroy", id));
        }
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Obras" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <h1 className="text-2xl font-bold text-foreground">Listado de Obras</h1>
    
 <Link href={route('works.create') } className='w-50'><Button className='w-50 cursor-pointer'>Crear</Button></Link>
        <div className="rounded-xl border bg-background p-4 shadow-sm dark:border-gray-700">
           
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Nombre de Obra</TableHead>
                <TableHead className="text-left">Fecha Inicio de Obra</TableHead>
                <TableHead className="text-left">Fecha de Final Obra</TableHead>
                <TableHead className="text-left">Provincia</TableHead>
                <TableHead className="text-center">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {works.map((work:Work) => (
                <TableRow key={work.id}>
                  <TableCell>{work.name}</TableCell>
                  <TableCell>{new Date(work.start_date).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(work.end_date).toLocaleDateString()}</TableCell>
                  <TableCell>{work.province.name}</TableCell>
               
                       <TableCell className="text-center space-x-2">
                                       
                                        <Link href={route('works.edit', work.id)}><Button className="bg-blue-700 hover:bg-blue-500 cursor-pointer">Editar</Button></Link>
                                        <Button disabled={processing} onClick={() => handleDelete(work.id, work.name,)} className="bg-red-500 hover:bg-red-700 cursor-pointer"><Trash /></Button>
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
