type Props = {
  title: string
  link: string
  icon: React.ReactNode
}

export default function LinkCard({ title, link, icon }: Props) {
  return (
    <a
  href={link}
  target="_blank"
  onClick={() => console.log(title + " clicked")}
  className="bg-neutral-900 hover:bg-neutral-800 hover:scale-105 transition p-4 rounded-xl flex items-center justify-center gap-3"
></a>

  )
}