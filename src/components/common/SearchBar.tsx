import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

type Props = {
    searchQuery: string;
    onSearchChange: (value: string) => void;
}

export default function SearchBar({ searchQuery, onSearchChange }: Props) {
    return (
        <TextInput
            placeholder="Search..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onSearchChange(e.target.value) }}
            leftSection={<IconSearch size={16} />}
        />
    )
}