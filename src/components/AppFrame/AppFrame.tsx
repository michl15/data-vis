import { Container, Group, Stack } from "@mantine/core";
import LeftBar from "./LeftBar";
import TopNav from "./TopNav";

export default function AppFrame({ children }: React.PropsWithChildren) {
    return (
        <Group preventGrowOverflow={false} grow wrap="nowrap" align="flex-start" pt="md" pl="md" style={{
            minHeight: "100vh"
        }}>
            <LeftBar />
            <Stack >
                <TopNav />
                <Container fluid bg="#161618" p={30} style={{
                    borderTopLeftRadius: 5,
                    border: "1px solid #525252",
                    borderBottom: 0,
                    borderRight: 0,
                    minHeight: "93vh"
                }}>
                    {children}
                </Container>
            </Stack>
        </Group>
    )
}