import React, { useState } from "react";
import { FaFilePdf, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { user as initialuser } from "../../data";
import { FaRegEdit ,FaEdit , FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const Tprofile = () => {
  const [user,setuser]=useState(initialuser);
  const [editprofile , seteditprofile]=useState(false)
  const [editingCardIndex, setEditingCardIndex] = useState(null); 
  const [menuVisible, setMenuVisible] = useState(null);
  const [updatedThemes, setUpdatedThemes] = useState(user.themes); 



  const iconprofileEdit = () => {
    seteditprofile(!editprofile);
  };




  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            setuser((prev) => ({ ...prev, profile_picture: reader.result }));
        };
        reader.readAsDataURL(file);
    }
  };
  

const handleCardChange = (index, field, value) => {
  const updated = [...updatedThemes];
  updated[index][field] = value;
  setUpdatedThemes(updated);
};

const handleEditCard = (index) => {
  setEditingCardIndex(index); 
  setMenuVisible(null); 
};
////////////////////////////////////////////////////////////////////
const handleDeleteCard = (index) => {
  const updated = updatedThemes.filter((_, i) => i !== index);
  setUpdatedThemes(updated);
  setMenuVisible(null); 
};

  const handleprofilechange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
};
  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-700";
      case "in progress":
        return "bg-blue-100 text-blue-700";
      case "submitted":
        return "bg-orange-100 text-orange-700";
      case "closed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };


