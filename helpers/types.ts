import { BigNumber } from 'ethers';

export interface SymbolMap<T> {
  [symbol: string]: T;
}

export type eNetwork = eEthereumNetwork;

export enum eEthereumNetwork {
  kovan = 'kovan',
  ropsten = 'ropsten',
  main = 'main',
  coverage = 'coverage',
  hardhat = 'hardhat',
  tenderlyMain = 'tenderlyMain',
}

export enum eContractid {
  Example = 'Example',
  PoolAddressesProvider = 'PoolAddressesProvider',
  MintableERC20 = 'MintableERC20',
  MintableDelegationERC20 = 'MintableDelegationERC20',
  PoolAddressesProviderRegistry = 'PoolAddressesProviderRegistry',
  ACLManager = 'ACLManager',
  PoolParametersProvider = 'PoolParametersProvider',
  PoolConfigurator = 'PoolConfigurator',
  ValidationLogic = 'ValidationLogic',
  ReserveLogic = 'ReserveLogic',
  GenericLogic = 'GenericLogic',
  SupplyLogic = 'SupplyLogic',
  BorrowLogic = 'BorrowLogic',
  FlashLoanLogic = 'FlashLoanLogic',
  LiquidationLogic = 'LiquidationLogic',
  BridgeLogic = 'BridgeLogic',
  EModeLogic = 'EModeLogic',
  ConfiguratorLogic = 'ConfiguratorLogic',
  Pool = 'Pool',
  PriceOracle = 'PriceOracle',
  Proxy = 'Proxy',
  MockAggregator = 'MockAggregator',
  AaveOracle = 'AaveOracle',
  DefaultReserveInterestRateStrategy = 'DefaultReserveInterestRateStrategy',
  InitializableImmutableAdminUpgradeabilityProxy = 'InitializableImmutableAdminUpgradeabilityProxy',
  MockFlashLoanReceiver = 'MockFlashLoanReceiver',
  AToken = 'AToken',
  MockAToken = 'MockAToken',
  DelegationAwareAToken = 'DelegationAwareAToken',
  MockStableDebtToken = 'MockStableDebtToken',
  MockVariableDebtToken = 'MockVariableDebtToken',
  AaveProtocolDataProvider = 'AaveProtocolDataProvider',
  IERC20Detailed = 'IERC20Detailed',
  StableDebtToken = 'StableDebtToken',
  VariableDebtToken = 'VariableDebtToken',
  FeeProvider = 'FeeProvider',
  TokenDistributor = 'TokenDistributor',
  ReservesSetupHelper = 'ReservesSetupHelper',
  WETH = 'WETH',
  WETHMocked = 'WETHMocked',
  PoolImpl = 'PoolImpl',
  PoolConfiguratorImpl = 'PoolConfiguratorImpl',
  MockIncentivesController = 'MockIncentivesController',
  MockReserveConfiguration = 'MockReserveConfiguration',
  MockPool = 'MockPool',
  MockInitializableImple = 'MockInitializableImple',
  MockInitializableImpleV2 = 'MockInitializableImpleV2',
  MockInitializableFromConstructorImple = 'MockInitializableFromConstructorImple',
  MockReentrantInitializableImple = 'MockReentrantInitializableImple',
}

/*
 * Error messages prefix glossary:
 *  - ACL = Common errors related to Access Control List
 *  - PAPR = PoolAddressesProviderRegistry
 *  - P = Pool
 *  - PC = PoolConfiguration
 *  - CT = Common errors between tokens (AToken, VariableDebtToken and StableDebtToken)
 *  - AT = AToken
 *  - SDT = StableDebtToken
 *  - VDT = VariableDebtToken
 *  - VL = ValidationLogic
 *  - RL = ReserveLogic
 *  - SL = SupplyLogic
 *  - RC = ReserveConfiguration
 *  - UC = UserConfiguration
 *  - HLP = Helpers
 */
