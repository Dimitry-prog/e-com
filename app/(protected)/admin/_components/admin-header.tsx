import { ReactNode } from 'react';

const AdminHeader = ({ title }: { title: ReactNode }) => {
  return <h1 className="mb-4 text-4xl">{title}</h1>;
};

export default AdminHeader;
