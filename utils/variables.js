const TIME_FOR_SWAP = 1000
const TIME_FOR_CLICK = 2000
const INDEX_OF_TAB = 2
const BG_IMAGE = 'url("https://amigo.eucorail.com/maintenance/bfres/resources-img/svg/processOpenWhite.svg")'

let checked_buttons = {}

let timeout = null
let interval = null

let loadButtonState = true
let startButtonState = false
let stopButtonState = false

let filter = null
