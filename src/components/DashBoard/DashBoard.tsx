import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserDetail from "./UserDetail";
import { users } from "../../data/User";

export default function DashBoard() {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModalWelcome = () => {
    setIsWelcomeModalOpen(false);
    // localStorage.setItem("welcomeSeen", "true");
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const filteredSearch = users
    .filter((user) => !user.permission)
    .filter((user) =>
      `${user.id_card} ${user.name} ${user.last_name} ${user.student_level}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

  useEffect(() => {
    const welcomeAlert = localStorage.getItem("welcomeSeen");
    if (!welcomeAlert) {
      setIsWelcomeModalOpen(true);
    }
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        closeModalWelcome();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !(modalRef.current as HTMLElement).contains(event.target as Node)
      ) {
        closeModal();
        closeModalWelcome();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-6">
      <div className="w-full max-w-3xl bg-white p-6 rounded shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold">Dashboard</span>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={handleLogout}>
            Logout
          </button>
        </div>
  
        <input
          type="text"
          placeholder="Search by name, last name, or student level..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="grid grid-cols-4 py-2 pl-2 rounded-lg text-lg font-semibold border-b-2 mb-2 bg-gray-800/15 ">
          <span className="text-left">ID Card</span>
          <span className="text-left">Name</span>
          <span className="text-left">Last Name</span>
          <span className="text-left">Level</span>
        </div>

        <div className="overflow-auto h-[calc(100vh-300px)]">
          <div className="space-y-2">
            {filteredSearch.map((user) => (
              <div 
                key={user.id} 
                className="grid grid-cols-4 py-2 pl-2 bg-white rounded hover:bg-gray-800/15 cursor-pointer shadow-lg" 
                onClick={() => handleUserClick(user)}
              >
                <span className="text-left">{user.id_card}</span>
                <span className="text-left">{user.name}</span>
                <span className="text-left">{user.last_name}</span>
                <span className="text-left">{user.student_level}</span>
              </div>
            ))}
          </div>
        </div>
  
        {isModalOpen && selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3" ref={modalRef}>
              <UserDetail user={selectedUser} />
              <div className="flex justify-end">
                <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {isWelcomeModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/3 lg:w-1/4" ref={modalRef}>
              <h2 className="text-lg font-bold mb-4">Welcome!</h2>
              <p className="mb-4">Welcome to the Dashboard 🎉🎉🎉</p>
              <div className="flex justify-end">
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-500/70" onClick={closeModalWelcome}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
  
}
