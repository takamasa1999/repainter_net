import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AvailableSpacesResponseReturnType } from '../functions/getAvailableSpaces';

import { useRouter } from '@/navigation';

function SpaceTable({ spaces }: { spaces: AvailableSpacesResponseReturnType }) {
    const router = useRouter()
    function handleOnClick(space_name: string) {
        const space_name_encoded = encodeURIComponent(space_name)
        router.push(`/your_voice/spaces/${space_name_encoded}`)
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Space Name</TableCell>
                        <TableCell>Last Updated At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {spaces.map((space) => (
                        <TableRow
                            key={space.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell
                                style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                                onClick={() => handleOnClick(space.space_name)}
                            >
                                {space.space_name}
                            </TableCell>
                            <TableCell>{new Date(space.last_update_at).toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SpaceTable;
