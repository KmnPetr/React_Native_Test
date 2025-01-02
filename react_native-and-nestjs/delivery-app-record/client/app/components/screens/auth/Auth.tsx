import Button from "@/components/ui/button/Button";
import Loader from "@/components/ui/Loader";
import { useTypedNavigation } from "@/hooks/useTypedNavigation";
import { IAuthFormData } from "@/types/auth.interface";
import React from "react";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { View,Text, Pressable, StyleSheet } from "react-native";
import AuthFields from "./AuthFields";

const Auth:FC =()=> {

    const [isReg,setIsReg] = useState(false)
    const {handleSubmit,reset,control} = useForm<IAuthFormData>({mode:'onChange'})
    
    const onSubmit:SubmitHandler<IAuthFormData>=data=>{console.log(data)}

    const isLoading = false
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.headerText}>{isReg? 'Sign Up': 'Login'}</Text>
                {isLoading ? 
                <Loader/> 
                : 
                <>
                    <AuthFields control={control}/>
                    <Button onPress={handleSubmit(onSubmit)}>
                        <Text>{isReg? 'Sign Up': 'Login'}</Text>
                    </Button>
					<Pressable onPress={() => setIsReg(!isReg)}>
					    <Text style={styles.switchText}>
						    {isReg
							    ? 'Already have an account? '
							    : "Don't have an account? "}
							    <Text style={styles.highlightText}>
								    {isReg ? 'Login' : 'Sign up'}
							    </Text>
					    </Text>
				    </Pressable>
                </>
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 8,
    },
    innerContainer: {
      width: "75%", // эквивалентно w-9/12
    },
    headerText: {
      textAlign: "center",
      color: "black",
      fontSize: 24, // эквивалентно text-3xl
      fontWeight: "500", // эквивалентно font-medium
      marginBottom: 16, // эквивалентно mb-8
    },
    switchText: {
      color: "black",
      textAlign: "center",
      fontSize: 16, // эквивалентно text-base
      marginTop: 24, // эквивалентно mt-6
    },
    highlightText: {
      color: "#47AA52", // эквивалентно text-[#47AA52]
    },
  });

export default Auth