import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import type { ReactNode } from "react";

type ListPetitionsProps = {
    name: string;
    description: string;
    values: number[];
    onClick:(value:number) => void;
    icon: ReactNode;
};

export default function ListProfile({ name, description, values, onClick, icon}: ListPetitionsProps) {
    return (
        <main className="flex h-full min-w-0 w-full flex-col overflow-hidden">
            <div className="flex  flex-col shrink-0 p-4 gap-1">
                <h1 className="font-space-mono text-[length:var(--app-font-size-third)] font-bold">
                    {name}
                </h1>
                <h2 className=" text black font-space-mono text-[length:var(--app-font-size-fourth)] w-100 text-start">
                    {description}
                </h2>
            </div>
            <Divider sx={{ borderTop: '1.5px solid var(--app-border-color)' }} />
            <div className="min-h-0 w-full flex-1 overflow-y-auto [scrollbar-gutter:stable]">
                <List component="nav" aria-label="main mailbox folders" sx={{ width: '100%' }}>
                {values.map((value) => (
                    <ListItemButton
                    key={value}
                    onClick={() => onClick(value)}
                    sx={{
                        my:0.5,
                        mx: 2,
                        borderRadius: 2,
                        gap: 2,
                        transition: '0.3s',
                        '&:hover': {
                            backgroundColor: 'var(--app-icon-hover-color)',
                            transform: 'scale(1.02)',
                        }
                    }}
                    >
                    <ListItemIcon>
                        <Avatar
                        sx={{
                            bgcolor: 'var(--app-icon-color)',}}
                        >
                            {icon}
                        </Avatar>
                    </ListItemIcon>
                    <ListItemText 
                    primary={`Petición ${value}`}
                    secondary={`Descripción de la petición ${value}`} 
                    sx={{
                        '& .MuiListItemText-primary': {
                            fontFamily: 'Space Mono, monospace',
                            fontSize: 'var(--app-font-size-third)',
                        },
                        '& .MuiListItemText-secondary': {
                            fontFamily: 'Space Mono, monospace',
                            fontSize: 'var(--app-font-size-fourth)',
                        }
                    }}
                    />
                    </ListItemButton>
                ))
                }
                </List>
            </div>
        </main>
    );
}