import { DATA } from "@/constants/dummyData";
import { Card, Collapse, Stack } from "@mantine/core";
import VarSection from "./VarSection";
import VarCard from "./VarCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import VarContext from "./VarContext";
import { useDisclosure } from "@mantine/hooks";

export default function Variables() {
    const { activeVar } = useSelector((state: RootState) => state.variables);
    const [open, handlers] = useDisclosure(activeVar !== null);

    const renderAllSections = () => {
        return (
            <Stack p="xs">
                {DATA.dummyVariables.map((varSection) => <VarSection section={varSection} openContext={handlers.open} closeContext={handlers.close} />)}
            </Stack>
        )
    }

    return (
        <Stack>
            <Card bg="#161618">
                {renderAllSections()}
                <Card.Section withBorder mt="md">
                    <Collapse in={open} transitionDuration={500} bg="#222324">
                        {activeVar &&
                            <VarContext />
                        }
                    </Collapse>
                </Card.Section>

            </Card>
            <VarCard section={DATA.dummyPrimary} />
            <VarCard section={DATA.dummySecondary} />
        </Stack>
    )
}