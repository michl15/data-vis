import { VariableCategory } from "@/constants/types";
import { Button, Card, Collapse, Group, Stack, Container, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import VarSection from "./VarSection";
import { COLORS } from "@/constants/colors";

type Props = {
    section: VariableCategory
}

export default function VarCard({ section }: Props) {
    const [opened, { toggle }] = useDisclosure(false);

    const getIcon = () => {
        return opened ? <IconChevronUp /> : <IconChevronDown />;
    }
    return (
        <Card py={0}>
            <Stack justify="center">
                <Group justify="space-between">
                    <Title order={3} py={10} px={5} c={COLORS.limeGreen}>{section.categoryName}</Title>
                    <Button onClick={toggle}
                        size="xs"
                        color={COLORS.limeGreen}
                        radius="xl"
                        style={{
                            border: `1px solid ${COLORS.limeGreen}`
                        }}>{getIcon()}</Button>
                </Group>
                <Card.Section>
                    <Collapse in={opened}>
                        <Container h="100%" pb={40}>
                            <VarSection section={section} />
                        </Container>
                    </Collapse>
                </Card.Section>
            </Stack>
        </Card>
    )
}