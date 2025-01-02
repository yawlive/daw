import React, { useState } from 'react';
import rahma from '../../assets/images/rahma.jpg'
import yujin from '../../assets/images/yujin.jpg'


export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const initialRequests = [
    { id: 1, name: 'Benali Mohammed', grade: 'L3 TI', imageUrl:yujin },
    { id: 2, name: 'Saida Bou', grade: 'L3 TI', imageUrl: rahma },
    { id: 3, name: 'Norhane Benfetima', grade: 'L3 TI', imageUrl: rahma },
    { id: 4, name: 'Malik Mahmoud', grade: 'L3 TI', imageUrl: yujin },

  ];
  
  const [profile, setProfile] = useState({
    name: 'Rahma Zendaoui',
    email: 'rahma.zen@email.com',
    phone: '08865422',
    grade: 'L3 TI',
    address: 'Constantine, Constantine',
    major: 'Computer Science',
    skills: ['Python', 'React', 'JavaScript', 'UI/UX Design'],
    friends: initialRequests,
   // profileImage: rahma,
  });

  const [editableProfile, setEditableProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editableProfile);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditableProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const InputField = ({ label, field, value, type = "text" }) => (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => handleInputChange(field, e.target.value)}
        className="w-full p-2 border rounded-md"
      />
    </div>
  );

  const DisplayField = ({ label, value }) => (
    <div className="w-full">
      <span className="block text-sm font-medium text-gray-700">{label}</span>
      <span className="block">{value}</span>
    </div>
  );

  const addSkill = () => {
    if (newSkill.trim() && !editableProfile.skills.includes(newSkill.trim())) {
      setEditableProfile({
        ...editableProfile,
        skills: [...editableProfile.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setEditableProfile({
      ...editableProfile,
      skills: editableProfile.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleEdit = () => {
    setEditableProfile(profile);
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="w-full mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-4 md:p-8">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <img 
                src={rahma}
                alt="Profile"
                className="rounded-full w-32 h-32 object-cover mb-4"
              />
              {/* <span className="text-sm text-gray-600"> */}
                {/* {profile.friends.length} Friends </span> */}
            </div>

            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {isEditing ? (
                  <>
                    <InputField 
                      label="Name"
                      field="name"
                      value={editableProfile.name}
                    />
                    <InputField 
                      label="Email"
                      field="email"
                      value={editableProfile.email}
                      type="email"
                    />
                    <InputField 
                      label="Phone"
                      field="phone"
                      value={editableProfile.phone}
                    />
                    <InputField 
                      label="Grade"
                      field="grade"
                      value={editableProfile.grade}
                    />
                    <InputField 
                      label="Major"
                      field="major"
                      value={editableProfile.major}
                    />
                    <InputField 
                      label="Address"
                      field="address"
                      value={editableProfile.address}
                    />
                  </>
                ) : (
                  <>
                    <DisplayField label="Name" value={profile.name} />
                    <DisplayField label="Email" value={profile.email} />
                    <DisplayField label="Phone" value={profile.phone} />
                    <DisplayField label="Grade" value={profile.grade} />
                    <DisplayField label="Major" value={profile.major} />
                    <DisplayField label="Address" value={profile.address} />
                  </>
                )}
              </div>

              <div className="w-full">
                <h3 className="font-semibold mb-2">Skills</h3>
                {isEditing && (
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a new skill"
                      className="flex-1 p-2 border rounded-md"
                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                    />
                    <button
                      onClick={addSkill}
                      className="px-4 py-2 bg-dark-purple text-white rounded-md hover:bg-slate-800"
                    >
                      Add
                    </button>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {(isEditing ? editableProfile.skills : profile.skills).map((skill, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center ${
                        isEditing ? 'pr-2' : ''
                      }`}
                    >
                      {skill}
                      {isEditing && (
                        <button
                          onClick={() => removeSkill(skill)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end p-4 md:p-6">
            <button
              onClick={isEditing ? handleSave : handleEdit}
              className="px-6 py-2 bg-dark-purple text-white rounded-md hover:bg-dark-purple transition-colors"
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </div>
        
        <div className="p-4 md:p-6 border-t">
          <h3 className="text-lg font-semibold mb-4">Friends ({profile.friends.length})</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {profile.friends.map(friend => (
              <div key={friend.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                <img 
                  src={friend.imageUrl} 
                  alt={friend.name}
                  className="w-20 h-20 rounded-full object-cover mb-2"
                />
                <h4 className="text-md font-medium text-center">{friend.name}</h4>
                <p className="text-sm text-gray-600">{friend.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}