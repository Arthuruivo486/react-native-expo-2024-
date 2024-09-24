import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, View,Text } from "react-native";

const FontContext = createContext({});

export function FontProvider({children}) {

    const [loaded,error] = useFonts({
        regular:require("../../assets/fonts/Poppins-Regular.ttf"),
        bold:require("../../assets/fonts/Poppins-Bold.ttf"),
        black:require("../../assets/fonts/Poppins-Black.ttf"),
        semibold:require("../../assets/fonts/Poppins-SemiBold.ttf"),
        light:require("../../assets/fonts/Poppins-Light.ttf"),

    });
    if (!loaded && !error){
        return(

            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text Style={{fontSize: 28}}>
                    Carregando as fontes</Text>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        );
    }
    return (
        <FontContext.Provider value={{loaded}}>
            {children}
        </FontContext.Provider>
        
    );
}

export function useFont() {
    const context = useContext(FontContext);
    if (!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    
    return context;

}
