import "./Users.css"
function Users({name,profile}){
    return(
        <div className="card">
            <div className="logo">
                <p>Logo</p>
            </div>
            <div className="info">
                <h2>{name}</h2>
                <p>{profile}</p>
            </div>
        </div>
    );
}
export default Users;