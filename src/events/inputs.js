/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
  // Write your code here
  const input = document.querySelector('#write-some-text')

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      alert(input.value)
    }
  })
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
  const input2 = document.querySelector('#list-input')
  const listcount = document.querySelector('list')
  // Write your code here
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const listItem = document.createElement('li')
      listItem.textContent += input2.value
      list.append(listItem)
    }
  })
}

/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
  // Write your code here
}
