import { DATA } from "@/constants/dummyData";
import { Button, Group } from "@mantine/core";
import SearchBar from "../common/SearchBar";
import { useState } from "react";

export default function TopNav() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTab, setSelectedTab] = useState(0);

    const renderTopNavButtons = () => {
        return DATA.dummyTopNav.map((btnText, index) => (
            <Button
                variant={index === selectedTab ? "default" : "subtle"}
                onClick={() => setSelectedTab(index)}>
                {btnText}
            </Button>
        ))
    }
    return (
        <Group align="center" justify="space-between" pr="xs">
            <Group>
                {renderTopNavButtons()}
            </Group>
            <SearchBar searchQuery={searchQuery} onSearchChange={(e) => setSearchQuery(e)} />
        </Group>
    )
}