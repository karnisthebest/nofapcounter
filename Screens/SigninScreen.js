import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Text, View, Item, Input, Button } from "native-base";
import { useForm } from "react-hook-form";
import MountainBackground from "../assets/nightsky.jpg";
function HomeScreen({ navigation }) {
  const { register, setValue, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data, 'data')
  }
  
  React.useEffect(() => {
    register({ name: 'username'}, { required: true });
    register({ name: 'password'}, { required: true });
  }, [register])

  return (
    <ImageBackground
      source={MountainBackground}
      style={{ width: "100%", height: "100%" }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={{ color: "white", fontSize: 30 }}>FAP WATCH</Text>
          <Item rounded style={{ width: "90%", marginTop: 20 }}>
            <Input
              autoCapitalize="none"
              placeholderTextColor="snow"
              placeholder="username"
              style={{ color: "white" }}
              onChangeText={text => setValue('username', text, true)}
            />
          </Item>
          <Item rounded style={{ width: "90%", marginTop: 10 }}>
            <Input
              secureTextEntry
              autoCapitalize="none"
              placeholderTextColor="snow"
              placeholder="password"
              style={{ color: "white" }}
              onChangeText={text => setValue('password', text, true)}
            />
          </Item>
          <Button
            warning
            block
            rounded
            color="black"
            style={{ marginHorizontal: 20, marginTop: 20 }}
            onPress={handleSubmit(onSubmit)}
          >
            <Text>LOGIN</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
