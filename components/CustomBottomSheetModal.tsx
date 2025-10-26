import {
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { StyleSheet, Text } from "react-native";

export type Ref = BottomSheetModal;

interface Props {
  title?: string;
  backgroundColor?: string;
  indicatorColor?: string;
}

const CustomBottomSheetModal = forwardRef<Ref, Props>((props, ref) => {
  const { backgroundColor = "black", indicatorColor = "yellow", title } = props;
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  useImperativeHandle(ref, () => bottomSheetRef.current as BottomSheetModal);

  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={{ backgroundColor }}
      handleIndicatorStyle={{ backgroundColor: indicatorColor }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text style={styles.containerHeadline}>{title}</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default CustomBottomSheetModal;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