export enum ProtocolErrors {
  ACL_CALLER_NOT_POOL_ADMIN = '1', // 'The caller of the function is not a pool admin'
  ACL_CALLER_NOT_EMERGENCY_ADMIN = '2', // 'The caller of the function is not an emergency admin'
  ACL_CALLER_NOT_POOL_OR_EMERGENCY_ADMIN = '3', // 'The caller of the function is not a pool or emergency admin'
  ACL_CALLER_NOT_RISK_OR_POOL_ADMIN = '4', // 'The caller of the function is not a risk or pool admin'
  ACL_CALLER_NOT_ASSET_LISTING_OR_POOL_ADMIN = '5', // 'The caller of the function is not an asset listing or pool admin'
  ACL_CALLER_NOT_BRIDGE = '6', // 'The caller of the function is not a bridge'
  PAPR_PROVIDER_NOT_REGISTERED = '7', // 'Provider is not registered'
  PAPR_INVALID_ADDRESSES_PROVIDER_ID = '8', // 'Invalid id for the pool addresses provider'
  P_NOT_CONTRACT = '9', // 'Address is not a contract'
  P_CALLER_NOT_POOL_CONFIGURATOR = '10', // 'The caller of the function is not the pool configurator'
  P_CALLER_NOT_ATOKEN = '11', // 'The caller of the function is not an atoken'
  P_INCORRECT_ADDRESSES_PROVIDER = '12', // 'The address of the pool addresses provider is incorrect'
  P_INVALID_FLASHLOAN_EXECUTOR_RETURN = '13', // 'Invalid return value of the flashloan executor function'
  P_RESERVE_ALREADY_ADDED = '14', // 'Reserve has already been added to reserve list'
  P_NO_MORE_RESERVES_ALLOWED = '15', // 'Maximum amount of reserves in the pool reached'
  P_EMODE_CATEGORY_RESERVED = '16', // 'Zero eMode category is reserved for volatile heterogeneous assets'
  P_INVALID_EMODE_CATEGORY_ASSIGNMENT = '17', // 'Invalid eMode category assignment to asset'
  PC_RESERVE_LIQUIDITY_NOT_ZERO = '18', // 'The liquidity of the reserve needs to be 0'
  PC_FLASHLOAN_PREMIUMS_MISMATCH = '19', // 'Flashloan total premium should be equal or greater than flashloan premium to protocol'
  PC_FLASHLOAN_PREMIUM_INVALID = '20', // 'Invalid flashloan premium'
  PC_INVALID_PARAMS_RESERVE = '21', // 'Invalid risk parameters for the reserve'
  PC_INVALID_PARAMS_EMODE_CATEGORY = '22', // 'Invalid risk parameters for the eMode category'
  PC_BRIDGE_PROTOCOL_FEE_INVALID = '23', // 'Invalid bridge protocol fee'
  CT_CALLER_MUST_BE_POOL = '24', // 'The caller of this function must be a pool'
  CT_INVALID_MINT_AMOUNT = '25', // 'Invalid amount to mint'
  CT_INVALID_BURN_AMOUNT = '26', // 'Invalid amount to burn'
  VL_INVALID_AMOUNT = '27', // 'Amount must be greater than 0'
  VL_RESERVE_INACTIVE = '28', // 'Action requires an active reserve'
  VL_RESERVE_FROZEN = '29', // 'Action cannot be performed because the reserve is frozen'
  VL_RESERVE_PAUSED = '30', // 'Action cannot be performed because the reserve is paused'
  VL_BORROWING_NOT_ENABLED = '31', // 'Borrowing is not enabled'
  VL_STABLE_BORROWING_NOT_ENABLED = '32', // 'Stable borrowing is not enabled'
  VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE = '33', // 'User cannot withdraw more than the available balance'
  VL_INVALID_INTEREST_RATE_MODE_SELECTED = '34', // 'Invalid interest rate mode selected'
  VL_COLLATERAL_BALANCE_IS_ZERO = '35', // 'The collateral balance is 0'
  VL_HEALTH_FACTOR_LOWER_THAN_LIQUIDATION_THRESHOLD = '36', // 'Health factor is lesser than the liquidation threshold'
  VL_COLLATERAL_CANNOT_COVER_NEW_BORROW = '37', // 'There is not enough collateral to cover a new borrow'
  VL_COLLATERAL_SAME_AS_BORROWING_CURRENCY = '38', // 'Collateral is (mostly) the same currency that is being borrowed'
  VL_AMOUNT_BIGGER_THAN_MAX_LOAN_SIZE_STABLE = '39', // 'The requested amount is greater than the max loan size in stable rate mode'
  VL_NO_DEBT_OF_SELECTED_TYPE = '40', // 'For repayment of a specific type of debt, the user needs to have debt that type'
  VL_NO_EXPLICIT_AMOUNT_TO_REPAY_ON_BEHALF = '41', // 'To repay on behalf of a user an explicit amount to repay is needed'
  VL_NO_STABLE_RATE_LOAN_IN_RESERVE = '42', // 'User does not have a stable rate loan in progress on this reserve'
  VL_NO_VARIABLE_RATE_LOAN_IN_RESERVE = '43', // 'User does not have a variable rate loan in progress on this reserve'
  VL_UNDERLYING_BALANCE_ZERO = '44', // 'The underlying balance needs to be greater than 0'
  VL_INTEREST_RATE_REBALANCE_CONDITIONS_NOT_MET = '45', // 'Interest rate rebalance conditions were not met'
  VL_HEALTH_FACTOR_NOT_BELOW_THRESHOLD = '46', // 'Health factor is not below the threshold'
  VL_COLLATERAL_CANNOT_BE_LIQUIDATED = '47', // 'The collateral chosen cannot be liquidated'
  VL_SPECIFIED_CURRENCY_NOT_BORROWED_BY_USER = '48', // 'User did not borrow the specified currency'
  VL_SAME_BLOCK_BORROW_REPAY = '49', // 'Borrow and repay in same block is not allowed'
  VL_INCONSISTENT_FLASHLOAN_PARAMS = '50', // 'Inconsistent flashloan parameters'
  VL_BORROW_CAP_EXCEEDED = '51', // 'Borrow cap is exceeded'
  VL_SUPPLY_CAP_EXCEEDED = '52', // 'Supply cap is exceeded'
  VL_UNBACKED_MINT_CAP_EXCEEDED = '53', // 'Unbacked mint cap is exceeded'
  VL_DEBT_CEILING_EXCEEDED = '54', // 'Debt ceiling is exceeded'
  VL_ATOKEN_SUPPLY_NOT_ZERO = '55', // 'Atoken supply is not zero'
  VL_STABLE_DEBT_NOT_ZERO = '56', // 'Stable debt supply is not zero'
  VL_VARIABLE_DEBT_SUPPLY_NOT_ZERO = '57', // 'Variable debt supply is not zero'
  VL_LTV_VALIDATION_FAILED = '58', // 'Ltv validation failed'
  VL_INCONSISTENT_EMODE_CATEGORY = '59', // 'Inconsistent eMode category'
  VL_PRICE_ORACLE_SENTINEL_CHECK_FAILED = '60', // 'Price oracle sentinel validation failed'
  VL_ASSET_NOT_BORROWABLE_IN_ISOLATION = '61', // 'Asset is not borrowable in isolation mode'
  RL_RESERVE_ALREADY_INITIALIZED = '62', // 'Reserve has already been initialized'
  SL_USER_IN_ISOLATION_MODE = '63', // 'User is in isolation mode'
  RC_INVALID_LTV = '64', // 'Invalid ltv parameter for the reserve'
  RC_INVALID_LIQ_THRESHOLD = '65', // 'Invalid liquidity threshold parameter for the reserve'
  RC_INVALID_LIQ_BONUS = '66', // 'Invalid liquidity bonus parameter for the reserve'
  RC_INVALID_DECIMALS = '67', // 'Invalid decimals parameter of the underlying asset of the reserve'
  RC_INVALID_RESERVE_FACTOR = '68', // 'Invalid reserve factor parameter for the reserve'
  RC_INVALID_BORROW_CAP = '69', // 'Invalid borrow cap for the reserve'
  RC_INVALID_SUPPLY_CAP = '70', // 'Invalid supply cap for the reserve'
  RC_INVALID_LIQUIDATION_PROTOCOL_FEE = '71', // 'Invalid liquidation protocol fee for the reserve'
  RC_INVALID_EMODE_CATEGORY = '72', // 'Invalid eMode category for the reserve'
  RC_INVALID_UNBACKED_MINT_CAP = '73', // 'Invalid unbacked mint cap for the reserve'
  RC_INVALID_DEBT_CEILING = '74', // 'Invalid debt ceiling for the reserve
  UC_INVALID_RESERVE_INDEX = '75', // 'Invalid reserve index'
  HLP_UINT128_OVERFLOW = '76', // 'Uint128 overflow'

