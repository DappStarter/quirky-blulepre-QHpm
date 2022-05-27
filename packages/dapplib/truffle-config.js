require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name raise range pulse grace logic off ghost'; 
let testAccounts = [
"0x0e5d1ce04bf407942bf88dde1355cc5a25180666f64f9b2256ef535528f27827",
"0x562cedb7d0592f9e665fcbb0f5ad1b9141c360e1eb130f5449dcaeec1a1f3a61",
"0x94134c46df0760ab9539c5e351aece736159324c7912cb1723763b77fe68fdb6",
"0x8a711196f3936d8f4843bf633a33c18960a7cd3464729d26c76d28795a323066",
"0x0f91515781ae6f25913b6919178fa66176857752ddd37bfc75910030d6e89c77",
"0xba33640f559c72c7a7ddb2dc0038fa5a50a64eba122e463fe6b314895b2bc26f",
"0xb4897b64bdd07c8e0b49bcc13664a870f92701b6d24b72b63431495b3a531b88",
"0x05a126296ec117fef8e32a6b5a9e0254af517060a18c3893e801e4a61ca44862",
"0x1fb2dfe59c8a9d55cbeb1b149a3796d918a60cbe2f7bff5926d064c47d23cee8",
"0x2d31febd7151e5bcfa0fd5d4f969328de367b073bb34d6612cb7afaae2fd28e1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

