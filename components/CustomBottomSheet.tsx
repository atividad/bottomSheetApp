import BottomSheet, {
    BottomSheetView
} from "@gorhom/bottom-sheet";
import React, {
    forwardRef,
    useCallback,
    useImperativeHandle,
    useMemo,
    useRef,
} from "react";
import { StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// ✅ Ref type
export type Ref = BottomSheet;

// ✅ Props type
interface Props {
  title?: string;
  backgroundColor?: string;
  indicatorColor?: string;
}

// ✅ Arrow function component with forwardRef
const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const { backgroundColor = "black", indicatorColor = "yellow" } = props;
  const bottomSheetRef = useRef<BottomSheet>(null);

  useImperativeHandle(ref, () => bottomSheetRef.current as BottomSheet);

  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{ backgroundColor }}
        handleIndicatorStyle={{ backgroundColor: indicatorColor }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.containerHeadline}>{props.title}</Text> 
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
});

export default CustomBottomSheet;

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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    width: "90%",
    paddingHorizontal: 10,
    color: "white",
  },
});
