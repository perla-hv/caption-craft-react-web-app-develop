import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import store from "./pages/store";
import SignupPage from './pages/UserManagement/Signup';
import LoginPage from './pages/UserManagement/Login';
import CraftPage from './pages/guest/Craft';
import PostsPage from './pages/guest/Posts';
import MessagesPage from './pages/guest/Messages';
import ProfilePage from './pages/guest/Profile';
import SettingsPage from './pages/guest/Settings';
import HelpPage from './pages/guest/Help';
import UserCraft from './pages/user/Craft';
import UserPosts from './pages/user/Posts';
import {Provider} from "react-redux";
import UserProfile from "./pages/user/Profile";
import UserHelp from "./pages/user/Help";
import UserSettings from "./pages/user/Settings";
import UserMessages from "./pages/user/Messages";

function App() {
  return (
    <div>
    <div>
        <Provider store={store}>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<CraftPage/>} />
                <Route path="/Login" element={<LoginPage/>} />
                <Route path="/Signup" element={<SignupPage/>} />
                <Route path="/Craft" element={<CraftPage/>} />
                <Route path="/Home" element={<PostsPage/>} />
                <Route path="/Messages" element={<MessagesPage/>}/>
                <Route path="/Profile" element={<ProfilePage/>}/>
                <Route path="/Settings" element={<SettingsPage/>}/>
                <Route path="/Help" element={<HelpPage/>}/>
                <Route path="/UserCraft" element={<UserCraft/>}/>
                <Route path="/UserHome" element={<UserPosts/>}/>
                <Route path="/UserProfile" element={<UserProfile/>}/>
                <Route path="/UserHelp" element={<UserHelp/>}/>
                <Route path="/UserSettings" element={<UserSettings/>}/>
                <Route path="/UserMessages" element={<UserMessages/>}/>
                <Route path="/UserMessages/:frndId" element={<UserMessages />} />
            </Routes>
          </BrowserRouter>
        </Provider>
    </div>
  </div>
  );
}

export default App;