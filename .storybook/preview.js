/** @type { import('@storybook/react').Preview } */
import { background } from 'storybook/internal/theming';
import '../src/index.css'; 
const preview = {
   parameters: {
      background:{
         options: {
         dark: { name: 'Dark', value: '#000000' },
         light: { name: 'Light', value: '#F7F9F2' },
         }
      },
      initialGlobals: {
         // 👇 Set the initial background color
         backgrounds: { value: 'dark' },
       },
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
}

export default preview
