import {expect} from 'chai'

import {chineseRemainderTheorem, exgcd, int, rectify} from '../../src/utils'

describe('utils/number', () => {
  describe('int', () => {
    it('should convert correctly', () => {
      expect(int('1234')).to.equal(1234)
      expect(int('+1234')).to.equal(1234)
      expect(int('-1234')).to.equal(-1234)
    })
  })

  describe('rectify', () => {
    it('should work for non-negative numbers', () => {
      expect(rectify(10, 13)).to.equal(10)
      expect(rectify(27, 13)).to.equal(1)
      expect(rectify(0, 13)).to.equal(0)
    })
    it('should work for negative numbers', () => {
      expect(rectify(-3, 4)).to.equal(1)
      expect(rectify(-13, 4)).to.equal(3)
    })
  })

  describe('exgcd', () => {
    it('should be correct', () =>
      expect(exgcd(240, 46)).to.have.members([-9, 47]))
  })

  describe('chineseRemainderTheorem', () => {
    it('should be correct', () =>
      expect(chineseRemainderTheorem([[3, 2], [5, 3], [7, 2]])).to.equal(23))
  })
})
