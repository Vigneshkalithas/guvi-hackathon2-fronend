import  {createContext , useState} from 'react';

let UserContext = createContext();

export const UserProvider = ({children}) => {
    let [user,setUser] = useState({name : "vignesh" , age:20, role : "developer"});
    let [movieList , setMovieList] = useState([]);
    let [mId , setMId] = useState([]);
    return (
        <UserContext.Provider value={{user , setUser , movieList,setMovieList , mId,setMId}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;