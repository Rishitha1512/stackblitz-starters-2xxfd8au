document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  let count = getCookie('count');
  if (count === null) {
    count = 0;
  } else {
    count = parseInt(count);
  }
  count++;
  setCookie('count', count, 7);

  const countDisplay = document.createElement('div');
  countDisplay.textContent = `This page has been loaded ${count} times.`;
  document.body.appendChild(countDisplay);
});
