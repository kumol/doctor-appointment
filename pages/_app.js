import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp({ Component, pageProps }) {
  return(<Layout>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
    <ThemeProvider>
    <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
    </Layout>)
}

export default MyApp
