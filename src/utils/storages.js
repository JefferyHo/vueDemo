
// 获取cookie
export function getCookie (name) {
    var arr
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    arr = document.cookie.match(reg)
    if (arr) { return (arr[2]) } else { return null }
  }
  
  // 设置cookie
  export function setCookie (cname, value, expiredays, path = '/') {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    // 存贮对象时
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    document.cookie = cname + '=' + encodeURI(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString()) + ';path=' + path
  }
  
  // 删除cookie
  export function delCookie (name) {
    setCookie(name, '', -1)
  }
  // 存储localStorage
  export const setLocal = (name, content) => {
    if (!name) return
    // sessionStorage只能存字符串，如果是对象需要先序列化
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  }
  
  /**
   * 获取localStorage
   */
  export const getLocal = name => {
    if (!name) return
    return window.localStorage.getItem(name)
  }
  
  /* *
   * 删除localStorage
   */
  export const removeLocal = name => {
    if (!name) return
    window.localStorage.removeItem(name)
  }
  