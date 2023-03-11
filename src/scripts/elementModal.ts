import ElementModal from './modules/elementModal.src.js'
/*
  It works like this:
  When hovering over a contentElement, 
  clones the modalElement and places it absolutely above the contentElement.
  Moving the mouse away from the contentElement deletes the pasted modalElement copy.
*/
new ElementModal({
  contentElementsSelector: '.___',
  modalElementSelector: '.___',
  // smooth transition is calculated automatically, specify it for a modalElement
})