  // old

  INVALID_FROM_BALANCE_AFTER_TRANSFER = 'Invalid from balance after transfer',
  INVALID_TO_BALANCE_AFTER_TRANSFER = 'Invalid from balance after transfer',
  INVALID_OWNER_REVERT_MSG = 'Ownable: caller is not the owner',
  INVALID_HF = 'Invalid health factor',
  TRANSFER_AMOUNT_EXCEEDS_BALANCE = 'ERC20: transfer amount exceeds balance',
  SAFEERC20_LOWLEVEL_CALL = 'SafeERC20: low-level call failed',
}

export type tEthereumAddress = string;
export type tStringTokenBigUnits = string; // 1 ETH, or 10e6 USDC or 10e18 DAI
export type tBigNumberTokenBigUnits = BigNumber;
export type tStringTokenSmallUnits = string; // 1 wei, or 1 basic unit of USDC, or 1 basic unit of DAI
export type tBigNumberTokenSmallUnits = BigNumber;

export interface iAssetCommon<T> {
  [key: string]: T;
}
export interface iAssetBase<T> {
  WETH: T;
  DAI: T;
  TUSD: T;
  USDC: T;
  USDT: T;
  SUSD: T;
  AAVE: T;
  BAT: T;
  MKR: T;
  LINK: T;
  KNC: T;
  WBTC: T;
  MANA: T;
  ZRX: T;
  SNX: T;
  BUSD: T;
  YFI: T;
  UNI: T;
  USD: T;
  REN: T;
  ENJ: T;
  UniDAIWETH: T;
  UniWBTCWETH: T;
  UniAAVEWETH: T;
  UniBATWETH: T;
  UniDAIUSDC: T;
  UniCRVWETH: T;
  UniLINKWETH: T;
  UniMKRWETH: T;
  UniRENWETH: T;
  UniSNXWETH: T;
  UniUNIWETH: T;
  UniUSDCWETH: T;
  UniWBTCUSDC: T;
  UniYFIWETH: T;
  BptWBTCWETH: T;
  BptBALWETH: T;
  WMATIC: T;
  STAKE: T;
  xSUSHI: T;
}

