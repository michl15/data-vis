import { COLORS } from "@/constants/colors";
import { RootState } from "@/redux";
import { setActiveVar, setSelected } from "@/redux/VariableReducer";
import { Chip, Group, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { IconCheck, IconPlus, IconSparkles } from "@tabler/icons-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
    variable: string;
    openContext?: () => void;
    closeContext?: () => void;
    index?: number;
}

export default function VarChip({ variable, openContext, closeContext, index = 0 }: Props) {
    const { allVars, activeVar } = useSelector((state: RootState) => state.variables);
    const { hovered, ref } = useHover();
    const dispatch = useDispatch();

    const selectedChip = (variable: string, isSelected: boolean) => {
        return <Group align="space-between" ref={ref}>
            <Text c={isSelected ? COLORS.limeGreen : ""}>
                {variable}
            </Text>
            <Group gap="xs">
                <IconSparkles color={isSelected ? COLORS.limeGreen : "#fff"} size={13} />
                {isSelected ? <IconCheck color={COLORS.limeGreen} size={13} /> : <IconPlus size={13} />}
            </Group>
        </Group>
    }

    const isSelected = allVars[variable]?.selected;

    useEffect(() => {
        const interval = setInterval(() => {
            if (hovered) {
                // open context
                if (activeVar !== null) {
                    closeContext && closeContext();
                }
                setTimeout(() => {
                    dispatch(setActiveVar(variable));

                    openContext && openContext();
                }, 500);
                clearInterval(interval);
            } else {
                clearInterval(interval);
            }
        }, 1500);

        // clear interval if unmounted  
        return () => clearInterval(interval);
    }, [hovered])
    return (
        <Chip
            variant="outline"
            size="md" value={variable}
            color={isSelected ? COLORS.limeGreen : ""}
            checked={isSelected}
            onChange={() => { dispatch(setSelected(variable)) }}
            className="animate__animated animate__zoomIn"
            style={{
                animationDelay: `${index * 200}ms`
            }}
        >
            {selectedChip(variable, isSelected)}
        </Chip>
    )
}