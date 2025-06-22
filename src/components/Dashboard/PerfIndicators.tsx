import { DATA } from "@/constants/dummyData";
import { Card, Grid, Title, Text, ScrollArea } from "@mantine/core";

export default function PerfIndicators() {
    const renderIndicators = () => {
        return DATA.dummyIndicators.map((ind) => {
            return (
                <Grid.Col span={{ lg: 6, base: 12 }}>
                    <Card h={242}>
                        <Title order={4} pb={15}>{ind.header}</Title>
                        <Text pb={15}>{ind.info}</Text>
                        <Title order={2}>{ind.val}</Title>
                    </Card>
                </Grid.Col>
            )
        })
    }

    return (
        <ScrollArea scrollbars="y" h={508}>
            <Grid justify="center" align="stretch">
                {renderIndicators()}
            </Grid>
        </ScrollArea>
    )
}