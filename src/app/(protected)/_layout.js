import { router, Stack, useSegments } from "expo-router";
import { useEffect } from "react"; // Corrigido o fechamento de "useEffect"
import { AppProvider } from "../hooks"; // Corrigido o fechamento de "AppProvider"
import { useAuth } from "../hooks/Auth";

export default function Layout() {
    const { user } = useAuth();
    const segments = useSegments();

    useEffect(() => {

        const inAuthGroup = segments[0] === "(protected)";

        if(!user?.autenticated && inAuthGroup){
            router.replace("/")

        }else{
            router.replace("/(protected)");
        }
    },[user]);

    return (
        <AppProvider>
            <Stack>
                <Stack.Screen name ="index"/>
                <Stack.Screen name ="(protected)"/>

                
            </Stack>
        </AppProvider>
    );
}
