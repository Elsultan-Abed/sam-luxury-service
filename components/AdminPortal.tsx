
import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminInvoice from './AdminInvoice';

const AdminPortal: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (!isAuthenticated) {
        return <AdminLogin onSuccess={() => setIsAuthenticated(true)} />;
    }

    return <AdminInvoice />;
};

export default AdminPortal;
