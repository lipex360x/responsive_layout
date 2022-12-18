export default class Search {
  constructor() {
    this.typingTimer
    this.previousValue
    this.isSpinnerVisible = false
    
    this.showOverlay = true;
    this.menuSection = document.querySelector('.menu-section')
    this.searchToggle = this.menuSection.querySelector('.search-toggle')

    this.searchOverlay = document.querySelector('.search-overlay')
    this.closeButton = document.querySelector('.search-close')
    this.searchField = document.querySelector('.search-field')
    this.searchSpiner = document.querySelector('.spinner-loader')
    this.searchResult = document.querySelector('.search-results')

    this.events()
  }

  events() {
    document.addEventListener('keydown', e => this.keyPressDispatcher(e))

    this.searchToggle.addEventListener('click', () => this.openOverlay())
    this.closeButton.addEventListener('click', () => this.closeOverlay())

    this.searchField.addEventListener('keyup', () => this.typingLogic())
  }

  typingLogic = () => {

    if(this.searchField.value != this.previousValue) {
      if(!this.isSpinnerVisible) this.searchSpiner.classList.add('show')
      clearTimeout(this.typingTimer)

      if(this.searchField.value) {
        this.typingTimer = setTimeout(this.getResults, 600)
      } else {
        this.searchSpiner.classList.remove('show')
      }
    }

    this.previousValue = this.searchField.value
  }

  openOverlay = () => {
    this.showOverlay = true

    document.body.style.overflow = 'hidden'
    this.searchOverlay.classList.add('on')

    setTimeout(() => this.searchField.focus(), 301);
  }
  
  closeOverlay = () => {
    this.showOverlay = false

    document.body.style.overflow = 'initial'
    this.searchOverlay.classList.remove('on')
    this.searchField.value = ''
  }

  getResults = () => {
    this.searchSpiner.classList.remove('show')
    // console.log('get results')
  }

  keyPressDispatcher = (e) => {
    if( e.keyCode == 83 &&
        document.activeElement.tagName != 'INPUT' && 
        document.activeElement.tagName != 'TEXTAREA'
      ) this.openOverlay()

    if(e.keyCode == 27 && this.showOverlay) this.closeOverlay()
  }
}