export type iAssetsWithoutETH<T> = Omit<iAssetBase<T>, 'ETH'>;

export type iAssetsWithoutUSD<T> = Omit<iAssetBase<T>, 'USD'>;

export type iAavePoolAssets<T> = Pick<
  iAssetsWithoutUSD<T>,
  | 'DAI'
  | 'TUSD'
  | 'USDC'
  | 'USDT'
  | 'SUSD'
  | 'AAVE'
  | 'BAT'
  | 'MKR'
  | 'LINK'
  | 'KNC'
  | 'WBTC'
  | 'MANA'
  | 'ZRX'
  | 'SNX'
  | 'BUSD'
  | 'WETH'
  | 'YFI'
  | 'UNI'
  | 'REN'
  | 'ENJ'
  | 'xSUSHI'
>;

export type iMultiPoolsAssets<T> = iAssetCommon<T> | iAavePoolAssets<T>;

export type iAssetAggregatorBase<T> = iAssetsWithoutETH<T>;

export enum TokenContractId {
  DAI = 'DAI',
  AAVE = 'AAVE',
  TUSD = 'TUSD',
  BAT = 'BAT',
  WETH = 'WETH',
  USDC = 'USDC',
  USDT = 'USDT',
  SUSD = 'SUSD',
  ZRX = 'ZRX',
  MKR = 'MKR',
  WBTC = 'WBTC',
  LINK = 'LINK',
  KNC = 'KNC',
  MANA = 'MANA',
  REN = 'REN',
  SNX = 'SNX',
  BUSD = 'BUSD',
  USD = 'USD',
  YFI = 'YFI',
  UNI = 'UNI',
  ENJ = 'ENJ',
  UniDAIWETH = 'UniDAIWETH',
  UniWBTCWETH = 'UniWBTCWETH',
  UniAAVEWETH = 'UniAAVEWETH',
  UniBATWETH = 'UniBATWETH',
  UniDAIUSDC = 'UniDAIUSDC',
  UniCRVWETH = 'UniCRVWETH',
  UniLINKWETH = 'UniLINKWETH',
  UniMKRWETH = 'UniMKRWETH',
  UniRENWETH = 'UniRENWETH',
  UniSNXWETH = 'UniSNXWETH',
  UniUNIWETH = 'UniUNIWETH',
  UniUSDCWETH = 'UniUSDCWETH',
  UniWBTCUSDC = 'UniWBTCUSDC',
  UniYFIWETH = 'UniYFIWETH',
  BptWBTCWETH = 'BptWBTCWETH',
  BptBALWETH = 'BptBALWETH',
  WMATIC = 'WMATIC',
  STAKE = 'STAKE',
  xSUSHI = 'xSUSHI',
}

