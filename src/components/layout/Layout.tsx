import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <main className="p-2">
            <section>
                <Outlet />
            </section>
        </main>
    );
};

export default Layout;
