import { VariableCategory } from "@/constants/types"
import { Group, Stack, Text } from "@mantine/core"
import VarChip from "./VarChip"

type Props = {
    section: VariableCategory
    openContext?: () => void;
    closeContext?: () => void;

}

export default function VarSection({ section, openContext, closeContext }: Props) {

    return (
        <Stack>
            <Text>{section.categoryName}</Text>
            <Group>
                {section.variables.map((variable, index) => {
                    return (
                        <VarChip variable={variable} openContext={openContext} closeContext={closeContext} index={index} />
                    )
                })}
            </Group>
        </Stack>
    )
}