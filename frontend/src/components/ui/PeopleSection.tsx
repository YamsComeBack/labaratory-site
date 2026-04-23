'use client'

import PersonCard from '@/components/ui/PersonCard'
import useChunkSmart from '@/hooks/useChunkSmart'

interface Person {
  src: string
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
    <section id={id} className={`flex flex-col items-center ${className ?? ''}`}>
      <h2 className="mb-[50px] text-center text-primary text-title">{title}</h2>
      <div className="flex flex-col items-center gap-y-[60px] sm:gap-y-[40px]">
        {rows.map((row, i) => (
          <div key={i} className="flex justify-center gap-x-10 lg:gap-x-25 max-[420px]:gap-x-[32px]">
            {row.map(p => (<PersonCard key={p.name} {...p} />))}
          </div>
        ))}
      </div>
    </section>
  )
}
