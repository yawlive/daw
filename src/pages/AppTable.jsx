import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const recentApplications = [
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

const StatusBadge = ({ status }) => {
  const statusStyles = {
    Accepted: 'bg-green-100 text-green-800',
    Rejected: 'bg-red-100 text-red-800',
    Pending: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span className={`${statusStyles[status]} px-3 py-1 rounded-full text-sm font-medium`}>
      {status}
    </span>
  );
};

const AppTable = () => {
  return (
    <div className="p-6  bg-gray-100 min-h-screen">
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-dark-purple to-blue-950 px-6 py-4">
          <h2 className="text-xl font-bold text-white">Application History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Professor</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Theme</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentApplications.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <Link 
                      to={`/order/${item.teacher}`}
                      className="text-indigo-900 hover:text-indigo-700 font-medium"
                    >
                      {item.teacher}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Link 
                      to={`/product/${item.theme}`}
                      className="text-indigo-900 hover:text-indigo-700"
                    >
                      {item.theme}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {format(new Date(item.date), 'dd MMM yyyy')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppTable;