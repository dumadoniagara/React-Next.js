import Layout from '../components/layout';
import Head from 'next/head';

const Index = () => (
   <div className="app-1">
      <Layout>
         <Head>
            <title>Home</title>
         </Head>
         <h1>Hello Next.js</h1>
         <h2>Welcome to next.js application</h2>
         <p>lorem ipsum dolor sit amet</p>
      </Layout>
   </div>
)

export default Index;