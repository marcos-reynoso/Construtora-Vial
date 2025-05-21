import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {LayoutGrid ,Tractor,Wrench,Tag,Layers,ClipboardList,FileText,Shovel } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Panel de Control',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Maquinas',
        href: '/machines',
        icon: Tractor,
    },
  
   /*  {
        title: 'Provincias',
        href: '/provinces',
        icon: MapPinned,
    }, */
    {
        title: 'Marcas',
        href: '/brands',
        icon: Tag,
    },
    {
        title: 'Tipos de Maquinas',
        href: '/types',
        icon: Layers,
    },
    {
        title: 'Mantenimientos',
        href: '/maintenances',
        icon: Wrench,
    },
    {
        title: 'Obras',
        href: '/works',
        icon: Shovel,
    },
    {
        title:'Asignaciones',
        href:'/assignations',
        icon: ClipboardList,
    }, {
        title:'Motivos de Finalizacion',
        href:'/reasonend',
        icon: FileText ,
    }

];

const footerNavItems: NavItem[] = [
    
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
