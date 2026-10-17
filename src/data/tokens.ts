export interface Token {
  symbol: string;
  name: string;
  mint: string;
  price: number;
  balance: number;
  decimals: number;
  icon: string;
  verified: boolean;
  liquidityUsd: string;
  isFreezeable: boolean;
}

export const TOKENS: Token[] = [
  {
    symbol: 'SOL',
    name: 'Solana',
    mint: 'So11111111111111111111111111111111111111112',
    price: 154.20,
    balance: 14.85,
    decimals: 9,
    icon: '🟣',
    verified: true,
    liquidityUsd: '$840M',
    isFreezeable: false,
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    price: 1.00,
    balance: 840.50,
    decimals: 6,
    icon: '💵',
    verified: true,
    liquidityUsd: '$1.2B',
    isFreezeable: false,
  },
  {
    symbol: 'JUP',
    name: 'Jupiter',
    mint: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
    price: 0.885,
    balance: 1250.0,
    decimals: 6,
    icon: '🪐',
    verified: true,
    liquidityUsd: '$145M',
    isFreezeable: false,
  },
  {
    symbol: 'BONK',
    name: 'Bonk',
    mint: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
    price: 0.0000215,
    balance: 45000000,
    decimals: 5,
    icon: '🐕',
    verified: true,
    liquidityUsd: '$78M',
    isFreezeable: false,
  }
];
