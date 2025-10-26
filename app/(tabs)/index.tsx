import BottomSheet, { BottomSheetBackdrop, BottomSheetTextInput, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { Button, StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabOneScreen() {
  const snapPoints = useMemo(() => ["25%", "50%", "70%", "100%"], []);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const handleCollapsePress = () => bottomSheetRef.current?.collapse();
  const handleSnapToPosition = () =>
    bottomSheetRef.current?.snapToPosition("100%");

  const renderBackdrop = useCallback((props:any) => {
    return <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />;
  }, []);

  const snapToIndex = (index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  };

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return ( 
      <GestureHandlerRootView style={styles.container}>
        <Button title="Open Bottom Sheet" onPress={handleOpenPress} />
        <Button title="Close Bottom Sheet" onPress={handleClosePress} />
        <Button title="Collapse Bottom Sheet" onPress={handleCollapsePress} />
        <Button title="Snap to 0" onPress={() => snapToIndex(0)} />
        <Button title="Snap to 1" onPress={() => snapToIndex(1)} />
        <Button title="Snap to 2" onPress={() => snapToIndex(2)} />
        <Button title="Snap to 3" onPress={() => snapToIndex(3)} />
        <Button title="Snap to Position Top" onPress={handleSnapToPosition} />
        <BottomSheet
          snapPoints={snapPoints}
          ref={bottomSheetRef}
          backdropComponent={BottomSheetBackdrop}
          onChange={handleSheetChanges}
          backgroundStyle={{ backgroundColor: "black" }}
          handleIndicatorStyle={{ backgroundColor: "yellow" }}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text style={styles.containerHeadline}>Awesome 🎉</Text>
            {/* <TextInput style={styles.input}  /> */}
            <BottomSheetTextInput style={styles.input}/>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    // padding: 36,
    alignItems: "center",
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop:20,
    width:'90%',
    paddingHorizontal:10,
    color:'white'
  }
});
