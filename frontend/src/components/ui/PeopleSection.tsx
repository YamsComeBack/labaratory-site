'use client'

import PersonCard from '@/components/ui/PersonCard'
import useChunkSmart from '@/hooks/useChunkSmart'

interface Person {
  src: string | readonly string[]
  name: string
  hoverText: string
  descriptor?: string
}

export default function PeopleSection({
  title,
  people,
  id,
  className,
}: {
  title: string
  people: ReadonlyArray<Person>
  id?: string
  className?: string
}) {
  const rows = useChunkSmart(people)

  return (
    <section id={id} className={`flex w-full flex-col items-center ${className ?? ''}`}>
      <h2 className="mb-15 box-border max-w-full px-4 text-title text-center text-[4rem] leading-[0.95] text-primary">
        {title}
      </h2>
      <div className="flex flex-col items-center gap-y-15 sm:gap-y-25">
        {rows.map((row, i) => (
          <div key={i} className="flex justify-center gap-x-10 md:gap-x-25">
            {row.map(p => (<PersonCard key={p.name} {...p} />))}
          </div>
        ))}
      </div>
    </section>
  )
}
