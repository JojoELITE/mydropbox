import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, {useEffect, useState} from 'react';
import FileList from "./components/FileList";
import Upload from "./components/Upload";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Loader from "./components/Loader";
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';


function App({ signOut }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false)

    }, []);
    return (
        <BrowserRouter>
            <div className="App min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500">

                <div className="flex justify-end p-6">
                    <Button onClick={()=>{
                        setLoading(true)
                        signOut()
                    }}>Sign out</Button>
                </div>
                {loading && <Loader/>}
                <center className='mt-5 pt-5'>
                    <h2 className='mb-5 text-white text-2xl'>Welcome to MyDropbox, you can upload your files</h2>
                    <nav>
                            <span className="m-1">
                                <Button className="">
                                <Link to="/">Upload File</Link>
                            </Button>
                            </span>

                            <span className="m-1">
                                <Button>
                                <Link to="/files">View Files</Link>
                                </Button>
                            </span>

                            <span className="m-1">
                                <Button>
                                <Link to="/profile">Profile</Link>
                                </Button>
                            </span>

                            <span className="m-1">
                                <Button>
                                <Link to="/edit-profile">Edit Profile</Link>
                                </Button>
                            </span>

                    </nav>
                    <Routes>
                            <Route exact path="/" element={<Upload />} />
                            <Route exact path="/files" element={<FileList />} />
                            <Route exact path="/profile" element={<Profile />} />
                            <Route exact path="/edit-profile" element={<EditProfile />} />
                            <Route path="*" element={<h1>404, No Page Found</h1>} />
                    </Routes>
                </center>
                <br/>

            </div>

        </BrowserRouter>

  );
}

export default withAuthenticator(App);
