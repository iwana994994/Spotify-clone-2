import axiosInstance from "@/lib/axios";

import { useChatStore } from "@/stores/useChat";
import { useAuth } from "@clerk/clerk-react";

import { useEffect} from "react";

const updateApiToken = (token: string | null) => {
	if (token) axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	else delete axiosInstance.defaults.headers.common["Authorization"];
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const { getToken, userId } = useAuth();
	

	const { initSocket, disconnectSocket } = useChatStore();


	useEffect(() => {
		const initAuth = async () => {
			try {
				const token = await getToken();
				
				updateApiToken(token);
				if (token) {
					
					// init socket
					if (userId) initSocket(userId);
				
				}
			} catch (error) {
				updateApiToken(null);
				console.log("Error in auth provider", error);
			}
		};

		initAuth();

		// clean up
		return () => disconnectSocket();
	}, [getToken, userId, initSocket, disconnectSocket]);



	return <>{children}</>;
};
export default AuthProvider;
