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

export default function ListPetitions({ name, description, values, onClick, icon}: ListPetitionsProps) {
    return (
        <main className="flex h-full flex-col overflow-hidden">
            <div className="shrink-0 p-4 gap-2">
                <h1 className="font-space-mono text-[18px] font-bold">
                    {name}
                </h1>
                <h2 className=" text black font-space-mono text-[15px] w-100 text-start">
                    {description}
                </h2>
            </div>
            <Divider sx={{ borderColor: "#acb0b5" }} />
            <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-gutter:stable]">
                <List component="nav" aria-label="main mailbox folders">
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
                            backgroundColor: '#f5f5f5',
                            transform: 'scale(1.02)',
                        }
                    }}
                    >
                    <ListItemIcon>
                        <Avatar
                        sx={{
                            bgcolor: '#000000',}}
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
                            fontSize: '15px',
                        },
                        '& .MuiListItemText-secondary': {
                            fontFamily: 'Space Mono, monospace',
                            fontSize: '13px',
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