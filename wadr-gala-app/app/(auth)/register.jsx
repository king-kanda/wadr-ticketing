import React , {useState} from 'react';
import { View, Text , TextInput , TouchableOpacity, Pressable} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link } from 'expo-router'


const Register = () => {

  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView className="container mx-auto flex flex-1" edges={['left', 'right']}>
          <View className="flex flex-1 justify-center">

            {/* welcome text */}
            <View>
              <Text className="font-bold text-3xl ">
                Let's Get You Started
              </Text>
              <Text className="text-gray-5 text-sm">
                Hello, you must login first to be able to use the application and enjoy all the features in during the gala
              </Text>
            </View>

            {/* input field */}
            <View className="form-section">
              {/* email address */}
              <View className="py-2">

                <Text className="py-2 text-gray-5">
                  Email Address
                </Text>
                <TextInput
                  className="block w-full p-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:yellow/50 focus:border-yellow block w-full p-2.5"
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="email@womeninadr.com"
                />
              </View>
              {/* password */}
              <View className="py-2">


                <Text className="py-2 text-gray-5">
                  Password
                </Text>
                <TextInput
                  className="block w-full p-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:yellow/50 focus:border-yellow block w-full p-2.5"
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="secure password"
                  keyboardType="numeric"
                />
           
              </View>


              {/* Confirm password */}
              <View className="py-2">


                <Text className="py-2 text-gray-5">
                  Password
                </Text>
                <TextInput
                  className="block w-full p-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:yellow/50 focus:border-yellow block w-full p-2.5"
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="secure password"
                  keyboardType="numeric"
                />
               
              </View>

              {/* submit btn */}
              <View className="mt-6">
                <Pressable className="w-full rounded-full bg-yellow  p-5 self-center">
                  <Text className="text-center text-white font-semibold text-lg ">
                    Sign in
                  </Text>
                </Pressable>
              </View>

            </View>

            {/* social auth section */}
            <View>
                <View className="flex-row items-center mt-8 mb-4">
                {/* Left Divider */}
                  <View className="flex-1 h-px bg-gray-3" />
                  
                  {/* OR Text */}
                  <Text className="mx-3 text-gray-5 text-sm">Or Sign in with</Text>
                  
                  {/* Right Divider */}
                  <View className="flex-1 h-px bg-gray-3" />
                </View>
                <View  className="flex-row items-center justify-between my-4 gap-4">
                  <Pressable className="text-center flex-row items-center gap-4 bg-gray-1 py-4 px-10 rounded-full">
                    <AntDesign name="google" size={24} color="red" />
                    <Text className="font-semibold ">
                      Google
                    </Text>
                  </Pressable>
                  <Pressable className="text-center flex-row items-center gap-4 bg-gray-1 py-4 px-10 rounded-full">
                  <FontAwesome5 name="facebook" size={24} color="navy" />
                    <Text className="font-semibold ">
                      Facebook
                    </Text>
                  </Pressable>

                </View>
            </View>

            <View className="mt-4">
              <Text className="font-medium text-gray-5">
                have and account ? <Link href='/' className="text-yellow underline  font-semibold" >Login </Link>
              </Text>

            </View>


          </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Register