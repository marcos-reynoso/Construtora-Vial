import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
export interface Type {
    id: number;
    name: string;
}

export interface Province {
    id: number;
    name: string;
}

export interface Brand {
    id: number;
    name: string;
}
export interface ReasonEnd {
    id: number;
    name: string;
}
export interface Maintenance {
    id: number;
    name: string;
    mileage_application: number;
}
export interface Machine {
    id: number;
    num_ser: string;
    type: { id: number; name: string };
    province: { id: number; name: string };
    brand: { id: number; name: string };
    maintenance?: { id: number; name: string };
}
export interface Work {
    id: number;
    name: string;
    province: { id: number; name: string };
    start_date: Date;
    end_date: Date;

}
export interface Assignment {
    id: number;
    start_date: Date;
    end_date: Date;
    reason_end: string;
    mileage: number;
    machine: { id: number; num_ser: string };
    work: { id: number; name: string };
}