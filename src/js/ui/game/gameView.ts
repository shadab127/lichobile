import { emptyFen } from '../../utils/fen';
import roundView from '../shared/round/view/roundView';
import gamesMenu from '../gamesMenu';
import layout from '../layout';
import { connectingHeader, viewOnlyBoardContent } from '../shared/common';

export default function view() {
  if (this.round) return roundView(this.round);

  const pov = gamesMenu.lastJoined();
  let board: () => Mithril.Child;

  if (pov) {
    board = () => viewOnlyBoardContent(pov.fen, pov.lastMove, pov.color,
      pov.variant.key);
  } else {
    board = () => viewOnlyBoardContent(emptyFen);
  }

  return layout.board(connectingHeader, board);
}