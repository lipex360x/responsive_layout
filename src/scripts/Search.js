export default class Search {
  constructor() {
    this.show = true;
    this.menuSection = document.querySelector('.menu-section')
    this.searchToggle = this.menuSection.querySelector('.search-toggle')

    this.searchOverlay = document.querySelector('.search-overlay')
    this.searchField = document.querySelector('.search-field')
    this.closeButton = document.querySelector(".search-close")

    this.events()
  }

  events() {
    this.searchToggle.addEventListener('click', () => {
      this.openOverlay()
    })

    this.closeButton.addEventListener("click", () => this.closeOverlay())
    document.addEventListener("keydown", e => this.keyPressDispatcher(e))
  }

  openOverlay = () => {
    document.body.style.overflow = 'hidden'
    this.searchOverlay.classList.toggle('on')
    this.show = true

    setTimeout(() => this.searchField.focus(), 301);
  }
  
  closeOverlay = () => {
    document.body.style.overflow = 'initial'
    this.searchOverlay.classList.remove('on')
    
    this.searchField.value = ""
    this.show = false
  }

  keyPressDispatcher = (e) => {
    if( e.keyCode == 83 &&
        document.activeElement.tagName != "INPUT" && 
        document.activeElement.tagName != "TEXTAREA"
      ) this.openOverlay()

    if(e.keyCode == 27 && this.show) this.closeOverlay()
  }
}
