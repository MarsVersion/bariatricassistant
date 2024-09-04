import React, { useRef, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking, Easing, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BAKontakt() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:chirurgie@klinikum-vest.de');
  };

  const handleLinkPress = () => {
    Linking.openURL('https://klinikum-vest.de/Inhalt/Kliniken_Zentren_Bereiche/Zentren/Recklinghausen/Westdeutsches_Adipositaszentrum/Magenverkleinerung/#BMI-Rechner');
  };

    const scaleAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Step 3: Define the Animation
    const pulseAnimation = Animated.loop(
  Animated.sequence([
    Animated.timing(scaleAnimation, {
      toValue: 0.9, // Shrink slightly
      duration: 700, // Increased duration for smoother transition
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease), // Smooth easing in and out
    }),
    Animated.timing(scaleAnimation, {
      toValue: 1.1, // Enlarge slightly
      duration: 700, // Increased duration for smoother transition
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease), // Smooth easing in and out
    }),
  ])
);

    pulseAnimation.start();

    return () => pulseAnimation.stop(); // Clean up the animation on component unmount
  }, [scaleAnimation]);

  return (
    <LinearGradient
      colors={['#ffffff', '#7a0202']} 
      style={styles.gradient} 
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.redCircle} />
        {/* Additional Info */}
        <View style={styles.additionalInfo}>
          <Text style={styles.infoText}>
            Der Bariatric Assistant ermöglicht abhängig vom Schweregrad der
            Adipositas eine erste Einschätzung der Therapiemöglichkeit
            (operativ/konservativ) und ersetzt nicht die Beratung durch einen
            erfahrenen Arzt.
          </Text>
          <Text style={styles.infoText}>
            Neben dem BMI sind wichtige Nebendiagnosen von Bedeutung.
          </Text>
          <Text style={styles.infoText}>
            Falls eine operative Therapie in Betracht kommt sollte ein
            Adipositaszentrum kontaktiert werden.
          </Text>
          <Text style={styles.infoText}>
            Zuvor sollte der Fragebogen der DGAV ausgefüllt werden.
          </Text>
          <Text style={styles.infoText}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Prof. Dr. Martin Büsing</Text>
            {"\n"}
            <Text style={{ fontStyle: 'regular' }}>
              Westdeutsches Adipositaszentrum
            </Text>
          </Text>
          <Text>{"\n"}</Text>

         <TouchableOpacity onPress={handleLinkPress}>
  <Animated.Text style={[styles.text, {
    marginTop: 0, // No margin above
    marginBottom: 0, // No margin below
    color: 'white',
    fontWeight: 'regular',
    textAlign: 'left',
    transform: [{ scale: scaleAnimation }]
  }]}>
    Erstgespräch gewünscht?
  </Animated.Text>
</TouchableOpacity>

<Text>{"\n"}</Text>
          {/* Contact Information */}
          <View style={styles.textContainer}>
          <Text style={styles.text}>Westdeutsches Adipositaszentrum</Text>
<Text style={[styles.text, { textAlign: 'left' }]}>Klinikum Vest GmbH</Text>
<Text style={[styles.text, { textAlign: 'left' }]}>Dorstener Straße 151</Text>
<Text style={[styles.text, { textAlign: 'left' }]}>45657 Recklinghausen</Text>
<Text style={[styles.text, { marginTop: 10, textAlign: 'left' }]}>Tel: 02361 56 83 155</Text>
<Text style={[styles.text, { textAlign: 'left' }]}>Wir sind von 8.30 bis 14.00 Uhr erreichbar.</Text>

            <TouchableOpacity onPress={handleEmailPress}>
              <Text style={[styles.text, { color: 'white', textDecorationLine: 'underline', textAlign: 'left' }]}>
                Email: chirurgie@klinikum-vest.de
              </Text>
            </TouchableOpacity>
           
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'flex-start',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    padding: 20,
    position: 'relative',
  },
  textContainer: {
    alignSelf: 'flex-start', // Aligns text container to the left
    width: '100%', // Ensures it uses full width
    padding: 0, // Remove any extra padding
    margin: 0, // Remove any extra margin
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: 'white',
    marginBottom: 0, // Remove space below text
    textAlign: 'left', // Align text to the left
    marginTop: 0, // Remove space above text
  },
  additionalInfo: {
    marginTop: 50,
    padding: 10,
    backgroundColor: 'transparent',
    width: '90%', // Ensures the block doesn't take full width
    alignSelf: 'center', // Centers the block itself within the container
  },
  infoText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'left', // Text is aligned to the left
    marginTop: 10, // You can adjust this if there's too much space
    fontFamily: 'Poppins_600SemiBold',
  },
});
