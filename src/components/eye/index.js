import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import styles from './style';
import OpenEye from './src/open';
import CloseEye from './src/close';

export default function Eye({ onClick }) { 

  const [eyeClick, setEyeClick] = useState(true);
    
  const handleEyeClick = () => {
    setEyeClick(!eyeClick); 
    if (onClick) { 
      onClick();
    }
  };

  return (
    <View style={styles.alignsEye}>
      <Pressable onPress={handleEyeClick}>
        <OpenEye style={eyeClick ? styles.displayNone : styles.displayFlex} />
        <CloseEye style={eyeClick ? styles.displayFlex : styles.displayNone} />
      </Pressable>
    </View>
  );
}
