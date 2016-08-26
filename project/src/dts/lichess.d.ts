declare type Timestamp = number;

declare type StringMap = {
  [i: string]: string;
}

declare type Prop<T> = {
  (): T
  (value: T): T;
}

declare type LichessOptions = {
  apiEndPoint: string;
  socketEndPoint: string;
  mode: string;
  version: string;
  gaId: string;
  gcmSenderId: string;
}

declare type Analytics = {
  debugMode(success: () => void, error: (e: string) => void): void;
  startTrackerWithId(id: string, success: () => void, error: (e: string) => void): void;
  trackView(screen: string, success: () => void, error: (e: string) => void): void;
  trackException(description: string, fatal: boolean, success: () => void, error: (e: string) => void): void;
  trackEvent(category: string, action: string, label: string, value: number, success: () => void, error: (e: string) => void): void;
  trackTiming(category: string, interval: number, name: string, label: string, success: () => void, error: (e: string) => void): void;
}

interface Window {
  lichess: LichessOptions;
  moment: any;
  analytics: Analytics;
  shouldRotateToOrientation: () => boolean;
}

declare type PongMessage = {
  d: number;
  r: number;
}

declare type LichessMessage = {
  t: string;
  d?: string;
}

declare type WorkerMessage = {
  topic: string;
  payload?: any;
}

interface PlayTime {
  total: number;
  tv: number;
}

declare type User = {
  booster: boolean;
  engine: boolean;
  patron: boolean;
  id: string;
  username: string;
  name?: string;
  language: string;
  title?: string;
  rating?: number;
  online?: boolean;
  createdAt: Timestamp;
  seenAt: Timestamp;
  perfs: any;
  playTime?: PlayTime;
}

declare type Color = 'white' | 'black';

declare type Player = {
  id: string;
  rating?: number;
  color: Color;
  user?: User;
  provisional?: boolean;
  username?: string;
  ai?: number;
  onGame?: boolean;
  isGone?: boolean;
  engineName?: string;
  offeringDraw?: boolean;
  proposingTakeback?: boolean;
  spectator?: boolean;
}

declare type TournamentClock = {
  limit: number;
  increment: number;
}

declare type ChallengeClock = {
  timeControl: TimeControl;
}

declare type TimeControl = {
  type: string;
  show?: string;
  daysPerTurn?: number;
}

declare type Clock = {
  black: number;
  white: number;
  emerg: number;
  running: boolean;
  initial: number;
  increment: number;
}

declare type CorrespondenceClock = {
  barTime: number;
  black: number;
  daysPerTurn: number;
  emerg: number;
  increment: number;
  white: number;
}

declare type Tournament = {
  id: string;
  berserkable: boolean;
}

declare type GameData = {
  game: Game;
  player: Player;
  opponent: Player;
  correspondence?: CorrespondenceClock;
  clock?: Clock;
  steps?: Array<GameSituation>;
  tournament?: Tournament;
  takebackable: boolean;
  note?: string;
  chat?: Array<string>;
  possibleMoves?: {[index: string]: string}
}

declare type Game = {
  createdAt?: Timestamp;
  fen: string;
  initialFen: string;
  id: string;
  lastMove: string;
  perf?: string;
  variant: Variant;
  player: Color;
  source: string;
  speed?: string;
  startedAtTurn?: number;
  winner?: Color;
  status: GameStatus;
  turns: number;
}

declare type StoredOfflineGame = {
  data: GameData;
  situations: any;
  ply: number;
}

declare type Variant = {
  key: string;
  name: string;
  short: string;
  title: string;
}

declare type GameStatus = {
  id: number;
  name: string;
}

interface CheckCount {
  white: number;
  black: number;
}

declare type GameSituation = {
  variant: string
  fen: string
  player: string
  dests: { [key: string]: Array<string> }
  drops?: Array<string>
  end: boolean
  playable: boolean
  status?: GameStatus
  winner?: Color
  check: boolean
  checkCount: CheckCount
  pgnMoves: Array<string>
  uciMoves: Array<string>
  promotion?: string
  crazyhouse?: string
  ply: number
}

declare type Dimensions = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
}


