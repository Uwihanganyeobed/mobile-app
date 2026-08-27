import {Drawer} from "expo-router/drawer"
export default function _layout() {
    return (
        <Drawer>
            <Drawer.Screen
            name="(tabs)"
            options={{title: 'Dashboard'}} />
        </Drawer>
    )
}
