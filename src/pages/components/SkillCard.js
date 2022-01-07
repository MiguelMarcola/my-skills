import React from "react";
import {
    TouchableOpacity, 
    Text,
    StyleSheet
} from 'react-native';

export function SkillCard({skill}){
    return(
        <TouchableOpacity 
            style={styles.buttonSkill}
            activeOpacity={.4}
        >
            <Text style={styles.textSkill}>
            {skill}
              </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill:{
      backgroundColor: '#242422',
      padding: 10,
      borderRadius: 40,
      alignItems: 'center',
      marginBottom: 15,
    },
  
    textSkill:{
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      paddingVertical: 5,
    }
  })