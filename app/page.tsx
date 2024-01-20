import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../components/Map'), {
  ssr: false
});

export default function Home() {
  return (
    <main>
    <h1>DKI Jakarta</h1>
    <DynamicMap />
    </main>
  )
}