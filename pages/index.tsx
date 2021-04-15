import Head from 'next/head'
import PageTemplate from '../templates/PageTemplate'

export default function Home() {
  return (
    <PageTemplate>
      <Head>
        <title>This is the page title.</title>
      </Head>
      <h1>Hello world</h1>
    </PageTemplate>
  )
}
