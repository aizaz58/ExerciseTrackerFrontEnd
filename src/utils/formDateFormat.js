

import { format, parseISO } from 'date-fns'

const formDateFormat = (date) => {
    const dateFormat=format(new Date(date),'yyyy-MM-dd')
  return (
   dateFormat
  )
}

export default formDateFormat