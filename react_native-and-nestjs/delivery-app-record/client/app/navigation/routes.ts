import Home from "@/components/screens/home/Home";
import { IRoute } from "./navigation.types";
import Auth from "@/components/screens/auth/Auth";

export const routes:IRoute[] = [
    {
        name: 'Auth',
        component: Auth
    },
    {
        name: 'Home',
        component: Home
    }
]