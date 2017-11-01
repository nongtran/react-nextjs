import Layout from '../components/Layout.js'
import Highlight from 'react-highlight'

export default () => (
    <Layout>
        <p>This is the about page</p>
        <Highlight>
            {"code snippet to be highlighted"}
        </Highlight>
    </Layout>
)