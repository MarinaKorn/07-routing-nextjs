import SidebarNotes from '../../../../components/SidebarNotes/SidebarNotes'

type Props = {
  children: React.ReactNode
}

export default function FilterLayout({ children }: Props) {
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <SidebarNotes />
      {children}
    </div>
  )
}
