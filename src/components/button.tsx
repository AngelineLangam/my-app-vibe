import { Text, TouchableOpacity } from 'react-native';

export default function Button({ label, onPress, className }: any) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className={`w-full bg-black rounded-xl py-3 items-center justify-center ${className}`}
    >
      <Text className="text-white font-semibold text-base">{label}</Text>
    </TouchableOpacity>
  );
}