import Sidebar from './modules/sidebar.src.js'
// import { ChangePlane } from './modules/swipe.src.js'

new Sidebar({
  selectorOfSidebar: '#shop-menu-sidebar',
  buttonActiveClass: 'active',
  sidebarActiveClass: 'active',
  // swipeElementOptions: {
  //   changePlane: ChangePlane.ToRight,
  //   swipeSensitivity: 0.5,
  //   maxWorkWidth: 1024,
  // }
})