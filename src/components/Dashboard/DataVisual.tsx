import { COLORS } from "@/constants/colors";
import { DATA } from "@/constants/dummyData";
import { setActiveVar } from "@/redux/VariableReducer";
import { LineChart } from "@mantine/charts";
import { Group, Paper, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
    openDrawer: () => void;
    activeVar: string;
}

export default function DataVisual({ openDrawer, activeVar }: Props) {
    const [isHovering, setIsHovering] = useState(false);
    const dispatch = useDispatch();

    interface ChartTooltipProps {
        label: string;
        payload: Record<string, any>[] | undefined;
    }

    function ChartTooltip({ payload }: ChartTooltipProps) {
        if (!payload) {
            return null;
        }

        return (
            <Paper px="md" py="sm" withBorder shadow="md" radius="md">
                {payload.map((item: any) => (
                    <>
                        <Group>
                            <Title key={item.name} c={item.color} order={3}>
                                ${item.value}K
                            </Title>
                        </Group>
                        <Text fw="lighter">
                            Custom content
                        </Text>
                    </>
                ))}
            </Paper>
        );
    }

    const onDotEnter = () => {
        setIsHovering(true);
    }

    const onDotExit = () => {
        setIsHovering(false);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (isHovering) {
                openDrawer();
                dispatch(setActiveVar(activeVar));
            }
            clearInterval(interval)
        }, 1500);
        return () => clearInterval(interval)
    }, [isHovering])

    return (
        <LineChart
            h="100%"
            data={DATA.graphs[activeVar]}
            dataKey="date"
            curveType="linear"
            series={
                [{ name: "val", color: COLORS.lightGreen }]
            }
            valueFormatter={(value) => `$${value}K`}
            tooltipProps={{
                content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />
            }}
            activeDotProps={{ r: 6, strokeWidth: 2, fill: '#222324', onMouseEnter: onDotEnter, onMouseLeave: onDotExit }}
        />
    )
}

