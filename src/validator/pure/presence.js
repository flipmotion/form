import { isEmpty, isNil } from 'ramda';

const presence = v => {
  if (typeof v === 'string') {
    return v.trim() !== ''
  }

  return !(isEmpty(v) || isNil(v))
}

export default presence
