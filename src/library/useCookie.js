// 1일 지속 쿠키 생성
export const createCookie = () => {
  const date = new Date()
  date.setDate(date.getDate() + 1)

  let cookie = ''
  cookie += 'CookieName=Timeout;'
  cookie += `expires=${date.toUTCString()}`

  document.cookie = cookie
}

// 현재 있는 쿠키 가져오기
// 없는 경우 -1리턴, 있는 경우 0보다 큰 수 리턴
export const getCookie = () => {
  const cookies = document.cookie.split(';')
  let cookie
  for (let i in cookies) {
    if ((cookie = cookies[i].search('Timeout') > 0)) {
      cookie = cookies[i].search('Timeout')
      break
    }
  }
  return cookie
}