/////////default values then you can edit the card using edit button haha work smart not hard /////////
  const addcard = () => {
    const newCard = {
      title: "New Theme",
      description: "Description goes here...",
      specialization: "Specialization goes here...",
      keywords: [],
      status: "open", 
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      pdf: null,
    };
  
    setUpdatedThemes((prev) => [...prev, newCard]);
    setEditingCardIndex(updatedThemes.length); 
  };
  

  return (
    <div className="p-4 bg-slate-100 min-h-screen overflow-hidden">
      {/* Profile Section */}
      <div className=" bg-white rounded-lg p-10">
      <div className=" mb-6 pb-4">
          
          <h1 className="lg:text-3xl text-3xl font-bold text-gray-700">
            Profile
          </h1>
        </div>
        <div className="p-6  flex flex-col lg:flex-row lg:justify-between lg:pr-20 border-b lg:gap-6">
         

          <div className="flex  items-center gap-4">
            
            {editprofile ? (
              <label
                htmlFor="photoInput"
              //  className="absolute bottom-0 right-0 bg-gray-200 rounded-full p-1 cursor-pointer"
              >
                📷
                <input
                  id="photoInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
              </label>
             ):(<img
              src={user.profile_picture || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />)}
            <div>
            {editprofile ? (
                <>
                
                  <input
                    type="text"
                    name="full_name"
                    value={user.full_name}
                    onChange={handleprofilechange}
                    className="border rounded p-1"
                  />
                  <input
                    type="text"
                    name="teacher_id"
                    value={user.teacher_id}
                    onChange={handleprofilechange}
                    className="border rounded p-1 mt-2"
                  />
                </>
              ) : (
                <>
              <h2 className="text-lg font-bold">{user.full_name}</h2>
              <p className="text-gray-500 text-sm">#{user.teacher_id}</p>
              </> )}
            </div>
          </div>

          {/* About Section */}
          <div className="mt-4 lg:border-l-2 lg:pl-6 pt-4 lg:pt-0">
            <h3 className="text-gray-700 font-semibold mb-2">About</h3>
           
            {editprofile ? (
              <>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleprofilechange}
                className="border rounded p-1"
              />
              <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleprofilechange}
              className="border rounded p-1"
            /></>
            ) : (
              <>
               <p className="text-gray-600 text-sm flex items-center gap-2">
              <FaPhone className="text-dark-purple" /> Phone: {user.phone}
            </p>
            <p className="text-gray-600 text-sm flex items-center gap-2">
              <FaEnvelope className="text-dark-purple" /> Email: {user.email}
            </p></>)}
          </div>

          <div className="mt-4 lg:border-l-2 lg:pl-6 pt-4 lg:pt-0">
          {editprofile ? (
              <>
              <input
                type="text"
                name="specialization"
                value={user.specialization}
                onChange={handleprofilechange}
                className="border rounded p-1"
              />
             </>
            ) : (
              <>
            <h3 className="text-gray-700 font-semibold mb-2">Details</h3>
            <p className="text-gray-600 text-sm flex items-center gap-2">
              <FaMapMarkerAlt className="text-dark-purple" /> Specialization:{" "}
              {user.specialization}
            </p>
            </>)}
            {!editprofile && (
    <p className="text-gray-600 text-sm flex items-center gap-2">
        <FaCalendarAlt className="text-dark-purple" /> Created At: {user.created_at}
    </p>
)}
          </div> 

          <div className="text-dark-purple pt-6  ">
           <FaRegEdit className=" w-5 h-5 ml-1" onClick={iconprofileEdit}/>
           <p>Edit</p>
           </div>
        </div>
       
        {/* items section */}
        <div className="flex flex-row justify-between   mt-4 ml-4">
        <p className="font-normal mr-1 text-dark-purple">my themes</p>
        <div className="flex flex-row mr-1">
         <p className="font-normal mr-2 text-dark-purple">add</p> 
        <FaPlus className="justify-self-center  text-dark-purple size-6" on onClick={addcard}/>
        </div></div>
       
        <div className="mt-4 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">

         {updatedThemes.map((item1, index) => (
         <div key={index} className="relative bg-white rounded-lg shadow-lg p-4">
         
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">{item1.title}</h2>
            <div className="flex flex-row">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(item1.status)}`}
              >
                {item1.status}
              </span>
              <IoEllipsisVertical
                className="mt-1.5 z-50 cursor-pointer"
                onClick={() =>
                  setMenuVisible(menuVisible === index ? null : index)
                }
              />
            </div>
          </div>

          {menuVisible === index && (
            <div className="absolute top-0 right-0 w-32 bg-white shadow-md rounded p-2">
              <button
                className="text-blue-500 block mb-2"
                onClick={() => handleEditCard(index)}
              >
                <FaEdit /> Edit
              </button>
              <button
                className="text-red-500"
                onClick={() => handleDeleteCard(index)}
              >
                <FaTrash /> Delete
              </button>
            </div>
          )}

          {editingCardIndex === index ? (
            <>
              <input
                type="text"
                value={item1.title}
                onChange={(e) => handleCardChange(index, "title", e.target.value)}
                className="border rounded p-1"
              />
              <textarea
                value={item1.description}
                onChange={(e) => handleCardChange(index, "description", e.target.value)}
                className="border rounded p-1 mt-2"
              />
              <input
                type="text"
                value={item1.specialization}
                onChange={(e) => handleCardChange(index, "specialization", e.target.value)}
                className="border rounded p-1 mt-2"
              />
              <input
                type="text"
                value={item1.keywords.join(", ")}
                onChange={(e) => handleCardChange(index, "keywords", e.target.value.split(", "))}
                className="border rounded p-1 mt-2"
                placeholder="Enter keywords separated by commas"
              />
              <input
                type="file"
                onChange={(e) => handleCardChange(index, "pdf", e.target.files[0])}
                className="border rounded p-1 mt-2"
              />
              <button
                onClick={() => setEditingCardIndex(null)}
                className="bg-dark-purple text-white px-2 py-1.5 mt-4 rounded"
              >
                Save
              </button>
            </>
          ) : (
            <>
              {/* Description */}
              <p className="text-gray-600 mt-2 line-clamp-3">{item1.description}</p>

              {/* Metadata */}
              <div className="text-sm text-gray-500 mt-4">
                <p>Specialization: {item1.specialization}</p>
                <p>Created: {new Date(item1.created_at).toLocaleDateString()}</p>
                <p>Updated: {new Date(item1.updated_at).toLocaleDateString()}</p>
              </div>

              <div className="flex justify-between items-center mt-6 border-t pt-4">
               
                <div className="flex flex-wrap gap-2">
                  {item1.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-300 text-gray-700S px-2 py-1 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}

                </div>

                {item1.pdf && (
                  <a
                    href={item1.pdf}
                    download
                    className="text-sm text-blue-600 flex items-center gap-1 hover:underline"
                  >
                    <FaFilePdf className="text-red-500" /> PDF
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      ))}
        
   
    </div>
      </div>
    </div>
  );
};

export default Tprofile;
