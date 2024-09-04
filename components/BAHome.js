import React, { useRef, useEffect } from 'react';
import { Animated, Easing, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function BAHome({ navigation }) {
  // Initialize the animation scale value for the button
  const goButtonScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Define the animation
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(goButtonScale, {
          toValue: 0.9, // Shrinking scale
          duration: 500, // Duration of the shrink
          useNativeDriver: true,
          easing: Easing.ease,
        }),
        Animated.timing(goButtonScale, {
          toValue: 1, // Enlarging scale back to normal
          duration: 500, // Duration of the enlarge
          useNativeDriver: true,
          easing: Easing.ease,
        }),
      ])
    );

    // Start the animation
    pulseAnimation.start();

    // Stop animation on unmount
    return () => pulseAnimation.stop();
  }, [goButtonScale]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Bariatric{"\n"}Assistant</Text>

      {/* Image */}
      <Image
        source={require('../assets/BA_drawing.jpg')}
        style={styles.image}
      />

      {/* Animated Button */}
      <TouchableOpacity
        style={styles.goButton}
        onPress={() => navigation.navigate('BMI')} // or any other action
      >
        <Animated.View style={{ transform: [{ scale: goButtonScale }] }}>
          <Text style={styles.goButtonText}>GO</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 70,
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Poppins_900Black',  
    lineHeight: 55,
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 360, 
    height: 360, 
    resizeMode: 'contain',
    marginBottom: 160,
  },
  goButton: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'rgb(175, 4, 4)', // Red background color
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // To make the button float over the image
    bottom: 30, // Adjust this according to your layout
  },
  goButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',  // Poppins Bold font for the button text
  },
});
