import { useExtracted, useTranslations } from 'next-intl'

export default function Page() {
  const t = useExtracted()
  const m = useTranslations()

  return (
    <div>
      {t('Hello intl!')}
      {m('bye')}
    </div>
  )
}
