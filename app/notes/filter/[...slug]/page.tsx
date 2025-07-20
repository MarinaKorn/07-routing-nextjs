import { getNotes } from '../../../../lib/api'
import NotesClient from './Notes.client'

type Props = {
  params: { slug: string[] }
}

export default async function FilteredNotes({ params }: Props) {
  const tag = params.slug?.[0] || 'All'
  const notes = tag === 'All' ? await getNotes('', 1) : await getNotes('', 1, tag)

  return <NotesClient initialNotes={notes} tag={tag} />
}
