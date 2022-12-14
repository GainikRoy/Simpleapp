import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'balanceOf' : (arg_0: Principal) => Promise<bigint>,
  'getID' : () => Promise<Principal>,
  'sell' : (arg_0: Principal, arg_1: bigint) => Promise<boolean>,
  'sendCoin' : (arg_0: Principal, arg_1: Principal, arg_2: bigint) => Promise<
      boolean
    >,
  'topUp' : (arg_0: Principal, arg_1: bigint) => Promise<boolean>,
}
