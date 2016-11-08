import * as helper from '../../helper';
import oninit from './composeCtrl';
import view from './composeView';

export default {
  oncreate: helper.viewFadeIn,
  oninit,
  onremove() {
    window.removeEventListener('native.keyboardshow', helper.onKeyboardShow);
    window.removeEventListener('native.keyboardhide', helper.onKeyboardHide);
  },
  view
};