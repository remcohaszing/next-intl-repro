import { Metadata } from 'next'
import { useExtracted } from 'next-intl'
import { getExtracted } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getExtracted()
  
  return {
    title: t('Hello title!')
  }
}

// The commented alternative works fine.
// export default async function Page() {
//   const t = await getExtracted()
export default async function Page() {
  const t = useExtracted()

  return (
    <div>
      {t('Hello intl!')}
    </div>
  )
}
