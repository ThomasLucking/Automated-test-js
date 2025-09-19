/**
 * In javascript we can use the fetch function to make HTTP calls to the network
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * In the next exercise, when the user clicks ont the button with id "click-to-fetch"
 * you have to call this url : https://api.github.com/octocat
 * Then, you have to display the content returned by the api on the "pre" tag with id "display-here"
 */
export function fetchDataOnClick() {
  // Write your code here
  const button = document.querySelector('#click-to-fetch')
  const display = document.querySelector('#display-here')
  button.addEventListener('click', () => {
    fetch('https://api.github.com/octocat') // makes an HTTPS request to the server
      .then((response) => response.text()) // transforms it into text
      .then((data) => {
        // then using a callback to display the fetched data inside the <pre> element
        display.textContent = data
      })
  })
}
