export interface Assets {
  id: number;
  token_id: string;
  num_sales: number;
  background_color: any;
  image_url: string;
  image_preview_url: string;
  image_thumbnail_url: string;
  image_original_url: any;
  animation_url: any;
  animation_original_url: any;
  name: string;
  description: any;
  external_link: string;
  asset_contract: AssetContract;
  permalink: string;
  collection: Collection;
  decimals: any;
  token_metadata: any;
  owner: Owner;
  sell_orders: any;
  creator: Creator;
  traits: any[];
  last_sale: any;
  top_bid: any;
  listing_date: any;
  is_presale: boolean;
  transfer_fee_payment_token: any;
  transfer_fee: any;
  related_assets: any[];
  orders: Order[];
  auctions: any[];
  supports_wyvern: boolean;
  top_ownerships: TopOwnership[];
  ownership: any;
  highest_buyer_commitment: any;
}

export interface AssetContract {
  address: string;
  asset_contract_type: string;
  created_date: string;
  name: string;
  nft_version: any;
  opensea_version: string;
  owner: number;
  schema_name: string;
  symbol: string;
  total_supply: any;
  description: string;
  external_link: any;
  image_url: any;
  default_to_fiat: boolean;
  dev_buyer_fee_basis_points: number;
  dev_seller_fee_basis_points: number;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: number;
  opensea_seller_fee_basis_points: number;
  buyer_fee_basis_points: number;
  seller_fee_basis_points: number;
  payout_address: any;
}

export interface Collection {
  payment_tokens: PaymentToken[];
  primary_asset_contracts: any[];
  traits: Traits;
  stats: Stats;
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
  featured_image_url: string;
  hidden: boolean;
  safelist_request_status: string;
  image_url: string;
  is_subject_to_whitelist: boolean;
  large_image_url: string;
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

export interface PaymentToken {
  id: number;
  symbol: string;
  address: string;
  image_url: string;
  name: string;
  decimals: number;
  eth_price?: number;
  usd_price?: number;
}

export interface Traits {
  AllStats: AllStats;
}

export interface AllStats {
  min: number;
  max: number;
}

export interface Stats {
  one_day_volume: number;
  one_day_change: number;
  one_day_sales: number;
  one_day_average_price: number;
  seven_day_volume: number;
  seven_day_change: number;
  seven_day_sales: number;
  seven_day_average_price: number;
  thirty_day_volume: number;
  thirty_day_change: number;
  thirty_day_sales: number;
  thirty_day_average_price: number;
  total_volume: number;
  total_sales: number;
  total_supply: number;
  count: number;
  num_owners: number;
  average_price: number;
  num_reports: number;
  market_cap: number;
  floor_price: number;
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
  username: string | null;
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

export interface Order {
  created_date: string;
  closing_date: string;
  closing_extendable: boolean;
  expiration_time: number;
  listing_time: number;
  order_hash: string;
  metadata: Metadata;
  exchange: string;
  maker: Maker;
  taker: Taker;
  current_price: string;
  current_bounty: string;
  bounty_multiple: string;
  maker_relayer_fee: string;
  taker_relayer_fee: string;
  maker_protocol_fee: string;
  taker_protocol_fee: string;
  maker_referrer_fee: string;
  fee_recipient: FeeRecipient;
  fee_method: number;
  side: number;
  sale_kind: number;
  target: string;
  how_to_call: number;
  calldata: string;
  replacement_pattern: string;
  static_target: string;
  static_extradata: string;
  payment_token: string;
  payment_token_contract: PaymentTokenContract;
  base_price: string;
  extra: string;
  quantity: string;
  salt: string;
  v: number;
  r: string;
  s: string;
  approved_on_chain: boolean;
  cancelled: boolean;
  finalized: boolean;
  marked_invalid: boolean;
  prefixed_hash: string;
}

export interface Metadata {
  asset: Asset;
  schema: string;
}

export interface Asset {
  id: string;
  address: string;
  quantity: string;
}

export interface Maker {
  user: User3;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface User3 {
  username: string;
}

export interface Taker {
  user: User4;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface User4 {
  username: string;
}

export interface FeeRecipient {
  user: User5;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface User5 {
  username: string;
}

export interface PaymentTokenContract {
  id: number;
  symbol: string;
  address: string;
  image_url: string;
  name: string;
  decimals: number;
  eth_price: string;
  usd_price: string;
}

export interface TopOwnership {
  owner: Owner2;
  quantity: string;
}

export interface Owner2 {
  user: User6;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface User6 {
  username: string;
}
