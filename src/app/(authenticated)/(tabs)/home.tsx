import { Feather } from '@expo/vector-icons';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const POSTS = [
  {
    id: 1,
    user: 'justinharveyyy',
    time: '19h',
    avatar: require('@/assets/images/HARVEY.png'), 
    content: "With my favorite person!💝",
    images: [
      require('@/assets/images/main1.png'), 
      require('@/assets/images/main2.png')
    ], 
    likes: 963,
    replies: 0,
    reposts: 1,
    shares: 2,
  },
  {
    id: 2,
    user: 'harveyyangeee',
    time: '15h',
    avatar: require('@/assets/images/harveyyangeee.png'), 
    content: "Bonding with birthday girl🥳🎂",
    images: [
      require('@/assets/images/post1.png'), 
      require('@/assets/images/post2.png')
    ],
    likes: 748,
    replies: 0,
    reposts: 1,
    shares: 5,
  }
]

export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-black'>
      
      {/* TOP APP HEADER */}
      <View className='flex-row justify-between items-center px-4 py-3 border-b border-gray-800'>
        <TouchableOpacity>
          <Feather name="menu" size={28} color="white" />
        </TouchableOpacity>
        
        <Text className='text-white font-bold text-2xl tracking-tighter'>V</Text>
        
        <TouchableOpacity>
          <Feather name="search" size={26} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        
        {/* "WHAT'S NEW" COMPOSE AREA */}
        <View className='flex-row items-center justify-between px-4 py-4 border-b border-gray-800'>
          <View className='flex-row items-center gap-3'>
            <Image 
              source={require('@/assets/images/ANGELINE.png')} 
              style={{ width: 40, height: 40, borderRadius: 20 }} 
            />
            <View>
              <Text className='text-white font-bold text-base'>angeliyne_</Text>
              <Text className='text-gray-500 text-base'>What's new?</Text>
            </View>
          </View>
          
          <TouchableOpacity className='bg-gray-800 px-4 py-1.5 rounded-full'>
             <Text className='text-white font-semibold'>Post</Text>
          </TouchableOpacity>
        </View>

        {/* POSTS */}
        {POSTS.map((post) => (
          <View key={post.id} className='px-4 py-4 border-b border-gray-800'>
            
            {/* --- POST HEADER --- */}
            <View className='flex-row justify-between items-start mb-2'>
              <View className='flex-row gap-3 items-center'>
                <View className='relative'>
                  <Image 
                    source={post.avatar} 
                    style={{ width: 40, height: 40, borderRadius: 20 }} 
                  />
                  <View className='absolute -bottom-1 -right-1 bg-black rounded-full'>
                    <Feather name="plus-circle" size={18} color="#555" />
                  </View>
                </View>
                
                <View>
                  <View className='flex-row items-center gap-2'>
                    <Text className='text-white font-bold text-base'>
                      {post.user}
                    </Text>
                    <Text className='text-gray-500 text-sm'>
                      {post.time}
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity>
                <Feather name="more-horizontal" size={20} color="white" />
              </TouchableOpacity>
            </View>

            {/* --- POST TEXT CONTENT --- */}
            <Text className='text-white text-[15px] leading-6 mb-3 ml-1'>
              {post.content}
            </Text>

            {/* --- POST IMAGES --- */}
            {post.images.length > 0 && (
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                className='mb-4'
              >
                <View className='flex-row gap-2'>
                  {post.images.map((img, index) => (
                    <Image 
                      key={index}
                      source={img} 
                      style={{ 
                        height: 320,         
                        width: undefined,  
                        aspectRatio: undefined, 
                        maxWidth: SCREEN_WIDTH - 32,
                        borderRadius: 12,
                      }} 
                      resizeMode='cover' 
                    />
                  ))}
                </View>
              </ScrollView>
            )}

            {/* --- POST ACTIONS --- */}
            <View className='flex-row items-center gap-6 mt-1 ml-1'>
              <TouchableOpacity className='flex-row items-center gap-1.5'>
                <Feather name="heart" size={22} color="white" />
                <Text className='text-white text-sm'>{post.likes}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className='flex-row items-center gap-1.5'>
                <Feather name="message-circle" size={22} color="white" />
                {post.replies > 0 && <Text className='text-white text-sm'>{post.replies}</Text>}
              </TouchableOpacity>
              
              <TouchableOpacity className='flex-row items-center gap-1.5'>
                <Feather name="repeat" size={22} color="white" />
                {post.reposts > 0 && <Text className='text-white text-sm'>{post.reposts}</Text>}
              </TouchableOpacity>
              
              <TouchableOpacity className='flex-row items-center gap-1.5'>
                <Feather name="send" size={22} color="white" />
                <Text className='text-white text-sm'>{post.shares}</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}