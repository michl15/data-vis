import { Stack } from "@mantine/core";
import DrawerSearch from "./DrawerSearch";
import Variables from "./Variables";

export default function VarDrawer() {
    return (
        <Stack>
            <DrawerSearch />
            <Variables />
        </Stack>
    )
}