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
    <section id={id} className={`flex w-full flex-col items-center ${className ?? ''}`}>
      <h2 className="mb-[50px] box-border max-w-full px-4 text-center text-[clamp(2.5rem,11vw,9.375rem)] text-primary leading-[0.95]">
        {title}
      </h2>
      <div className="flex flex-col items-center gap-y-[60px] sm:gap-y-[40px]">
        {rows.map((row, i) => (
          <div key={i} className="flex justify-center gap-x-4 lg:gap-x-25">
            {row.map(p => (<PersonCard key={p.name} {...p} />))}
          </div>
        ))}
      </div>
    </section>
  )
}
