import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import {
  Button,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const TabTwoScreen: React.FC = () => {
  // refs
  const sheetRef = useRef<BottomSheet>(null);

  // data
  const data = useMemo<string[]>(
    () => Array.from({ length: 50 }, (_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo<string[]>(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index: number) => {
    console.log("handleSheetChange", index);
  }, []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<string>) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={handleClosePress} />
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChange}
      >
        <BottomSheetFlatList
          data={data}
          keyExtractor={(item: string) => item}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default TabTwoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});
