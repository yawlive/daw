import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const recentapplications = [
  {
    id: 1,
    teacher: 'Benali Mohamed',
    theme: 'AI-Powered Personal Assistant',
    status: 'Accepted',
    date: '2024-12-17T03:24:00',
  },
  {
    id: 2,
    teacher: 'Mohamed Benali',
    theme: 'AI-Powered Personal Assistant',
    status: 'Rejected',
    date: '2024-06-17T03:24:00',
  },
  {
    id: 3,
    teacher: 'Ali Benmohamed',
    theme: 'Facial Recognition Attendance System',
    status: 'Pending',
    date: '2024-05-17T03:24:00',
  },
  {
    id: 4,
    teacher: 'Maria Henachi',
    theme: 'Real-Time Language Translation App',
    status: 'Pending',
    date: '2024-05-17T03:24:00',
  },
  {
    id: 5,
    teacher: 'Ahmed Bouramoul',
    theme: 'Ethical AI: Bias Detection in Algorithms',
    status: 'Rejected',
    date: '2024-07-17T03:24:00',
  },
];

// Helper Function to Get Order Status
const getOrderStatus = (status) => {
  const statusStyles = {
    Accepted: 'text-green-500',
    Rejected: 'text-red-500',
    Pending: 'text-yellow-500',
  };
  return <span className={statusStyles[status] || 'text-gray-500'}>{status}</span>;
};

const AppTable = () => {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Applications</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700 border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Professor</th>
              <th className="text-left px-4 py-2">Theme</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentapplications.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">
                  <Link to={`/order/${item.teacher}`} className="px-4 py-2">
                    {item.teacher}
                  </Link>
                </td>
                <td className="px-4 py-2">
                  <Link to={`/product/${item.theme}`} className="px-4 py-2">
                    {item.theme}
                  </Link>
                </td>
                <td className="px-4 py-2">{getOrderStatus(item.status)}</td>
                <td className="px-4 py-2">{format(new Date(item.date), 'dd MMM yyyy')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppTable;
