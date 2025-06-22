import { RootState } from "@/redux";
import { Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function VarContext() {
    const { allVars, activeVar } = useSelector((state: RootState) => state.variables);
    const [test, setTest] = useState(false);

    useEffect(() => {
        setTest(!test);
    }, [activeVar])

    return (
        <Stack p="lg" className="animate__animated animate__fadeIn">
            <Title order={3} pb="md">{activeVar}</Title>
            <Text>
                {allVars[activeVar ? activeVar : "Not Found"].desc}
            </Text>
        </Stack>
    )
}