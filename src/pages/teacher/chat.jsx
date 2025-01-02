import React, { useState } from 'react';
import {teachersData, studentsData} from '../../data'
const ChatApp = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'teacher', text: 'Hello! How can I help you today?', time: '10:00 AM' },
    { id: 2, sender: 'student', text: 'I have a question about the project theme.', time: '10:01 AM' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: 'student',
          text: newMessage,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-full w-full">
     <div className="w-1/3 bg-gray-100 p-4 border-r rounded-lg shadow-lg h-full">
  <h2 className="text-lg font-semibold mb-4">Users</h2>
  <ul className="overflow-y-auto max-h-full">
    {teachersData.map((teacher) => (
      <li
        key={teacher.teacher_id}
        onClick={() => setSelectedUser(teacher)}
        className="p-3 bg-slate-100 rounded-lg mb-3 cursor-pointer flex items-center gap-3 hover:shadow-md transition duration-200 ease-in-out"
      >
        <img
          src={teacher.profile_picture}
          alt={teacher.full_name}
          className="w-12 h-12 rounded-full"
        />
        <span className="font-semibold text-gray-800">{teacher.full_name}</span>
      </li>
    ))}
    {studentsData.map((student) => (
      <li
        key={student.studentId}
        onClick={() => setSelectedUser(student)}
        className="p-3 bg-white rounded-lg mb-3 cursor-pointer flex items-center gap-3 hover:bg-gray-200 hover:shadow-md transition duration-200 ease-in-out"
      >
        <img
          src={student.photo}
          alt={student.name}
          className="w-12 h-12 rounded-full"
        />
        <span className="font-semibold text-gray-800">{student.name}</span>
      </li>
    ))}
  </ul>
</div>



      {/* Chat Interface */}
      <div className="flex flex-col flex-1 border shadow-lg">
        {/* Chat Header */}
        <div className="p-4 bg-slate-200 text-dark-purple text-lg font-semibold">
          {selectedUser ? selectedUser.full_name : 'Select a user to chat'}
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
          {selectedUser ? (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'student' ? 'justify-end' : 'justify-start'
                } mb-2`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg shadow text-sm ${
                    message.sender === 'student'
                      ? 'bg-dark-purple text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <p>{message.text}</p>
                  <span className="text-xs text-gray-500 block mt-1">{message.time}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No conversation selected</p>
          )}
        </div>

        {/* Message Input */}
        {selectedUser && (
          <div className="p-4 bg-white border-t flex items-center gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2"
            />
            <button
              onClick={handleSendMessage}
              className="bg-dark-purple text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
