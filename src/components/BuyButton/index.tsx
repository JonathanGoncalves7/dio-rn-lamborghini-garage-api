import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

export default function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="shoppingcart" size={25} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Buy This</Text>
      </TouchableOpacity>
    </View>
  );
}
