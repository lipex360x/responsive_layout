export default class Menu {
  constructor() {
    this.show = true
    this.menuSection = document.querySelector('.menu-section')
    this.menuToggle = this.menuSection.querySelector('.menu-toggle')

    this.execute()
  }

  execute() {
    this.menuToggle.addEventListener('click', () => {
      document.body.style.overflow = this.show ? 'hidden' : 'initial'
      this.menuSection.classList.toggle('on', this.show)
      this.show = !this.show
    })
  }
}
