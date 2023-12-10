/**
 * 加载markdown文件渲染成html
 * @param {string} filepath 
 * @returns html
 */
function showMarkdown(filepath) {
  var xmlhttp, html;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHttp');
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        }
      });

      html = marked.marked(xmlhttp.responseText);
    }
  }

  // 向服务器发送请求
  xmlhttp.open('GET', filepath, false);
  xmlhttp.send();

  return html;
};

/**
 * 获取文件夹下markdown文件名
 * 由于github下请求目录会失效，无法使用
 * @param {string} path 文件目录路径
 * @returns 
 */
function loadFilenames(path) {
  var filenames = [];
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHttp');
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      $(xmlhttp.responseText).find("a:contains(.md)").each(function () {
        let tmp = $(this).attr("href");
        let idx = tmp.lastIndexOf('/');
        tmp = tmp.slice(idx + 1, tmp.length - 3);
        filenames.push(decodeURIComponent(tmp));
      });

      filenames.sort((x, y) => {
        return parseInt(x) - parseInt(y);
      });
    }
  }

  // 向服务器发送请求
  xmlhttp.open('GET', path, false);
  xmlhttp.send();

  return filenames;
};

export {
  showMarkdown, loadFilenames
}