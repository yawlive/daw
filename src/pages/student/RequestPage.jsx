import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';
import yujin from '../../assets/images/yujin.jpg'
import rahma from '../../assets/images/rahma.jpg'

//  the card comp
const FriendRequestCard = ({ id, name, grade, imageUrl, onAccept, onDeny }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 transition-all duration-300">
      <div className="w-full sm:w-auto flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-20 h-20 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-dark-purple"
          />
        ) : (
          <UserCircle className="w-20 h-20 sm:w-16 sm:h-16 text-sky-300" />
        )}
      </div>
      
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm">{grade}</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <button
          onClick={() => onAccept(id)}
          className="w-full sm:w-auto px-4 py-2 bg-dark-purple text-white rounded-md hover:bg-opacity-90 transition-colors duration-200"
        >
          Accept
        </button>
        <button
          onClick={() => onDeny(id)}
          className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200"
        >
          Deny
        </button>
      </div>
    </div>
  );
};

const FriendRequestsPage = () => {

  const initialRequests = [
    { id: 1, name: 'Benali Mohammed', grade: 'L3 TI', imageUrl: yujin },
    { id: 2, name: 'Saida Bou', grade: 'L3 TI', imageUrl: rahma },
    { id: 3, name: 'Norhane Benfetima', grade: 'L3 TI', imageUrl: rahma },
    { id: 4, name: 'Malik Mahmoud', grade: 'L3 TI', imageUrl: yujin }
  ];

  const [requests, setRequests] = useState(initialRequests);
  const [acceptedFriends, setAcceptedFriends] = useState([]);

  const handleAccept = (id) => {
    const acceptedFriend = requests.find(request => request.id === id);
    setAcceptedFriends([...acceptedFriends, acceptedFriend]);
    setRequests(requests.filter(request => request.id !== id));
  };

  const handleDeny = (id) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center sm:text-left">
            Friend Requests
          </h1>
          <p className="text-gray-600 text-center sm:text-left">
            {requests.length} pending request{requests.length !== 1 ? 's' : ''}
          </p>
        </div>

        {requests.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {requests.map((request) => (
              <FriendRequestCard
                key={request.id}
                {...request}
                onAccept={handleAccept}
                onDeny={handleDeny}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 text-base sm:text-lg">
              No pending friend requests
            </p>
          </div>
        )}

        {acceptedFriends.length > 0 && (
          <div className="mt-6 sm:mt-8 p-4 bg-green-50 rounded-lg">
            <h2 className="text-base sm:text-lg font-semibold text-green-800 mb-2">
              Recently Accepted Friends
            </h2>
            <ul className="space-y-2">
              {acceptedFriends.map(friend => (
                <li key={friend.id} className="text-green-600 text-sm sm:text-base">
                  {friend.name} ({friend.grade})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendRequestsPage;