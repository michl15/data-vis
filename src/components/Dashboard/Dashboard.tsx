import { faArrowUpFromBracket, faBolt, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Drawer, Grid, Group, Select, Stack, Title } from "@mantine/core";
import BestScenarioResults from "./BestScenarioResults";
import { DATA } from "@/constants/dummyData";
import PerfIndicators from "./PerfIndicators";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import VarDrawer from "../Drawer/VarDrawer";
import DataVisual from "./DataVisual";
import { useDispatch } from "react-redux";
import { removeActiveVar, setActiveVar } from "@/redux/VariableReducer";
import { useState } from "react";

export default function Dashboard() {
    const [opened, { open, close }] = useDisclosure(false);
    const dispatch = useDispatch();
    const [selectedVar, setSelectedVar] = useState(DATA.dummySelect[0])
    const matches = useMediaQuery('(min-width: 1175px)');

    return (
        <>
            <Stack>
                <Group justify="space-between" pb={20}>
                    <Group><FontAwesomeIcon icon={faBolt} size="lg" /><Title order={2}>Charging Station</Title></Group>
                    <Group>
                        <Button><FontAwesomeIcon icon={faClockRotateLeft} /></Button>
                        <Button onClick={open}>Edit variables</Button>
                        <Button><FontAwesomeIcon icon={faArrowUpFromBracket} /></Button>
                    </Group>
                </Group>
                <BestScenarioResults alerts={DATA.dummyAlerts} />
                <Grid pt={10}>
                    <Grid.Col span={{ sm: 8, base: 12 }}>
                        <Title order={3} pb="md">Graphs</Title>
                        <Card h={500}>
                            <Group justify="flex-end" mb={10}>
                                <Select
                                    w={200}
                                    defaultValue={selectedVar}
                                    data={DATA.dummySelect}
                                    onChange={(e) => {
                                        if (e) {
                                            setSelectedVar(e);
                                            dispatch(setActiveVar(e));
                                        }
                                    }} />
                            </Group>
                            <DataVisual openDrawer={open} activeVar={selectedVar} />
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ sm: 4, base: 12 }} h={500}>
                        <Group justify="space-between" pb="md" wrap="nowrap">
                            <Title order={3} textWrap="nowrap">
                                {matches ? "Key Performance Indicators" : "KPI"}
                            </Title>
                            <Button size="xs" onClick={open}>
                                <Group justify="center">
                                    Variables <IconPlus size={16} />
                                </Group>
                            </Button>
                        </Group>
                        <PerfIndicators />
                    </Grid.Col>
                </Grid>
            </Stack >
            <Drawer
                opened={opened}
                onClose={() => {
                    close();
                    dispatch(removeActiveVar());
                }}
                title={<h3>Edit Variables</h3>}
                position="right"
                overlayProps={{ backgroundOpacity: 0.5, blur: 1 }}
                size="xl">
                <VarDrawer />
            </Drawer>
        </>
    )
}