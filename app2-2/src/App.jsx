import Navbar from "../components/Navbar";
import Users from "../components/Users";
import Footer from "../components/Footer";
import "./App.css";

function App() {
  let user = [
    { name: "User1", profile: "He is the employee1" },
    { name: "User2", profile: "He is the employee2" },
    { name: "User3", profile: "He is the employee3" },
    { name: "User4", profile: "He is the employee4" },
    { name: "User5", profile: "He is the employee5" },
    { name: "User6", profile: "He is the employee6" },
    { name: "User7", profile: "He is the employee7" },
    { name: "User8", profile: "He is the employee8" }
  ];

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <div className="user-container">
          {user.map((u, index) => (
            <Users key={index} name={u.name} profile={u.profile} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
