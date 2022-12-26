
import { format, parseISO } from 'date-fns'

const dateFormat = (date) => {
    const dateFormat=format(new Date(date),'eee, dd MMM yyyy')
  return (
   dateFormat
  )
}

export default dateFormat