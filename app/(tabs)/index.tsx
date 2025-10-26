import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabOneScreen() {
  const snapPoints = useMemo(() => ["25%", "50%", "70%", "100%"], []);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const handleCollapsePress = () => bottomSheetRef.current?.collapse();
  const snapToIndex = (index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  };

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <Button title="Open Bottom Sheet" onPress={handleOpenPress} />
        <Button title="Close Bottom Sheet" onPress={handleClosePress} />
        <Button title="Collapse Bottom Sheet" onPress={handleCollapsePress} />
        <Button title="Snap to 0" onPress={() => snapToIndex(0)} />
        <Button title="Snap to 1" onPress={() => snapToIndex(1)} />
        <Button title="Snap to 2" onPress={() => snapToIndex(2)} />
        <Button title="Snap to 3" onPress={() => snapToIndex(3)} />
        <BottomSheet
          snapPoints={snapPoints}
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
