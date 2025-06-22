import { COLORS } from "@/constants/colors";
import { Alert, Button, Collapse, Group, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconChevronUp, IconDots, IconSparkles } from "@tabler/icons-react";

type Props = {
    alerts: string[]
}

export default function BestScenarioResults({ alerts }: Props) {
    const [opened, { toggle }] = useDisclosure(true);

    const renderAlerts = () => {
        return alerts.map((alert) => {
            return (
                <Alert radius="md">
                    <Group justify="space-between" wrap="nowrap">
                        <Text c={COLORS.limeGreen}>{alert}</Text>
                        <Button size="xs" variant="subtle"><IconDots color={COLORS.limeGreen} /></Button>
                    </Group>
                </Alert>
            )
        })
    }

    const getIcon = () => {
        return opened ? <IconChevronUp /> : <IconChevronDown />;
    }

    return (
        <Stack>
            <Group justify="space-between">
                <Group>
                    <IconSparkles size={20} color={COLORS.lightGreen} />
                    <Title c={COLORS.lightGreen} order={3}>
                        Best Scenario Results
                    </Title>
                </Group>
                <Button
                    onClick={toggle}
                    radius="xl"
                    color={COLORS.lightGreen}
                    style={{
                        border: `1px solid ${COLORS.lightGreen}`
                    }}
                >{getIcon()}</Button>
            </Group>
            <Collapse in={opened}>
                <Stack>
                    {renderAlerts()}
                </Stack>
            </Collapse>
        </Stack>
    )
}