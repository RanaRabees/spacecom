

import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
 
} from "react-native";
import { navigation } from "@react-navigation/native";

import React from "react";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
// import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const About = () => {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    // Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
const image = require('../../assets/70.jpg')
  return (
    <ScrollView>
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>RANA MUHAMMAD RABEES HUSSAIN</Text>
      <Text style={styles.paraStyle}> I am a full stack MERN MEAN REACT Native WEB APP & ANDROID developer</Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://lh3.googleusercontent.com/DDpnkdLrmz7Re_bu_kDd4_pr3RH-WUhV5yKxAArkzb3pUEZa57WTltVp1uweSiAKKjT3tiKvL0ZBOVhRUYQBICV-MPPHzLkMtuaONEUpRv75QeL0omlkMlJtawKDswLFr3rsq07hnUNOJMg3g2AKaRdxB80_uooDCvY_-YADAyApB_-SyPyEN0V9b0FFjHKuQb0idn5MRbz_xhR_JLnCnARyBqtoNbh6ddQ10xYUSfS3zyfnGCiwMSeksZlpr6ZAIYX8PdfrQB1ekKYKTCgitOOYFNVX2o1VvuT0ZSUPEULi1aZ2s6NqbJF-k81d77okVpm7Mh58vpwUKhui9md6IbSa_hJGanFXMgrOnNzbhC0BkkFNcypHKAJGghKAvabm4g1YxuSt6n3y3uItfq37Tst0ZFeS_LbGkiO7xPvLz8JGPGd_9aQ3pVgOBrGxGN7zrX2RpczjH1efSQL4oKg67xXIUdNJPh1I-c5c06kV5dtbIysPwdm2_4aFT7BPBqJBArIEtdQRSdQGvMGX5NP0ZVL_1PpHLBHwZ0c21adgX4DFLLuFrUk1W6Hw79U-bGMEMdjeXzZZEZSep4z26U3-s83myCO_WZs3oqwH5KJ7iWpPaq1baGU8mPn9BmMZ5scsTPlQP6HpdstkNcQhki9hUFF12s0NRzEfNRkZn-L7LZv9AThfDGqBaar7DCCbu8S-KP9EsxyqZ-ngIwjMu22LBzFzkBgzs5Dn777J71RXZyZhUejeVauawyM2DAjScDlEaCYEbmIr_RE-jI9WCal9rRl6Hb3xVoEiujUL1uUiwr0A1sRVRP7RH5krUkOLdFKTyXnb6RATvWsqqIBvaIL_pubrBkduWR8-Kzd4jZRYX2tMRwRgzttrrUxc0s16_AQ2DpJlbKdc255GO2kyBBvyI0cpB7bRsrgTzWRy4720eD-zpSWz=w284-h279-no?authuser=0",
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
        Assalamualaikum i am a student of software engineering my hobby is Project development.My speciality is Artificial Intelligence.I am both Front and Back end Developer.
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/amirhussain4045/")
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/@ranamuhammadrabeeshussain7173/playlists"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://discord.com/channels/@me")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
    
      <View>
      <Image
          style={styles.image}
          source={
            image
            // uri: "https://img.icons8.com/stickers/90/000000/training.png",
          }
          ></Image>

          
        {/* <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}> */}
        {/* <Text>Course</Text> */}
        {/* <Image
          style={styles.image}
          source={
            image
            // uri: "https://img.icons8.com/stickers/90/000000/training.png",
          }
          ></Image>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },
  image:{
    margin:10,
    height:200,
    width:"100%",
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "700",
    // marginTop: 50,
    marginTop: 40,
    marginBottom: 10,
    fontFamily: "Nunito_700Bold",
    color:"red"
  },
  paraStyle: {
    fontSize: 18,
    color: "green",
    paddingBottom: 30,
    fontFamily: "WorkSans_400Regular",
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    // marginVertical: 30,
    marginTop: 20,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "orange",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "Nunito_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "tomato",
    fontSize: 18,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 26,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About;
