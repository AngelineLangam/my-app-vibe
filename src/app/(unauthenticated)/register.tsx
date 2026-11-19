import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Register() {
  return (
    <View className='flex-1 bg-white justify-center px-8'>
      {/* Header Section */}
      <View className='items-center mb-8'>
        <Text className='text-4xl font-bold text-black mb-2'>Create Account</Text>
      </View>

      {/* Form Section */}
      <View className='gap-3'>
        <Input 
          label='Name' 
          placeholder='Full name'
          className='bg-gray-100 border-0 rounded-xl px-4 py-3'
        />
        <Input 
          label='Email' 
          placeholder='Email address'
          className='bg-gray-100 border-0 rounded-xl px-4 py-3'
        />
        <Input 
          label='Password' 
          secureTextEntry={true} 
          placeholder='Password'
          className='bg-gray-100 border-0 rounded-xl px-4 py-3'
        />
        <Input 
          label='Confirm Password' 
          secureTextEntry={true} 
          placeholder='Confirm password'
          className='bg-gray-100 border-0 rounded-xl px-4 py-3'
        />

        <View className='mt-4'>
          <Button 
            label='Register' 
            className='bg-black rounded-xl py-4'
          />
        </View>
      </View>

      {/* Footer / Login Link */}
      <View className='flex-row justify-center mt-8'>
        <Text className='text-gray-500'>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text className='font-semibold text-black'>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}