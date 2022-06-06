const { post } = require("request");
var request = require("request"),
  cheerio = require("cheerio");

var url = "https://klas.kw.ac.kr/std/cps/inqire/AtnlcScreStdPage.do";

request(url, function (err, res, html) {
  if (!err) {
    var $ = cheerio.load(html);

    // 블로그 title 정보 가져오기
    $(".entry-title > a").each(function () {
      var post = {
        "1학년 1학기": "",
        "1학년 2학기": "",
        category: [],
      };
      var data = $(this);
    });

    // 블로그 요약 정보 가져오기
    $(
      ".synthesis-score-table > tbody > tr:nth-child(1) > td:nth-child(5)"
    ).each(function (i) {
      // do something
    });
    // 블로그 카테고리 가져오기
    $(
      ".synthesis-score-table > tbody > tr:nth-child(2) > td:nth-child(5)"
    ).each(function (i) {
      // do something
    });
  }
});

document.write(post);
