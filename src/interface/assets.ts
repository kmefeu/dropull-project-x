export interface Assets {
  id: number;
  token_id: string;
  num_sales: number;
  background_color: any;
  image_url: string | null;
  image_preview_url: string | null;
  image_thumbnail_url: string;
  image_original_url: string;
  animation_url: any;
  animation_original_url: any;
  name: string;
  description: any;
  external_link: any;
  asset_contract: AssetContract;
  permalink: string;
  collection: Collection;
  decimals: number;
  token_metadata: string;
  owner: Owner;
  sell_orders: any;
  creator: Creator;
  traits: Trait[];
  last_sale: LastSale;
  top_bid: any;
  listing_date: any;
  is_presale: boolean;
  transfer_fee_payment_token: any;
  transfer_fee: any;
}

export interface AssetContract {
  address: string;
  asset_contract_type: string;
  created_date: string;
  name: string;
  nft_version: string;
  opensea_version: any;
  owner: number;
  schema_name: string;
  symbol: string;
  total_supply: string;
  description: string;
  external_link: string;
  image_url: string;
  default_to_fiat: boolean;
  dev_buyer_fee_basis_points: number;
  dev_seller_fee_basis_points: number;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: number;
  opensea_seller_fee_basis_points: number;
  buyer_fee_basis_points: number;
  seller_fee_basis_points: number;
  payout_address: string;
}

export interface Collection {
  banner_image_url: string;
  chat_url: any;
  created_date: string;
  default_to_fiat: boolean;
  description: string;
  dev_buyer_fee_basis_points: string;
  dev_seller_fee_basis_points: string;
  discord_url: string;
  display_data: DisplayData;
  external_url: string;
  featured: boolean;
  featured_image_url: any;
  hidden: boolean;
  safelist_request_status: string;
  image_url: string;
  is_subject_to_whitelist: boolean;
  large_image_url: any;
  medium_username: string;
  name: string;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: string;
  opensea_seller_fee_basis_points: string;
  payout_address: string;
  require_email: boolean;
  short_description: any;
  slug: string;
  telegram_url: any;
  twitter_username: string;
  instagram_username: string;
  wiki_url: any;
}

export interface DisplayData {
  card_display_style: string;
}

export interface Owner {
  user: User;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface User {
  username: string;
}

export interface Creator {
  user: User2;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface User2 {
  username: string;
}

export interface Trait {
  trait_type: string;
  value: string;
  display_type: any;
  max_value: any;
  trait_count: number;
  order: any;
}

export interface LastSale {
  asset: Asset;
  asset_bundle: any;
  event_type: string;
  event_timestamp: string;
  auction_type: any;
  total_price: string;
  payment_token: PaymentToken;
  transaction: Transaction;
  created_date: string;
  quantity: string;
}

export interface Asset {
  token_id: string;
  decimals: number;
}

export interface PaymentToken {
  id: number;
  symbol: string;
  address: string;
  image_url: string;
  name: string;
  decimals: number;
  eth_price: string;
  usd_price: string;
}

export interface Transaction {
  block_hash: string;
  block_number: string;
  from_account: FromAccount;
  id: number;
  timestamp: string;
  to_account: ToAccount;
  transaction_hash: string;
  transaction_index: string;
}

export interface FromAccount {
  user: User3;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface User3 {
  username: string;
}

export interface ToAccount {
  user: User4;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface User4 {
  username: string;
}
