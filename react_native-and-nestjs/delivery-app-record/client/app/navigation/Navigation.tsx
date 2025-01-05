import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC, useEffect, useState } from "react";
import { View,Text } from "react-native";
import { TypeRootStackParamList } from "./navigation.types";
import { routes } from "./routes";
import PrivateNavigator from "./PrivateNavigator";
import React from "react";
import ButtomMenu from "@/components/ui/layout/bottom-menu/ButtomMenu";
import { useAuth } from "@/hooks/useAuth";
import { useCheckAuth } from "@/providers/auth/useCheckAuth";

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation:FC =()=> {
    const {user} = useAuth()
    const [currentRoute,setCurrentRoute] = useState<string | undefined>(undefined)
	const navRef = useNavigationContainerRef()

    
	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		)

		return () => {
			navRef.removeListener('state', listener)
		}
	}, [])
    
    useCheckAuth(currentRoute)

    return(
        <>
            <NavigationContainer ref={navRef}>
                <PrivateNavigator/>
            </NavigationContainer>
            {user && currentRoute && (
                <ButtomMenu nav={navRef.navigate} currentRoute={currentRoute}/>
            )}
        </>
    )
}

export default Navigation