import { ReactNode } from 'react';

interface PageLayoutProps {
    children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
            {children}
        </div>
    );
} 