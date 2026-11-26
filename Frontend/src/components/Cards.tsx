import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export type CardProps = {
    id: number;
    title: string;
    description: string;
    onSelect: (id: number) => void;
};


export default function Cards({ id, title, description, onSelect }: CardProps) {
    return (
        <Card sx={{ width: '100%', minWidth: 0, borderRadius: 3, boxShadow: 'none' }}>
            <CardActionArea
                onClick={() => onSelect(id)}
                sx={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'flex-start',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    textAlign: 'left',
                    transition: 'border-color 160ms ease, background-color 160ms ease, box-shadow 160ms ease',
                    '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'action.hover',
                        boxShadow: 1,
                    },
                    '&.Mui-focusVisible': {
                        outline: '2px solid',
                        outlineColor: 'primary.main',
                        outlineOffset: 2,
                    },
                }}
            >
                <CardContent sx={{ width: '100%', p: 2, '&:last-child': { pb: 2 } }}>
                    <Typography
                        component="h3"
                        sx={{
                            mb: 0.75,
                            color: 'text.primary',
                            fontFamily: 'Space Mono, monospace',
                            fontSize: '14px',
                            fontWeight: 700,
                            lineHeight: 1.4,
                            overflowWrap: 'anywhere',
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            color: 'text.secondary',
                            fontFamily: 'Space Mono, monospace',
                            fontSize: '12px',
                            lineHeight: 1.5,
                            overflowWrap: 'anywhere',
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}