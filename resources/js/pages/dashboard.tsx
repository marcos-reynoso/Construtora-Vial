
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import MachineSearch from './Search/Machine';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Panel de Control',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <Link className='w-50' target='_blank' href={route('provinces.index')}>
    <Button className="bg-green-600 hover:bg-green-700 cursor-pointer">
      Reporte Provincias PDF
    </Button>
  </Link>
              
              
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                      <MachineSearch />
                   
                </div>
            </div>
        </AppLayout>
    );
}
