import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import StatusBar from "../../components/StatusBarCustom";
import Search from "../../components/Search";
import ScreenLoading from "../../components/ScreenLoading";
import CarouselImages from "../../components/Product/CarouselImages";
import Price from "../../components/Product/Price";
import Quantity from "../../components/Product/Quantity";
import Buy from "../../components/Product/Buy";
import Favorite from "../../components/Product/Favorite";
import { getProductApi } from "../../api/product";
import Toast from "react-native-easy-toast";
import { IVA } from "../../utils/constants";
import colors from "../../styles/colors";

export default function Product(props) {
  const { route } = props;
  const { params } = route;
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);
  const toastRef = useRef();

  useEffect(() => {
    (async () => {
      const response = await getProductApi(params.idProduct);
      setProduct(response);
      const arrayImages = [response.main_image];
      arrayImages.push(...response.images);
      setImages(arrayImages);
    })();
  }, [params]);

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Search />
      {!product ? (
        <ScreenLoading text="Cargando producto" size="large" />
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{product.title}</Text>
            <CarouselImages images={images} />
            <Text style={styles.description}>{product.description}</Text>
          </View>
          <View style={styles.information}>
            <View style={styles.presentation}>
              <Text style={styles.kgPresentation}>Kg presentación: </Text>
              <Text>
                {product.presentationKg} {product.unitPresentationKg}
              </Text>
            </View>

            <Price price={product.price} discount={product.discount} />
            <View style={styles.presentation}>
              <Text style={styles.kgPresentation}>
                Precio de Presentación:{" "}
              </Text>
              <Text>{product.price * product.presentationKg} $</Text>
            </View>
            <View style={styles.presentation}>
              <Text style={styles.kgPresentation}>Precio con IVA: </Text>
              <Text>{IVA * product.price} $</Text>
            </View>
            <Text style={styles.kgPresentation}>
              Pedidos para Agregar al Carrito:
            </Text>
            <Quantity quantity={quantity} setQuantity={setQuantity} />
          </View>
          <View style={styles.inputsButtons}>
            <Buy product={product} quantity={quantity} toastRef={toastRef} />
            <Favorite product={product} />
          </View>
          <Toast
            ref={toastRef}
            position="center"
            //opacity={0.9}
            fadeOutDuration={1000}
          />
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
  },
  description: {
    margin: 5,
    padding: 5,
    borderColor: "#897C4A",
    borderWidth: 1.5,
    borderRadius: 5,
    textAlign: "justify",
  },
  presentation: {
    flexDirection: "row",
  },
  kgPresentation: {
    fontWeight: "bold",
    color: "black",
  },
  information: {
    zIndex: 2,
    width: "80%",
    alignItems: "center",
    flex: 1.8,
    borderColor: "#897C4A",
    borderWidth: 1.5,
    marginBottom: 20,

    //backgroundColor: "blue",
    borderRadius: 15,
  },
  inputsButtons: {
    zIndex: 1,
    flex: 0.5,
    alignItems: "center",
    width: "100%",
    paddingBottom: 50,
  },
  /*btnBuyContent: {
    backgroundColor: "#008fe9",
    paddingVertical: 5,
  },
  btnBuyLabel: {
    fontSize: 18,
  },
  btnBuy: {
    marginTop: 20,
  },*/
});
