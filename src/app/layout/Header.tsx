import { AppBar, Switch, Typography } from '@mui/material'

interface Props {
    darkMode: boolean,
    handleTheme: ()=>void
}

export default function Header({darkMode, handleTheme}: Props) {
   
    return (
        <AppBar position="static" sx={{ mb: '4'}} >
            <Typography variant='h6'>
                Mamazon
            </Typography>
            <Switch
                checked={darkMode}
                onChange={handleTheme}
                
            />
        </AppBar>
    )
}
