import { Button, Grid } from "@mantine/core";
import { IconReload, IconSparkles } from "@tabler/icons-react";
import { useState } from "react";
import SearchBar from "../common/SearchBar";
import { COLORS } from "@/constants/colors";

export default function DrawerSearch() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <Grid columns={24}>
            <Grid.Col span={16}>
                <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            </Grid.Col>
            <Grid.Col span={4} >
                <Button w="100%">
                    <IconSparkles style={{ marginRight: "10px" }} /> Autofill
                </Button>
            </Grid.Col>
            <Grid.Col span={4}>
                <Button w="100%" bd={`1px solid ${COLORS.lightGreen}`} color={COLORS.limeGreen}>
                    <IconReload style={{ marginRight: "10px" }} /> Rerun
                </Button>
            </Grid.Col>
        </Grid>
    )
}