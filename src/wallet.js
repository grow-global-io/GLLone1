import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { getAuthProvider } from "./arcanaAuth";
import { ArcanaConnector } from "@arcana/auth-wagmi";


export const ArcanaRainbowConnector = ({ chains }) => {
  return {
    id: "arcana-auth",
    name: "Login With Email",
    iconUrl: "https://nftmarketcover.infura-ipfs.io/ipfs/QmZHnKfvogh1i6zbbsTuuwfJLG5U8Vxm2tCUTV7MXg1jTC",
    iconBackground: "",
    createConnector: () => {
      const connector = new ArcanaConnector({
        chains,
        options: {
          auth: getAuthProvider(),
        }
      });
      return {
        connector,
      };
    },
  };
};
const projectId = 'YOUR_PROJECT_ID'
const connectors = (chains) =>
  connectorsForWallets([
    {
      groupName: "Login With Your Socials",
      wallets: [
        ArcanaRainbowConnector({ projectId, chains })
        // , metaMaskWallet({ projectId, chains })
        // , argentWallet({ projectId, chains })
        // , braveWallet({ projectId, chains })
        // , bitskiWallet({ projectId, chains })
        // , coinbaseWallet({ projectId, chains })
        // , dawnWallet({ projectId, chains })
        // , imTokenWallet({ projectId, chains })
        // , injectedWallet({ projectId, chains })
        // , ledgerWallet({ projectId, chains })
        // , mewWallet({ projectId, chains })
        // , okxWallet({ projectId, chains })
        // , omniWallet({ projectId, chains })
        // , phantomWallet({ projectId, chains })
        // , rabbyWallet({ projectId, chains })
        // , rainbowWallet({ projectId, chains })
        // , safeWallet({ projectId, chains })
        // , tahoWallet({ projectId, chains })
        // , trustWallet({ projectId, chains })
        // , walletConnectWallet({ projectId, chains })
        // , xdefiWallet({ projectId, chains })
        // , zerionWallet({ projectId, chains })
      ],
    },
  ]);

export { connectors };