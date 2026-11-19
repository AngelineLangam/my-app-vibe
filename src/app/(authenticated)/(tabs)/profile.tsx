import { Feather } from '@expo/vector-icons'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {
  return (
    <SafeAreaView className='flex-1 bg-black'>
      
      {/* TOP APP HEADER */}
      <View className='flex-row justify-between items-center px-4 py-3 border-b border-gray-800'>
        <TouchableOpacity>
          <Feather name="menu" size={28} color="white" />
        </TouchableOpacity>
        
        <Text className='text-white font-bold text-2xl tracking-tighter'>V</Text>
        
        <TouchableOpacity>
          <Feather name="settings" size={26} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        
        {/* PROFILE INFO SECTION */}
        <View className='px-4 py-6'>
          
          <View className='flex-row justify-between items-start mb-4'>
            {/* Name and Username */}
            <View className='flex-1 pr-4'>
              <Text className='text-white text-2xl font-bold'>Angeline</Text>
              <Text className='text-gray-400 text-base mb-3'>angeliyne_</Text>
              
              {/* Followers / Following */}
              <View className='flex-row items-center mt-3'>
                <Text className='text-gray-500 text-sm'>
                  <Text className='text-white font-bold'>1.2M</Text> followers
                </Text>
                <Text className='text-gray-500 text-sm ml-4'>
                  <Text className='text-white font-bold'>1</Text> following
                </Text>
              </View>
            </View>
            
            {/* Profile Picture */}
            <Image 
              source={require('@/assets/images/ANGELINE.png')} 
              style={{ width: 80, height: 80, borderRadius: 40 }} 
              className='bg-gray-800' 
            />
          </View>

          {/* Edit Profile */}
          <TouchableOpacity className='w-full bg-black border border-gray-700 rounded-xl py-3 items-center'>
            <Text className='text-white font-semibold text-base'>Edit Profile</Text>
          </TouchableOpacity>

        </View>

        {/* Divider */}
        <View className='h-2 bg-gray-900 w-full' />

        {/* USER THREADS (Placeholder) */}
        <View className='p-4 items-center justify-center py-10'>
          <Text className='text-gray-500 text-base'>No threads yet.</Text>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}