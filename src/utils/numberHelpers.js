import { ethers } from 'ethers'

export function numberWithCommas(x) {
  return ethers.utils.commify(x)
}
