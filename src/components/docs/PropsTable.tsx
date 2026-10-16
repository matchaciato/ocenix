import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

export interface PropItem {
  prop: string
  type: string
  default?: string
  description: string
  required?: boolean
}

export interface PropsTableProps {
  data: PropItem[]
  className?: string
}

export function PropsTable({ data, className }: PropsTableProps) {
  if (!data || data.length === 0) {
    return null
  }

  return (
    <div className={cn('my-6 overflow-x-auto rounded-xl border border-border shadow-xs', className)}>
      <table className="w-full text-left text-xs border-collapse">
        <thead className="bg-muted/40 border-b border-border text-foreground font-semibold">
          <tr>
            <th className="py-3 px-4 w-[22%]">Prop</th>
            <th className="py-3 px-4 w-[28%]">Type</th>
            <th className="py-3 px-4 w-[15%]">Default</th>
            <th className="py-3 px-4 w-[35%]">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {data.map((item) => (
            <tr key={item.prop} className="hover:bg-accent/20 transition-colors">
              <td className="py-3 px-4 font-mono font-medium text-primary align-top">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span>{item.prop}</span>
                  {item.required ? (
                    <Badge variant="destructive" className="px-1 py-0 text-[9px]">
                      Required
                    </Badge>
                  ) : null}
                </div>
              </td>
              <td className="py-3 px-4 font-mono text-muted-foreground break-words align-top">
                <span className="rounded bg-muted/60 px-1 py-0.5">
                  {item.type}
                </span>
              </td>
              <td className="py-3 px-4 font-mono text-muted-foreground align-top">
                {item.default ? (
                  <span className="rounded bg-muted/60 px-1 py-0.5">
                    {item.default}
                  </span>
                ) : (
                  <span className="text-muted-foreground/60">-</span>
                )}
              </td>
              <td className="py-3 px-4 text-muted-foreground leading-relaxed align-top">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
