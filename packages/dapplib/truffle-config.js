require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember promote hidden climb tail giant'; 
let testAccounts = [
"0x8d7500b270a146e2e93e6b8810c028af1f21d77a25d5dd01395d2a87622e1d6b",
"0x763827a0833a4abeeac478b6a88d80c84e8841401e7e7d319ffd885b77ce92f1",
"0xfcbf534e5c0c804e3c950f5c0e01131340cecf083dcd5ff6bd5ba76cd508a804",
"0x3fcf4b431aceeb8142c1229ebbc9662706c9c85b0963b1a18c40d1a52b4e40de",
"0x26c21cce0d15d7afa4b84342c4a82db192e0fd4b304c6db430a4686e8dfba8ec",
"0x6d08f29f635e8d9216ae8076755c0c77427139ef9eba2d5a98bbd9e80eb2b224",
"0x4d26a61e92c70baa13ff4fc8a7c5ec8c578152fcd3abfb61d5932c3475ebec9d",
"0x1c136a7011a41af1fc653bfeaced04f01b0c54c4b21b51cee11ffe1299cdd4fd",
"0xfaa6d77f5c2a8f84a5822e17184d94b971cbf836e050463cc274abb77673d4a5",
"0x08c9cd4f2b355cb34719b2db5e22916e86f91075b960786ef7798bb0e359cd23"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


