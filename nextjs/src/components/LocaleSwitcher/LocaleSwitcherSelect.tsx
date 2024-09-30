'use client';

import { Box, CircularProgress, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { ReactNode, useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
};

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
    label
}: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    // const params = useParams(); // not sure yet if this value is neccesary to maintain login information

    function onSelectChange(event: SelectChangeEvent) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(
                pathname,
                { locale: nextLocale }
            );
        });
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputLabel sx={{ color: 'black', fontWeight: 'bold', fontSize: '1rem', mr: 2 }}>{label}</InputLabel>
            <Select
                value={defaultValue}
                onChange={onSelectChange}
                label={label}
                disabled={isPending}
                // endAdornment={isPending ? <CircularProgress color="secondary" /> : null}
                sx={{ width: "auto" }}
            >
                {children}
            </Select>
        </Box>
    );
}