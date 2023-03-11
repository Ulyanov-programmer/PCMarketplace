import { elementIsExistWithLog, returnScrollbarWidth } from "./general.js"

interface ModalWindowMenuArgs {
  /**
    Selector of buttons for opening modal windows.
    For correct work, you need to add the attribute [data-modal-link="idOfModal"]
    `(attention, every modal element must contain an id)`
  */
  modalLinksSelector: string
  /**
    Selector of burger-menu, need for correct work with it.
    Not required.
  */
  burgerMenuSelector?: string
  disableOnEsc?: boolean
}

export default class ModalWindowMenu {
  private static modalLinks: NodeListOf<HTMLElement>
  private static modalElements: NodeListOf<HTMLElement>
  private static burgerMenuClasslist: DOMTokenList
  private readonly modalWindowSelector = '.modal-window'
  private readonly modalWindowContentClass = 'modal-window'
  private readonly modalWindowCloseButtonsClass = 'modal-window__closer'
  private readonly modalWindowActiveSelector = '.modal-window.active'

  constructor(arg: ModalWindowMenuArgs) {
    if (!elementIsExistWithLog('ModalWindowMenu', arg.modalLinksSelector))
      return

    if (arg.burgerMenuSelector)
      ModalWindowMenu.burgerMenuClasslist = document.querySelector(arg.burgerMenuSelector).classList

    ModalWindowMenu.modalLinks = document.querySelectorAll(arg.modalLinksSelector)

    for (let modalLink of ModalWindowMenu.modalLinks) {
      modalLink.addEventListener("click", () => {
        let modalId = modalLink.dataset.openModalId

        if (modalId) {
          let modal = document.getElementById(modalId)

          this.showOrHideModal(modal)
        }
      })
    }


    ModalWindowMenu.modalElements = document.querySelectorAll(this.modalWindowSelector)

    for (let modalElement of ModalWindowMenu.modalElements) {
      let modalClosers = modalElement.querySelectorAll('.' + this.modalWindowCloseButtonsClass)

      for (let modalCloser of modalClosers) {
        modalCloser.addEventListener('click', () => this.closeActiveModal(true))
      }
    }


    if (arg.disableOnEsc) {
      document.addEventListener('keydown', (key) => {
        if (key.code != 'Escape') return

        let activeModal = this.getCurrentActiveModal()
        activeModal ? this.closeActiveModal() : false
      })
    }
  }


  private showOrHideModal(modalElement: HTMLElement) {
    let activeModal = this.getCurrentActiveModal()

    activeModal ? this.closeActiveModal(false, activeModal) : this.toggleBodyScroll(false)

    modalElement.classList.add("active")
  }

  private closeActiveModal(bodyIsScrollable: boolean = true, activeModal?: HTMLElement) {
    if (activeModal == undefined)
      activeModal = this.getCurrentActiveModal()

    activeModal.classList.remove("active")

    bodyIsScrollable ? this.toggleBodyScroll(true) : false
  }

  private toggleBodyScroll(toggleScrollOn: boolean) {
    if (this.chekPossibileSwitchScroll(toggleScrollOn)) {
      document.body.style.paddingRight = ''
      document.body.style.overflow = ''
    } else {
      document.body.style.paddingRight = returnScrollbarWidth() + 'px'
      document.body.style.overflow = 'hidden'
    }
  }

  private getCurrentActiveModal(): HTMLElement {
    let activeModal = document.querySelector(this.modalWindowActiveSelector) as HTMLElement
    return activeModal
  }


  private chekPossibileSwitchScroll(toggleOnValue: boolean): boolean {
    if (ModalWindowMenu.burgerMenuClasslist) {
      if (!ModalWindowMenu.burgerMenuClasslist.contains('active') && toggleOnValue) {
        return true
      } else {
        return false
      }
    } else {
      return toggleOnValue
    }
  }
}