import { describe, expect, it } from 'vitest'
import { checkWordExistence } from '../helpers/checkWordExistence'

describe('checkWordExistence', () => {
  it('valid password', () => {
    const password = 'Bv12rqw2'
    const result = checkWordExistence(password)
    expect(result).toBe(false)
  })

  it('invalid password (contains word)', () => {
    const password = 'AppLe291'
    const result = checkWordExistence(password)
    expect(result).toBe(true)
  })
})
