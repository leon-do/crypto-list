const coins =
{

    ETH: {
        name: 'Ethereum',
        abbreviation: 'ETH',
        summary: `A decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third party interference.`
    },
    BTC: {
        name: 'Bitcoin',
        abbreviation: 'BTC',
        summary: `Uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part`
    },
    STR: {
        name: 'Stellar',
        abbreviation: 'STR',
        summary: `A platform that connects banks, payments systems, and people. Integrate to move money quickly, reliably, and at almost no cost.`
    },
    XRP: {
        name: 'Ripple',
        abbreviation: 'XRP',
        summary: `Enables banks to send real-time international payments across networks. Using Ripple, banks can meet growing demands for faster, low-cost, on-demand global payment services for any payment size. The result: new revenue opportunities, lower processing costs, and better overall customer experiences.`
    },
    ETC: {
        name: 'Ethereum Classic',
        abbreviation: 'ETC',
        summary: `A decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third party interference.  Ethereum Classic is a continuation of the original Ethereum blockchain - the classic version preserving untampered history; free from external interference and subjective tampering of transactions.`
    },
    DASH: {
        name: 'Dash',
        abbreviation: 'DASH',
        summary: `A next-generation digital currency based on the Bitcoin software. Dash is used to make instant, private payments online or in-store using our secure open-source platform hosted by thousands of users around the world.
`
    BTS: {
        name: 'BitShares',
        abbreviation: 'BTS',
        summary: `BitShares 2.0 offers a stack of financial services including exchange and banking on a blockchain. The developers of BitShares formed Cryptonomex created an industrial strength software platform called Graphene™. Graphene offer a broad range of financial services distinguished by their transparency and inherent incorruptibility.`
    },
    DGB: {
        name: 'DigiByte',
        abbreviation: 'DGB',
        summary: `A decentralized global blockchain with a focus on cyber security, payments & secure communications.`
    },
    STRAT: {
        name: 'Stratis',
        abbreviation: 'STRAT',
        summary: `Offers simple and affordable end-to-end solutions for development, testing and deployment of native C# blockchain applications on the .Net framework. The platform consists a number of features including a cloud based service and a Blockchain development API.`
    },
    FCT: {
        name: 'Factom',
        abbreviation: 'FCT',
        summary: `Provids an unalterable record-keeping system. Business Processes Secured by Immutable Audit Trails on the Blockchain`
    },
    SC: {
        name: 'Siacoin',
        abbreviation: 'SC',
        summary: `cloud storage on the blockchain`
    },
    XEM: {
        name: 'NEM',
        abbreviation: 'XEM',
        summary: `Compared to Bitcoin, NEM does not require a lot of computing power and energy to run a node. NEM also advocates low entry barrier with Proof of Importance (POI) instead of the traditional ones that require a lot of stakes or computing power to mine. In NEM we call it harvesting. In addition, it also uses another solution, called Eigentrust ++ to validate and sieve out bad actors in the network`
    },
    XMR: {
        name: 'Monero',
        abbreviation: 'XMR',
        summary: `A secure, private, untraceable currency. It is open-source and freely available to all. With Monero, you are your own bank. Only you control and are responsible for your funds; your accounts and transactions are kept private from prying eyes.`
    },
    ZEC: {
        name: 'Zcash',
        abbreviation: 'ZEC',
        summary: `The first open, permissionless cryptocurrency that can fully protect the privacy of transactions using zero-knowledge cryptography.`
    },
    LSK: {
        name: 'Lisk',
        abbreviation: 'LSK',
        summary: `Decentralised blockchain applications will be built on Lisk from the ground up in pure Javascript and take advantage of the powerful Lisk APIs. In addition, every app will run in its own sidechain to ensure that Lisk itself stays safe and scalable.`
    },
    GNT: {
        name: 'Golem',
        abbreviation: 'GNT',
        summary: `A global, open sourced, decentralized supercomputer that anyone can access. It's made up of the combined power of user's machines, from personal laptops to entire datacenters. A decentralized sharing economy of computing power, where anyone can make money 'renting' out their computing power or developing & selling software.`
    },
    DOGE: {
        name: 'Doge',
        abbreviation: 'DOGE',
        summary: `A decentralized, peer-to-peer digital currency that enables you to easily send money online. Think of it as "the internet currency." Dogecoin sets itself apart from other digital currencies with an amazing, vibrant community made up of friendly folks just like you.`
    },
    GAME: {
        name: 'GameCredits',
        abbreviation: 'GAME',
        summary: `A new payment gateway for the gaming industry. GAME will provide gaming companies a very specific solution to make payments seamless, easy and secure.`
    },
    REP: {
        name: 'Augur',
        abbreviation: 'REP',
        summary: `Combines the magic of prediction markets with the power of a decentralized network to create a stunningly accurate forecasting tool - and the chance for real money trading profits`
    },
    MAID: {
        name: 'MaidSafe',
        abbreviation: 'MAID',
        summary: `You can think of SAFE as a crowd sourced internet. Rather than using data centres and servers common within today’s internet, which are prone to data theft and surveillance, the SAFE Network uses advanced P2P technology, that joins together the spare computing capacity of all SAFE users, creating a global network. It is on this network that everyone’s data and applications reside.`
    },
    STEEM: {
        name: 'STEEM',
        abbreviation: 'STEEM',
        summary: `Steem is a blockchain-based social media platform where anyone can earn rewards.`,
        short: `Earn money by posting quality content`
    },
    LTC: {
        name: 'Litecoin',
        abbreviation: 'LTC',
        summary: `Litecoin features faster transaction confirmation times and improved storage efficiency than the leading math-based currency. With substantial industry support, trade volume and liquidity, Litecoin is a proven medium of commerce complementary to Bitcoin.`
        short: `It's like Bitcoin but lighter`
    },
    BCN: {
        name: 'Bytecoin',
        abbreviation: 'BCN',
        summary: `Bytecoin allows safe and secure transactions around the globe and offers the convenience of instant fee-free money transactions.`
    },
    NXT: {
        name: 'NXT',
        abbreviation: 'NXT',
        summary: `Bitcoin pioneered the creation of crypto-currency and even now, 6 years later, most blockchain systems either rely on Bitcoin itself or incorporate relatively minor changes in order to improve it in a handful of limited ways. Nxt is different. Nxt is a platform that allows you to create your applications directly on its blockchain. You can create your own digital assets and integrate them into your existing systems.`
    },
    BLK: {
        name: 'BlackCoin',
        abbreviation: 'BLK',
        summary: `BlackCoin is a peer-to-peer digital currency with a distributed, decentralized public ledger, which unlike those of traditional banks is viewable and easily audited by anyone. It is first coin to go full proof of stake.`
        short: `Bitcoin + Proof of Stake`
    },
    EOS: {
        name: 'EOS',
        abbreviation: 'EOS',
        summary: `A new blockchain architecture designed to enable vertical and horizontal scaling of decentralized applications. This is achieved by creating an operating system-like construct upon which applications can be built. The software provides accounts, authentication, databases, asynchronous communication and the scheduling of applications across hundreds of CPU cores or clusters.`
    },
    GNO: {
        name: 'Gnosis',
        abbreviation: 'GNO',
        summary: `Based on Ethereum — The next generation blockchain network.  Speculate on anything with an easy-to-use prediction market.`
    },
    ICN: {
        name: 'Iconomi',
        abbreviation: 'ICN',
        summary: `A new and unique technical service that allows anyone from beginners to blockchain experts to invest and manage digital assets. With a broad set of unique and intuitive tools for a person of any skill level, it enables users to invest and manage various digital assets`
    },
    MLN: {
        name: 'Melon',
        abbreviation: 'MLN',
        summary: 'A blockchain protocol for digital asset management initially built on the Ethereum platform. It enables participants to set up, manage and invest in digital asset management strategies in an open, competitive and decentralised manner.'
    },
    XLM: {
        name: 'Stellar Lumens',
        abbreviation: 'XLM',
        summary: `A nonprofit that connects people to low-cost financial services to fight poverty and develop individual potential.`
    },
    ANT: {
        name: 'Aragon',
        abbreviation: 'ANT',
        summary: `A platform created to help run your company on Ethereum. Cap table, governance, fundraising, payroll, accounting, bylaws etc.`
    },
}


console.log(coins)
