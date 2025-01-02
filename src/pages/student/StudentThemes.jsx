import React, { useState } from 'react';

export default function StudentThemes() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(null);
  const [application, setApplication] = useState({
    studentName: '',
    binomeName: ''
  });

  const themes = [
    {
      title: "AI in Healthcare Systems",
      description: "Research on applying artificial intelligence to improve healthcare services.",
      specialization: "Computer Science",
      status: "Available",
      created_at: "2024-01-01",
      updated_at: "2024-01-15",
      keywords: ["AI", "Machine Learning", "Healthcare"],
      pdf: "/sample.pdf",
      teacher: "Dr. Amine Belkacem"
    },
    {
      title: "Blockchain for Digital Identity",
      description: "Study the use of blockchain technology for secure digital identity management.",
      specialization: "Computer Science",
      status: "Closed",
      created_at: "2024-02-01",
      updated_at: "2024-02-10",
      keywords: ["Blockchain", "Digital Identity", "Security"],
      pdf: "/sample2.pdf",
      teacher: "Prof. Lynda Touati"
    },
    {
      title: "Quantum Computing Algorithms",
      description: "Exploring quantum algorithms and their potential applications in computational science.",
      specialization: "Computer Science",
      status: "Available",
      created_at: "2024-03-01",
      updated_at: "2024-03-10",
      keywords: ["Quantum Computing", "Algorithms", "Quantum Mechanics"],
      pdf: "/sample3.pdf",
      teacher: "Dr. Yacine Boudjema"
    },
    {
      title: "Big Data and Cloud Computing",
      description: "Researching the use of cloud infrastructure to handle large-scale data storage and processing.",
      specialization: "Computer Science",
      status: "Available",
      created_at: "2024-04-01",
      updated_at: "2024-04-10",
      keywords: ["Big Data", "Cloud Computing", "Data Science"],
      pdf: "/sample4.pdf",
      teacher: "Prof. Samir Benali"
    },
    {
      title: "Cybersecurity in IoT Systems",
      description: "Investigating the security challenges and solutions for Internet of Things (IoT) devices.",
      specialization: "Computer Science",
      status: "Closed",
      created_at: "2024-05-01",
      updated_at: "2024-05-15",
      keywords: ["Cybersecurity", "IoT", "Networking"],
      pdf: "/sample5.pdf",
      teacher: "Dr. Nassim Rezig"
    }
  ];

  const handleApply = (theme) => {
    setCurrentTheme(theme);
    setIsApplicationOpen(true);
  };

  const handleSubmitApplication = () => {
    if (application.studentName && application.binomeName) {
      console.log('Application submitted:', {
        theme: currentTheme?.title,
        ...application
      });
      setIsApplicationOpen(false);
      setApplication({ studentName: '', binomeName: '' });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-dark-purple mb-6">All Themes</h1>
      
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {themes.map((theme, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800">{theme.title}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${theme.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {theme.status}
                </span>
              </div>

              <p className="text-gray-600 mt-2 line-clamp-3">{theme.description}</p>

              <div className="text-sm text-gray-500 mt-4">
                <p>Teacher: {theme.teacher}</p>
                <p>Specialization: {theme.specialization}</p>
                <p>Created: {new Date(theme.created_at).toLocaleDateString()}</p>
              </div>

              <div className="flex justify-between items-center mt-6 border-t pt-4">
                <div className="flex flex-wrap gap-2">
                  {theme.keywords.map((keyword, i) => (
                    <span key={i} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>

                {theme.pdf && (
                  <a href={theme.pdf} className="text-sm text-blue-600 flex items-center gap-1 hover:underline">
                    PDF
                  </a>
                )}
              </div>
            </div>

            <button
              onClick={() => handleApply(theme)}
              disabled={theme.status === 'Closed'}
              className={`w-full mt-4 py-2 rounded-md transition-colors ${theme.status === 'Closed' ? 'bg-gray-400 cursor-not-allowed' : 'bg-dark-purple text-white hover:bg-opacity-90'}`}
            >
              Apply for Theme
            </button>
          </div>
        ))}
      </div>

      {isApplicationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full sm:w-96 md:w-80 lg:w-96 relative">
            <button 
              onClick={() => setIsApplicationOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Apply for Theme: {currentTheme?.title}</h2>




            <div className="space-y-4 ">
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  value={application.studentName}
                  onChange={(e) => setApplication({...application, studentName: e.target.value})}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Binome Name</label>
                <input
                  type="text"
                  value={application.binomeName}
                  onChange={(e) => setApplication({...application, binomeName: e.target.value})}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button
                onClick={handleSubmitApplication}
                className="w-full bg-dark-purple text-white px-4 py-2 rounded-md hover:bg-opacity-90"
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
