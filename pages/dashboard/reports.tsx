import DashboardLayout from '../../components/layout/DashboardLayout';
import ReportTable from '../../components/dashboard/ReportTable';
import { Report } from '../../types';

const mockReports: Report[] = [
  { id: '1', type: 'Ride Summary', date: '2025-03-01', details: '10 rides completed' },
  { id: '2', type: 'Payment Report', date: '2025-03-15', details: 'Total: $500' },
];

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6">Reports</h2>
      <ReportTable reports={mockReports} />
    </DashboardLayout>
  );
}