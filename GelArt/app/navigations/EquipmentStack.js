import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Equipment from "../screens/Equipment";

const Stack= createStackNavigator();

export default function EquipmentStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
             name="equipment"
             component={Equipment}
             options={{title:"Equipos"}}
            />
        </Stack.Navigator>
    );
}