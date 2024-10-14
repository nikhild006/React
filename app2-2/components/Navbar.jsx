import "./Navbar.css"
function Navbar(){
    return(
        <nav className="navbar">
            <div className="n-logo">
            <h2>LOGO</h2></div>
            <div className="menu">
            
        <a href="#home">Home</a>
        <a href="#signup">Signup</a>
        <a href="#login">Login</a>
            </div>
        </nav>
    );
}
export default Navbar;