import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import Cadastro from './pages/cadastro'
import Home from './pages/home'
import Login from './pages/login'
import Pix from './pages/pix'
import PixDois from './pages/pixDois'
import Loan from './pages/loan'
import Qrcode from './pages/qrcode'
import Final from './pages/final'
import Comprovante from './pages/comprovante'
import Categories from "./pages/categories";


const Pilha = createStackNavigator()
const Nav = createBottomTabNavigator()

function NavBar() {
    return (
        <Nav.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopColor: 'transparent',
                    paddingBottom: 1,
                    paddingTop: 1,
                },
                tabBarActiveTintColor: '#3A0CA3',
                tabBarInactiveTintColor: '#000',
            }}
        >
            <Nav.Screen name="Sair" component={Login}
                options={{
                    tabBarStyle: { display: 'none' },
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="arrow-back-outline" size={24} color="black" />
                    )
                }}
            />


            <Nav.Screen name="Home" component={Home}
                options={{

                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />

            <Nav.Screen name="Categories" component={Categories}
                options={{

                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="plus" size={24} color={color} />
                    )
                }}
            />

        </Nav.Navigator>
    )
}

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>

                <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ title: false, headerShown: false }}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ theaderShown: false, }}
                />
                <Pilha.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: false, }}

                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Categories"
                    component={Categories}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Pix"
                    component={Pix}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Loan"
                    component={Loan}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="PixDois"
                    component={PixDois}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Qrcode"
                    component={Qrcode}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Final"
                    component={Final}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Comprovante"
                    component={Comprovante}
                    options={{ headerShown: false }}
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}
