import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { map } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { API_URL } from "../../utils/constants";
import colors from "../../styles/colors";

export default function ListProduct(props) {
  const { products } = props;
  const navigation = useNavigation();

  const goToProduct = (id) => {
    navigation.push("product", { idProduct: id });
  };

  return (
    <View style={styles.container}>
      {map(products, (product) => (
        <TouchableWithoutFeedback
          key={product._id}
          onPress={() => goToProduct(product._id)}
        >
          <View style={styles.containerProduct}>
            <View style={styles.product}>
              <Image
                style={styles.image}
                source={{
                  uri: `${API_URL}${product.main_image.url}`,
                }}
              />
              <View style={styles.title}>
                <Text
                  style={styles.name}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {product.title}
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    //margin: -3,
  },
  containerProduct: {
    width: "50%",
    padding: 3,
  },
  product: {
    borderRadius: 5,
    backgroundColor: colors.backgroundImage,
    paddingTop: 5,
  },
  image: {
    height: 114,
    resizeMode: "contain",
  },
  title: {
    width: "100%",
    backgroundColor: colors.titleItems,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    color: colors.fontLight,
  },
});
