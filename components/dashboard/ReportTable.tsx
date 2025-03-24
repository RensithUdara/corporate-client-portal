import { Report } from '../../types';

interface ReportTableProps {
  reports: Report[];
}

const ReportTable = ({ reports }: ReportTableProps) => {
  return (
    <table className="report-table w-full card">
      <thead>
        <tr className="bg-gray-200">
          <th>ID</th>
          <th>Type</th>
          <th>Date</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report) => (
          <tr key={report.id} className="border-t">
            <td>{report.id}</td>
            <td>{report.type}</td>
            <td>{report.date}</td>
            <td>{report.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;