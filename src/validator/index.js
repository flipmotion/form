import _presence from './pure/presence'
import fromPure from './fromPure'
import validate from './validate'

export default validate
export const presence = fromPure(_presence, 'presence')