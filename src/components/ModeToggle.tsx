import { useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';

export const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  return (

    <Button
    sx={{
      marginTop: 1,
    }}
      variant="outlined"
      color="neutral"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
    >
      {mode === 'dark' ? 'Turn light' : 'Turn dark'}
    </Button>
  );
  
}
