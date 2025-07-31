
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import AuthCallbackPage from "./pages/home/components/AuthCallbackPage";

import MainLayout from "./layout/MainLayout.tsx";
import ChatPage from "./pages/chat/ChatPage.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback 
      signInFallbackRedirectUrl={"/auth-callback"}/>}/>
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
    
   
    <Route element={<MainLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/chat" element= {<ChatPage/>}/>
    </Route>
    </Routes>

  )
}