import Loader from "@/components/ui/Loader";
import { useTypedNavigation } from "@/hooks/useTypedNavigation";
import { IAuthFormData } from "@/types/auth.interface";
import React from "react";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { View,Text, Pressable } from "react-native";

const Auth:FC =()=> {

    const [isReg,setIsReg] = useState(false)
    const {handleSubmit,reset,control} = useForm<IAuthFormData>({mode:'onChange'})
    const onSubmit:SubmitHandler<IAuthFormData>=data=>{console.log(data)}

    const isLoading = false
    return(
        <View className='mx-2 items-center justify-center h-full'>
            <View className="w-9/12">
            <Text className="text-center text-black text-3xl font-medium mb-8">{isReg? 'Sign Up': 'Login'}</Text>
            {isLoading ? <Loader/> : <></>}
            </View>
        </View>
    )
}

export default Auth