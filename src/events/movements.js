/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {
  // Write your code here
  const paragraph = document.querySelector('#mouse-coordinates')

  document.addEventListener('mousemove', (event) => {
    // clientX, pageX, screenX
    paragraph.textContent = `x: ${event.clientX}, y: ${event.clientY}`
    paragraph.append(paragraph)
  })
}

const randomRGB = () => {
  const o = Math.round
  const r = Math.random
  const s = 255
  return `rgba(${o(r() * s)},${o(r() * s)},${o(r() * s)})`
}
const enteringColor = ''

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
export function hoverFocusAndBlur() {
  // Write your code here
  const input = document.querySelector('#focus-me')
  const label = document.querySelector('label[for="focus-me"]')
  const origincolor = getComputedStyle(input).borderColor
  const usedColors = new Set([origincolor])
  const originalLabelText = label.textContent

  input.addEventListener('mouseover', () => {
    label.textContent = 'Yes, you hover me !'
  })
  input.addEventListener('mouseleave', () => {
    label.textContent = originalLabelText
  })
  input.addEventListener('focus', () => {
    let newColor
    do {
      newColor = randomRGB()
    } while (usedColors.has(newColor))
    usedColors.add(newColor)
    input.style.borderColor = newColor
  })
  input.addEventListener('blur', () => {
    input.style.borderColor = origincolor
  })
}

export function changesOnInputEvents() {
  const input = document.querySelector('#focus-me')
  const defaultColor = 'rgb(100, 149, 237)'
  let currentDefaultColor = defaultColor 


  input.style.borderColor = currentDefaultColor

  const labels = document.querySelectorAll('label')
  labels.forEach((label) => {
    label.style.color = currentDefaultColor
  })

  input.addEventListener('input', () => {
    const newDefaultColor = randomRGB()
    currentDefaultColor = newDefaultColor 

    labels.forEach((label) => {
      label.style.color = newDefaultColor
    })
  })

  input.addEventListener('blur', () => {
    input.style.borderColor = currentDefaultColor
  })
}

