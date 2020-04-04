import './polyfills';
import { deprecatedComponent } from './helpers'

import Menu from './Menu';
import MenuProvider, { withCtx } from './MenuProvider';
import MenuOption from './MenuOption';
import MenuOptions from './MenuOptions';
import MenuTrigger from './MenuTrigger';

import ContextMenu from './renderers/ContextMenu';
// import NotAnimatedContextMenu from './rendererxs/NotAnimatedContextMenu';
// import SlideInMenu from './renderers/SlideInMenu';
// import Popover from './renderers/Popover';
const renderers = { ContextMenu};

// const MenuContext = deprecatedComponent(
//   'MenuContext is deprecated and it might be removed in future releases, use MenuProvider instead.',
//   ['openMenu', 'toggleMenu', 'closeMenu', 'isMenuOpen'],
// )(MenuProvider);

export {
  Menu as default,
  Menu,
  MenuProvider,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
  withCtx as withMenuContext,
};
