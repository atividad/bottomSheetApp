import CustomBottomSheetModal, { Ref } from "@/components/CustomBottomSheetModal";
import React, { useCallback, useRef } from "react";
import { Button, View } from "react-native";

export default function Page() {
  const sheetRef = useRef<Ref>(null);

  const openModal = useCallback(() => {
    sheetRef.current?.present();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <Button title="Open Modal" onPress={openModal} />
      <CustomBottomSheetModal ref={sheetRef} title="Awesome 🎉" />
    </View>
  );
}
