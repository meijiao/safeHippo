import React from 'react';
import styles from './styles.js';
import * as Animatable from 'react-native-animatable';

import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

let MapLink = (props) => {

    return (
      <Image
        source={require('./assets/images/gradient90_1024_320.png')}
        style={styles.gradient}
      >
        <Image 
          source={require('./assets/images/app-icon-safe-hippo_96.png')} 
          style={styles.logo}
        />
        <TouchableOpacity
        key='googleMapsUrl'
        style={styles.googleMapsTouch}
        onPress={console.log('opening maps link')}
        >
          <Animatable.Text 
            animation="fadeInUp" 
            style={{color:'#FFF'}, styles.googleMapsLink} 
            duration={1500}
          >
            Open in Google Maps
          </Animatable.Text>
        </TouchableOpacity>
        <Image 
          source={require('./assets/images/toggle-crime_96.png')} 
          style={styles.toggleCrime}
        />
      </Image>
    );
  
}

// let MapLink = () => {
//   return (
//     <Image
//       source={require('./assets/images/gradient90_1024_320.png')}
//       style={styles.gradient}
//     >
//       <Image 
//         source={require('./assets/images/app-icon-safe-hippo_96.png')} 
//         style={styles.logo}
//       />
//       <Animatable.Text 
//         animation="fadeInUp" 
//         style={styles.logoText} 
//         duration={1500}
//       >
//         Open in Google Maps
//       </Animatable.Text>
//       <Image 
//         source={require('./assets/images/toggle-crime_96.png')} 
//         style={styles.toggleCrime}
//       />
//     </Image>
//   );
// }

export default MapLink;