export interface IReserveParams extends IReserveBorrowParams, IReserveCollateralParams {
  aTokenImpl: eContractid;
  reserveFactor: string;
  supplyCap: string;
  strategy: IInterestRateStrategyParams;
}

export interface IInterestRateStrategyParams {
  name: string;
  optimalUtilizationRate: string;
  baseVariableBorrowRate: string;
  variableRateSlope1: string;
  variableRateSlope2: string;
  stableRateSlope1: string;
  stableRateSlope2: string;
  baseStableRateOffset: string;
  stableRateExcessOffset: string;
  optimalStableToTotalDebtRatio: string;
}

export interface IReserveBorrowParams {
  // optimalUtilizationRate: string;
  // baseVariableBorrowRate: string;
  // variableRateSlope1: string;
  // variableRateSlope2: string;
  // stableRateSlope1: string;
  // stableRateSlope2: string;
  borrowingEnabled: boolean;
  stableBorrowRateEnabled: boolean;
  reserveDecimals: string;
  borrowCap: string;
}

export interface IReserveCollateralParams {
  baseLTVAsCollateral: string;
  liquidationThreshold: string;
  liquidationBonus: string;
}
export interface IMarketRates {
  borrowRate: string;
}

export type iParamsPerNetwork<T> = iEthereumParamsPerNetwork<T>;

export interface iParamsPerNetworkAll<T> extends iEthereumParamsPerNetwork<T> {}

export interface iEthereumParamsPerNetwork<T> {
  [eEthereumNetwork.coverage]: T;
  [eEthereumNetwork.kovan]: T;
  [eEthereumNetwork.ropsten]: T;
  [eEthereumNetwork.main]: T;
  [eEthereumNetwork.hardhat]: T;
  [eEthereumNetwork.tenderlyMain]: T;
}

export enum RateMode {
  None = '0',
  Stable = '1',
  Variable = '2',
}

export interface IProtocolGlobalConfig {
  TokenDistributorPercentageBase: string;
  MockUsdPriceInWei: string;
  UsdAddress: tEthereumAddress;
  NilAddress: tEthereumAddress;
  OneAddress: tEthereumAddress;
  AaveReferral: string;
}

export interface IMocksConfig {
  AllAssetsInitialPrices: iAssetBase<string>;
}

export interface IRate {
  borrowRate: string;
}

export interface ICommonConfiguration {
  MarketId: string;
  ATokenNamePrefix: string;
  StableDebtTokenNamePrefix: string;
  VariableDebtTokenNamePrefix: string;
  SymbolPrefix: string;
  ProviderId: number;
  ProtocolGlobalParams: IProtocolGlobalConfig;
  Mocks: IMocksConfig;
  ProviderRegistry: tEthereumAddress | undefined;
  ProviderRegistryOwner: tEthereumAddress | undefined;
  PoolConfigurator: tEthereumAddress | undefined;
  Pool: tEthereumAddress | undefined;
  TokenDistributor: tEthereumAddress | undefined;
  AaveOracle: tEthereumAddress | undefined;
  FallbackOracle: tEthereumAddress | undefined;
  ChainlinkAggregator: tEthereumAddress | undefined;
  PoolAdmin: tEthereumAddress | undefined;
  PoolAdminIndex: number;
  EmergencyAdmin: tEthereumAddress | undefined;
  EmergencyAdminIndex: number;
  ReserveAssets: SymbolMap<tEthereumAddress> | SymbolMap<undefined>;
  ReservesConfig: iMultiPoolsAssets<IReserveParams>;
  ATokenDomainSeparator: string;
  WETH: tEthereumAddress | undefined;
  WrappedNativeToken: tEthereumAddress | undefined;
  ReserveFactorTreasuryAddress: tEthereumAddress;
  IncentivesController: tEthereumAddress | undefined;
}

export interface IAaveConfiguration extends ICommonConfiguration {
  ReservesConfig: iMultiPoolsAssets<IReserveParams>;
}

export type PoolConfiguration = ICommonConfiguration | IAaveConfiguration;
