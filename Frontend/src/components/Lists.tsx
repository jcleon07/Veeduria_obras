import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import type { WorkProps } from '../types/user.types';

type ListProps = {
    values: WorkProps[];
    onClick:(value:number) => void;
    icon: React.ReactNode;
};

export default function Lists({ values, onClick, icon}: ListProps) {
    return (
        <main className="flex h-full min-h-0 min-w-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-gutter:stable]">
                <List component="nav" aria-label="main mailbox folders">
                {values.map((value) => (
                    <ListItemButton
                    key={value.id}
                    onClick={() => onClick(value.id)}
                    sx={{
                        width: '100%',
                        borderRadius: 2,
                        gap: 3,
                        transition: '0.3s',
                        borderBottom: '1px solid #e0e0e0',
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
                    <div className="flex min-w-0 flex-1 flex-row gap-2 items-center">
                        <div className="min-w-0 flex-1">
                        <ListItemText 
                        primary={value.name}
                        sx={{
                            '& .MuiListItemText-primary': {
                                fontFamily: 'Space Mono, monospace',
                                fontSize: '15px',
                                
                            },
                        }}
                        />
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col">
                            <span className="pl-4 font-space-mono text-[13px] text-gray-500">
                                {value.primaryDescription}
                            </span>
                            <span className="pl-4 font-space-mono text-[13px] text-gray-500">
                                {value.secondaryDescription}
                            </span>
                        </div>
                    </div>
                    </ListItemButton>
                ))
                }
                </List>
            </div>
        </main>
    );
}