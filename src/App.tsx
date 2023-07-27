import { createTheme, ThemeProvider } from '@mui/material/styles'; // Updated import
import './App.css';
import Navigation from './components/navigation/Navigation';
import HeroSection from './components/homepage/HeroSection';

const theme = createTheme({
	palette: {
		primary: {
			main: '#F4B393',
			contrastText: '#252422',
		},
		secondary: {
			main: '#F7FC6A',
		},
		text: {
			primary: '#252422',
			secondary: '#353431',
			disabled: '#75726C',
		},
		success: {
			main: '#E8F8C1',
		},
		info: {
			main: '#58A4B0',
		},
		error: {
			main: '#993955',
		},
	},
	typography: {
		fontFamily: 'REM',
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Navigation />
				<HeroSection />
			</ThemeProvider>
		</>
	);
}

export default App;
