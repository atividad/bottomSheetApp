import CustomBottomSheet from "@/components/CustomBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { Button, StyleSheet, View } from "react-native";

const Page = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();

  return (
    <View style={styles.container}>
      <Button title="Open Bottom Sheet" onPress={handleOpenPress} />
      <Button title="Close Bottom Sheet" onPress={handleClosePress} />
      <CustomBottomSheet ref={bottomSheetRef} title="Awesome Title🎉" />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
});
