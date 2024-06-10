import { getAverageValuePerCustomer } from '@/app/(protected)/admin/_actions/get-customers';
import { getProductsCount } from '@/app/(protected)/admin/_actions/get-products';
import { getSalesCount } from '@/app/(protected)/admin/_actions/get-sales';
import DashboardCard from '@/app/(protected)/admin/_components/dashboard-card';
import { formatCurrency, formatNumber } from '@/shared/lib/formatters';

const AdminPage = async () => {
  const [sales, averageValue, products] = await Promise.all([
    getSalesCount(),
    getAverageValuePerCustomer(),
    getProductsCount(),
  ]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <DashboardCard
        title="Sales"
        description={`${formatNumber(sales.numberOfSales)} Orders`}
        content={formatCurrency(sales.amount)}
      />
      <DashboardCard
        title="Customers"
        description={`${formatNumber(averageValue.averageValue)} Average Value`}
        content={formatCurrency(averageValue.userCount)}
      />
      <DashboardCard
        title="Products"
        description={`${formatNumber(products.inactiveCount)} Inactive`}
        content={formatCurrency(products.activeCount)}
      />
    </div>
  );
};

export default AdminPage;
