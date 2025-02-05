module.exports = {
    chainList: [
        'avax',
        'bsc',
        'celo',
        'heco',
        'fantom',
        'harmony',
        'klaytn-v2',
        'matic',
        'moonriver',
        'orbit',
        'oec',
        'xdai',
        'eth-v2',
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        BscBridgeContract: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
        HecoBridgeContract: "0xE7688F64e96A733EaDdCb5850392347e67Bb197f",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        MessageMultiSigWallet: {
            Hub: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            Orbit: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            Avax: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            Bsc: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            Celo: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            Fantom: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            Harmony: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            Heco: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            Klaytn: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            Matic: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            Moonriver: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            Oec: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            Xdai: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
        },
        Avax: {
            AvaxMinterContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            AvaxAdminContract: "0x3b31c980598f9237d9C14bB44118773b92174720",
        },
        Bsc: {
            BscMinterContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            BscAdminContract: "0x3b31c980598f9237d9C14bB44118773b92174720",
        },
        Celo: {
            CeloMinterContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            CeloAdminContract: "0x3b31c980598f9237d9C14bB44118773b92174720",
        },
        Eth: {
            EthMinterContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            EthAdminContract: "0x3b31c980598f9237d9C14bB44118773b92174720",
        },
        Fantom: {
            FantomMinterContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            FantomAdminContract: "0x3b31c980598f9237d9C14bB44118773b92174720",
        },
        Harmony: {
            HarmonyMinterContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            HarmonyAdminContract: "0x3b31c980598f9237d9C14bB44118773b92174720",
        },
        Heco: {
            HecoMinterContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            HecoAdminContract: "0x3b31c980598f9237d9C14bB44118773b92174720",
        },
        Klay: {
            KlaytnMinterContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
        },
        Matic: {
            MaticVaultContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            MaticAdminContract: "0x3b31c980598f9237d9C14bB44118773b92174720",
        },
        Moonriver: {
            MoonriverMinterContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            MoonriverAdminContract: "0x3b31c980598f9237d9C14bB44118773b92174720",
        },
        Oec: {
            OecMinterContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            OecAdminContract: "0x3b31c980598f9237d9C14bB44118773b92174720",
        },
        Xdai: {
            XdaiMinterContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
            XdaiAdminContract: "0x3b31c980598f9237d9C14bB44118773b92174720",
        },
        Orbit: {
            OrbitMinterContract: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            MessageMultiSigWallet: "0x98d729f9bD84AAC94639700e71B7916018A708B1",
        },
        Governance: {
            Chain: "MATIC",
            Address: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            Bytes: "0x506DC4c6408813948470a06ef6e4a1DaF228dbd5",
            Id: "0xaf9c9bf1d10f96432ef783c6ff34815d5e22e5083554a9940cf5dcbbdce7cfe7",
        },
    },

    // Node Endpoints
    Endpoints : {
        Orbit: {
            rpc : "https://bridge-en.orbitchain.io:7443",
            socket: "wss://bridge-en.orbitchain.io:7444",
        },
        Avax: {
            rpc: "https://api.avax.network/ext/bc/C/rpc",
            socket: "https://api.avax.network/ext/bc/C/ws",
        },
        Bsc: {
            rpc : "https://bsc-dataseed.binance.org",
            socket: "wss://bsc-ws-node.nariox.org:443",
        },
        Celo: {
            rpc: "https://forno.celo.org",
            socket: "wss://forno.celo.org/ws",
        },
        Eth: {
            rpc: ["https://eth.chain-node.orbitchain.io:7643", "https://mainnet.infura.io/v3/[PROJECT_ID]"],
            socket: "wss://mainnet.infura.io/ws/v3/[PROJECT_ID]",
            beacon: "https://beacon.chain-node.orbitchain.io:7643",
        },
        Fantom: {
            rpc: "https://rpc.ftm.tools",
            socket: "wss://wsapi.fantom.network",
        },
        Harmony: {
            rpc: "https://api.harmony.one",
            socket: "wss://ws.s0.t.hmny.io",
        },
        Heco: {
            rpc : ["https://heco.chain-node.orbitchain.io:7643", "https://http-mainnet-node.huobichain.com"],
            socket: "wss://ws-mainnet.hecochain.com",
        },
        Klaytn: {
            isKas: true,
            Kas: {
                // KAS Default
                rpc: "https://node-api.klaytnapi.com/v1/klaytn",
                chainId: 8217,

                // Your Credential
                accessKeyId: "",
                secretAccessKey: ""
            },
            rpc: ["https://klaytn-mainnet-rpc.allthatnode.com:8551", "https://klaytn01.fandom.finance", "https://klaytn02.fandom.finance", "https://public-node-api.klaytnapi.com/v1/cypress"],
            socket: "wss://public-node-api.klaytnapi.com/v1/cypress/ws"
        },
        Matic: {
            rpc: ["https://polygon-rpc.com", "https://matic.chain-node.orbitchain.io:7643",],
            socket: "wss://rpc-mainnet.matic.quiknode.pro",
        },
        Moonriver: {
            rpc: "https://moonriver.api.onfinality.io/public",
            socket: "wss://moonriver.api.onfinality.io/public-ws",
        },
        Oec: {
            rpc: "https://exchainrpc.okex.org",
            socket: "wss://exchainws.okex.org:8443",
        },
        Xdai: {
            rpc: "https://rpc.gnosischain.com",
            socket: "ws://xdai.poanetwork.dev:8546",
        },
    },

    ETH_CHAIN_ID: '0x1',
    AVAX_CHAIN_ID: '0xa86a',
    CELO_CHAIN_ID: '0xa4ec',
    FANTOM_CHAIN_ID: '0xfa',
    HARMONY_CHAIN_ID: 1666600000,
    HARMONY_GAS_PRICE: 50 * 10 ** 9,
    HECO_CHAIN_ID: '0x80',
    MATIC_CHAIN_ID: '0x89',
    OEC_CHAIN_ID: 66,

    ETH_TERMINAL_TOTAL_DIFFICULTY: "58750000000000000000000",

    DEBUG: true,
    LOGLEVEL: 'debug',

    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },

    VALIDATOR_MONITOR: {
        Ozys: {
            Endpoint: "https://bridge-en.orbitchain.io:7743/maticvault/v1/validator/report",
            Interval: 60 * 1000,
        },
    },
}
