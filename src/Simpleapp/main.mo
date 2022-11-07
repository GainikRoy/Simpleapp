import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Debug "mo:base/Debug";

actor SimpleCoin {
  var totalSupply : Nat = 10000;
  let symbol : Text = "SPC";
  private stable var balanceEntries : [(Principal, Nat)] = [];

  var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

  public query func balanceOf(who : Principal) : async Nat {

    let balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?res) res;
    };

    return balance;
  };

  public func topUp(who : Principal, amount : Nat) : async Bool {
    var balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?res) res;
    };
    if (amount <= totalSupply) {
      totalSupply -= amount;
      balance += amount;
      balances.put(who, balance);
      return true;
    };
    return false;
  };

  public func sell(id : Principal, amount : Nat) : async Bool {
    var balance : Nat = switch (balances.get(id)) {
      case null 0;
      case (?res) res;
    };

    if (balance >= amount) {
      totalSupply += amount;
      balance -= amount;
      balances.put(id, balance);
      return true;
    };
    return false;
  };

  public func sendCoin(fromId : Principal, toId : Principal, amount : Nat) : async Bool {
    var fromBalance : Nat = switch (balances.get(fromId)) {
      case null 0;
      case (?res) res;
    };
    var toBalance : Nat = switch (balances.get(toId)) {
      case null 0;
      case (?res) res;
    };

    if (amount <= fromBalance) {
      fromBalance -= amount;
      toBalance += amount;
      balances.put(fromId, fromBalance);
      balances.put(toId, toBalance);
      return true;
    };
    return false;
  };
  public shared (msg) func getID() : async Principal {
    msg.caller;
  };

  system func preupgrade() {
    balanceEntries := Iter.toArray(balances.entries());
  };

  system func postupgrade() {
    balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(), 1, Principal.equal, Principal.hash);
  };
};
