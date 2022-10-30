export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'balanceOf' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'sell' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
    'sendCoin' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat],
        [],
        ['oneway'],
      ),
    'topUp' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
