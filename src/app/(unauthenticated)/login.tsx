import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Login() {
  return (
    <View className='flex-1 bg-white justify-center px-8'>
      {/* Logo / Brand Section */}
      <View className='items-center mb-12'>
        <Text className='text-5xl font-bold text-black mb-2'>VIBE</Text>
        <Text className='text-gray-500 text-base'>Log in with your account</Text>
      </View>

      {/* Form Section */}
      <View className='gap-3'>
        <Input 
          label='Email' 
          placeholder='Enter your email'
          className='bg-gray-100 border-0 rounded-xl px-4 py-3'
        />
        <Input 
          label='Password' 
          secureTextEntry={true} 
          placeholder='Enter your password'
          className='bg-gray-100 border-0 rounded-xl px-4 py-3'
        />
        
        <View className='mt-4'>
          <Button 
            label='Log In' 
            onPress={() => router.push('/home')}
            className='bg-black rounded-xl py-4'
          />
        </View>
      </View>

      {/* Footer / Register Link */}
      <View className='flex-row justify-center mt-12'>
        <Text className='text-gray-500'>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text className='font-semibold text-black'>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}