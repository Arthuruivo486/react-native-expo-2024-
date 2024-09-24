import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/Auth";

export default function App() {
    const { signIn, signOut,user } = useAuth(); // Adicionada a variável 'user' para verificar o estado atual

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aplicativo Pronto para Usar</Text>
            <Button 
                title="Signin Super" 
                onPress={() => signIn({ email: "super@gmail.com", password: "Super123!" })} // Verifique a senha 'Super123!'
            />
            <Button 
                title="Signout" 
                onPress={() => signOut()} 
            />
           
            
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "regular",
    fontSize: 20,
  },
});
