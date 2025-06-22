import { Button, Stack } from "@mantine/core";
import { IconBell, IconClipboardData, IconCloudUpload, IconHome, IconMenu2, IconSettingsFilled, IconUserCircle } from "@tabler/icons-react";

export default function LeftBar() {
    return (
        <Stack justify="space-between" align="center" pt="md" pl="md">
            <Stack>
                <Button p={5} variant="subtle" color="#fff">
                    <IconMenu2 />
                </Button>
                <Button p={5} variant="light" color="#fff">
                    <IconHome />
                </Button>
                <Button p={5} variant="subtle" color="#fff">
                    <IconBell />
                </Button>
                <Button p={5} variant="subtle" color="#fff">
                    <IconClipboardData />
                </Button>
                <Button p={5} variant="subtle" color="#fff">
                    <IconCloudUpload />
                </Button>
                <Button p={5} variant="subtle" color="#fff">
                    <IconSettingsFilled />
                </Button>
            </Stack>
            <Button p={5} variant="subtle" color="#fff">
                <IconUserCircle />
            </Button>
        </Stack>
    )
}