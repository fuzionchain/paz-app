import { ethers } from 'ethers'

export function numberWithCommas(x) {
  if (x !== undefined) return ethers.utils.commify(x)
}
