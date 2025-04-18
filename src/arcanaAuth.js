import { AuthProvider } from "@arcana/auth";

let auth = null;

export const getAuthProvider = () => {
  if (!auth) {
    auth = new AuthProvider(
      "xar_live_61512bc02d0cec15768aef78f625407793395d01"
      // "xar_live_417525b0ebc737f9cccb45ed9d90f2a2875c4c91" //mainnet
      // "xar_test_8abec6f831a466b24435474c87f73dc00b123632" //testnet
    );
  }
  return auth;
};