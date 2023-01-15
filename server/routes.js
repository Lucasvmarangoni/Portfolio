import http from "http";
import url from "url";


http
  .createServer((req, res) => {
    let path = url.parse(req.url).pathname;

    if (path == "" || path == "/") path = "../src/pages/Home.tsx";
    else if (path == "/portfolio") path = "../src/pages/Portfolio.tsx";
    else path = "../src/pages/ErrorNotFound.tsx";
    
    res.end()
})
  .listen(3000);
