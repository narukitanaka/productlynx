///////////////////////////////////////////
//ハンバーガーメニュー
//////////////////////////////////////////
$('.hambager').on('click', function () {
  navOpen();
});
let navFlg = false;
function navOpen() {
  if (!navFlg) {
    $('.hamberger-wrap').addClass('is-ham-open');
    $('.mega-menu').addClass('is-megamenu-open');
    $('header').addClass('is-megamenu-header');
    $('.ham-txt').text('CLOSE');
    navFlg = true;
  } else {
    $('.hamberger-wrap').removeClass('is-ham-open');
    $('.mega-menu').removeClass('is-megamenu-open');
    $('header').removeClass('is-megamenu-header');
    $('.ham-txt').text('MENU');
    navFlg = false;
  }
}

// ページ内リンクをクリックしたときにメニューを閉じる
$('.mega-menu a[href^="#"]').on('click', function () {
  if (navFlg) {
    navOpen(); // メニューが開いている場合は閉じる
  }
});


////////////////////////////////////////////////////////////////////////////////////////
// ヘッダーが画面１番上を離れたら.activeを付与
///////////////////////////////////////////////////////////////////////////////////////
gsap.to(".top-header", {
  scrollTrigger: {
    start: "top+=1 top", // ビューポートのトップから1pxスクロールした時点でトリガー
    end: "bottom top", // ドキュメントの最下部まで
    toggleClass: {targets: ".top-header", className: "active"}, // headerタグに対してactiveクラスを切り替え
  }
});


////////////////////////////////////////////////////////////////////////////////////////
// TOP -事業内容
///////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('scroll', function() {
    const scrollSection = document.querySelector('.services');
    const imageContent = document.querySelector('.image-content');
    const sectionTop = scrollSection.offsetTop;
    const sectionHeight = scrollSection.offsetHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;

    const maxScroll = sectionTop + sectionHeight - windowHeight;
    
    // スクロール前に画像が初期位置に配置される
    if (scrollY < sectionTop) {
        imageContent.style.position = 'absolute';
        imageContent.style.top = '0';
        imageContent.style.right = '-5%';
    }

    // スクロール時に画像が固定される
    else if (scrollY >= sectionTop && scrollY < maxScroll) {
        imageContent.style.position = 'fixed';
        imageContent.style.top = '0';
        imageContent.style.right = '-5%';
    }

    // スクロール後、セクションの下端に到達した時に一緒に上にスクロール
    else if (scrollY >= maxScroll) {
        imageContent.style.position = 'absolute';
        imageContent.style.top = `${sectionHeight - imageContent.offsetHeight}px`;
        imageContent.style.right = '-5%';
    }
});


///////////////////////////////////////////
//スクロールフェードイン
///////////////////////////////////////////
const fadeIn = document.querySelectorAll(".fadeIn");
const options = {
  rootMargin: '0px',
  threshold: 0.6
};
const observer = new IntersectionObserver(showElement, options);
fadeIn.forEach((fadeIn) => {
  observer.observe(fadeIn);
});
function showElement(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-active");
    }
  });
}


////////////////////////////////////////////////////////////////////////////////////////
// CSSアニメーション　トリガー
///////////////////////////////////////////////////////////////////////////////////////
function BgFadeAnime(){
  // 背景色が伸びて出現（左から右）
$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
  }
});	
 // 文字列を囲う子要素
$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
  }
});		
}
$(window).scroll(function (){
  BgFadeAnime();
});


////////////////////////////////////////////////////////////////////////////////////////
// 1文字ずつtxtで囲む
///////////////////////////////////////////////////////////////////////////////////////
(function () {
  const jsText = document.querySelectorAll('.anime-ttl01');
  jsText.forEach(target => {
    let newText = '';
    const text = target.innerHTML;  
    const result = text.split('');
    for (let i = 0; i < result.length; i++) {
      // <br>タグを検出した場合
      if (result[i] === '<' && result[i + 1] === 'b' && result[i + 2] === 'r' && result[i + 3] === '>') {
          newText += '<br>';
          i += 3;  // <br>の残りの部分をスキップする
      } else {
          newText += '<span>' + result[i] + '</span>';
      }
    }
    target.innerHTML = newText;
  });
})();

////////////////////////////////////////////////////////////////////////////////////////
// GSAPアニメーション
///////////////////////////////////////////////////////////////////////////////////////
//１文字ずつ出現
document.querySelectorAll('.anime-ttl01').forEach(function(elem) {
  gsap.to(elem.querySelectorAll('span'), {
    y: 0,
    stagger: 0.05,
    duration: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,
      start: 'top 90%'
    }
  });
});

//パララックス
const Parallax = document.querySelectorAll('.anime-para');
Parallax.forEach((Parallax) => {
  gsap.fromTo(Parallax.querySelector('img'), {
    yPercent: -0, 
    scale: 1.3,
  }, {
    yPercent: -15, 
    ease: "none",
    scrollTrigger: {
      trigger: Parallax,
      start: "top 70%",
      end: "bottom top",
      scrub: 1,
    }
  }); 
});