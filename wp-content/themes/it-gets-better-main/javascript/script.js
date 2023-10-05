/**
 * The JavaScript code you place here will be processed by esbuild, and the
 * output file will be created at `../theme/js/script.min.js` and enqueued in
 * `../theme/functions.php`.
 *
 * For esbuild documentation, please see:
 * https://esbuild.github.io/
 */

jQuery(document).ready(function($){

  //check OS preference for Dark mode
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    $(".high-contrast").removeClass('inactive');
    $(".high-contrast").addClass('active');
    $(".footer-logo-white").removeClass('hidden');
    $(".footer-logo-white").addClass('block');
    $(".custom-logo-link").addClass('hidden');
    $('.high-contrast a').text("Light Mode");
  }
  else {
    document.documentElement.classList.remove('dark');
    $(".high-contrast").removeClass('active');
    $(".high-contrast").addClass('inactive');
    $(".footer-logo-white").addClass('hidden');
    $(".footer-logo-white").removeClass('block');
    $(".custom-logo-link").removeClass('hidden');
    $('.high-contrast a').text("Dark Mode");
  }

  function setDarkTheme() {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }

  function setLightTheme() {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }

    //show dark mode..
  $(".high-contrast").click(function(event){
    event.preventDefault();

    if($(this).hasClass('inactive')){
      $(this).removeClass('inactive');
      $(this).addClass('active');
      $(".footer-logo-white").removeClass('hidden');
      $(".footer-logo-white").addClass('block');
      $(".custom-logo-link").addClass('hidden');
      //set dark mode..
      $(this).find('a').text('Light Mode');
      setDarkTheme();
    }
    else {
      $(this).removeClass('active');
      $(this).addClass('inactive');
      $(".footer-logo-white").addClass('hidden');
      $(".footer-logo-white").removeClass('block');
      $(".custom-logo-link").removeClass('hidden');
      $(this).find('a').text('Dark Mode');
      setLightTheme();
    }
  });

  //show safe-exit hidden content
  $('#safeExit').hover(function(event){
    event.preventDefault();
    $('#safeExitContent').removeClass('hidden');
  });

  $('#safeExit a').on('click', function(e) {
    var href = $(this).attr('href');

    e.preventDefault();
    document.body.innerHTML = '';
    window.open(href, '_newtab');
    window.location.replace(href);
  })

  $('#safeExitContent').on( "mouseleave",function(event){
    event.preventDefault();
    $('#safeExitContent').addClass('hidden');
  });

  $("#searchToggle").click(function(event){
    event.preventDefault();

    var $this = $(this);
    var $parent = $this.closest('div');
    var $form = $parent.find('form');
    var $search = $form.find('input[type="search"]');
    var $input = $form.find('input[type="text"]');

    $this.hide();
    $form.show();
    $search.length > 0 ? $search.focus() : $input.$focus();
  });

  $('#siteNavigation .search-form input[type="search"], #siteNavigation .search-form input[type="text"]').on('blur', function() {
    var $this = $(this);
    var $parent = $this.closest('div');
    var $form = $parent.find('form');
    var $toggle = $parent.find('.search-toggle');

    $form.hide();
    $toggle.show();
  });

  //search close button click
  $("#searchClose").click(function(event){
    event.preventDefault();
    $('.mobile-search').addClass('hidden');
    $('.mobile-search').removeClass('inline-flex');
    $('#searchToggle').removeClass('hidden');
    $('.custom-logo').removeClass('hidden');
    $('.logo-custom-dark').removeClass('dark:hidden');
    $('.logo-custom-dark').addClass('dark:inline-flex');
    $('.bg-menu-light').removeClass('hidden');
    $('.mobile-search').css('top', '0px');
  });

  //main nav button click
  $(".mega-menu-toggle").click(function(event){
    event.preventDefault();
    $('#megaNav').removeClass('hidden');
    $('#megaNav').addClass('fixed');
    $('body').css('overflow-y','hidden');
  });

  $('#closeNav').click(function(event){
    event.preventDefault();
    $("#megaNav").removeClass('fixed');
    $("#megaNav").addClass('hidden');
    $('body').css('overflow-y','auto');
  });

  $(window).on('scroll',function(){
    var $topNav = $('#topNav');
    var $siteNav = $('#siteNavigation');
    var $body = $('body');
    var scrollThreshold = $topNav.outerHeight();
    var windowScrollTop = window.scrollY;

    if(windowScrollTop >= scrollThreshold) {
      if (!$siteNav.hasClass('fixed-top')) {
        $siteNav.addClass('fixed-top');
        $body.addClass('nav-fixed-top');
      }
    }
    else {
      $siteNav.removeClass('fixed-top');
      $body.removeClass('nav-fixed-top');
    }
  });

  $('.megaNavTop-menu a, .megaNavMiddle-menu a, .megaNavParallelogram-menu a, .megaNavParallelogram-menu .menu-item span').mouseenter(function() {
    var $parent = $(this).closest('.menu-item')
    var $anchor = $parent.find('> a');
    var $submenu = $parent.find('.sub-menu-wrapper');
    var $wrapper = $anchor.closest('ul:not(.sub-menu)');

    var isTopMenu = $wrapper.hasClass('megaNavTop-menu');
    var isMiddleMenu = $wrapper.hasClass('megaNavMiddle-menu');
    var isBottomMenu = $wrapper.hasClass('megaNavParallelogram-menu');

    if($anchor.data('overlay-image') !== "") {
      var imageTopPosition = 0;
      var imageLeftPosition = 0;
      var imageHeight = $anchor.data('overlay-height');
      var imageWidth = $anchor.data('overlay-width');

      if(isTopMenu && $submenu.length > 0 && !$parent.hasClass('menu-item-sub')) {
        imageTopPosition = $anchor.offset().top + $anchor.height() + 50;
        imageLeftPosition = $wrapper.offset().left +  imageWidth;
      }
      else if(isTopMenu && $submenu.length <= 0 && !$parent.hasClass('menu-item-sub')) {
        imageTopPosition = $wrapper.offset().top;
        imageLeftPosition = $wrapper.width() - imageWidth;
      }
      else if (isTopMenu && $parent.hasClass('menu-item-sub')) {
        imageTopPosition = $anchor.offset().top + $anchor.height();;
        imageLeftPosition = $anchor.offset().left - 120;
      }
      else if(isBottomMenu) {
        imageTopPosition = $anchor.offset().top - imageHeight  - 50;
        imageLeftPosition = $wrapper.offset().left +  imageWidth;
      }
      else if(isMiddleMenu && $submenu.length > 0 && !$parent.hasClass('menu-item-sub')) {
        imageTopPosition = $anchor.offset().top - imageHeight  - 50;
        imageLeftPosition = (($wrapper.width() / 2) - (imageWidth / 2));
      }
      else if(isMiddleMenu && $submenu.length <= 0 && !$parent.hasClass('menu-item-sub')) {
        imageTopPosition = $wrapper.offset().top;
        imageLeftPosition = $wrapper.width() - imageWidth;
      }
      else if (isMiddleMenu && $parent.hasClass('menu-item-sub')) {
        console.log('calling this')
        imageTopPosition = $anchor.offset().top - imageHeight - 40;
        console.log($wrapper.width(), imageWidth);
        imageLeftPosition = (($wrapper.width() / 2) - (imageWidth / 2));
      }

      $('#megaNav').css({
        backgroundImage: `url(${$anchor.data('overlay-image')})`,
        backgroundPosition: ` ${imageLeftPosition}px ${imageTopPosition}px`,
        backgroundSize: `${imageWidth}px ${imageHeight}px`
      });
    }
  });

  $('.menu-item-has-children a').mouseenter(function() {
    if($(window).width() >= 1440) {
      $(this).parent().find('.sub-menu-wrapper').fadeIn().css('display','flex');
    }
  });

  $('.menu-item-has-children.menu-item').mouseleave(function() {
    if($(window).width() >= 1440) {
      $(this).parent().find('.sub-menu-wrapper').fadeOut();
    }
  });

  $('.megaNavParallelogram-menu .menu-item, .megaNavParallelogram-menu .menu-item a, .megaNavParallelogram-menu .menu-item span').mouseenter(function(e) {
    $(this).parents('.menu-item').find('a').addClass('hovered');
  });

  $('.megaNavParallelogram-menu .menu-item, .megaNavParallelogram-menu .menu-item a, .megaNavParallelogram-menu .menu-item span').click(function(e) {
    var href =  $(this).parents('.menu-item').find('a').attr('href');
    e.preventDefault();
    e.stopPropagation();

    window.location = href;
  });

  $('.megaNavParallelogram-menu .menu-item, .megaNavParallelogram-menu .menu-item a, .megaNavParallelogram-menu .menu-item span').mouseleave(function() {
    $(this).parents('.menu-item').find('a').removeClass('hovered');
  });

  $('.curated-playlist-slider').slick({
    infinite: false,
    arrows:true,
    slidesToScroll:1,
    slidesToShow:4,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: { slidesToShow: 3 }
    	},
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2.5 }
    	},
			{
        breakpoint: 768,
        settings: { slidesToShow: 1.5 }
    	},
		]
  });

  $('.featured-content-slider').slick({
    infinite: false,
    arrows:true,
    slidesToScroll:1,
    slidesToShow: 4,
    adaptiveHeight: false,
    centerMode:false,
    responsive: [
      {
        breakpoint: 1440,
        settings: { slidesToShow: 3 }
    	},
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
    	},
			{
        breakpoint: 768,
        settings: { slidesToShow: 1 }
    	},
		]
  });

  $('.theme-featured-program-slider').slick({
    infinite: true,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: $('.featured-program-slick-arrow.slick-prev'),
    nextArrow: $('.featured-program-slick-arrow.slick-next'),
    responsive: [
			{
        breakpoint: 1440,
        settings: {
          adaptiveHeight: true,
        }
    	},
		]
  });

  $('.glossary-slider').slick({
    infinite: false,
    arrows:true,
    slidesToScroll:1,
    slidesToShow:2.5,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: { slidesToShow: 2 }
    	},
      {
        breakpoint: 1366,
        settings: { slidesToShow: 1.5 }
    	},
			{
        breakpoint: 768,
        settings: { slidesToShow: 1  }
    	},
		]
  });

  function redirectToQuery(query) {
    window.location = window.location.origin + window.location.pathname + (query.length > 0 ? `?${query}` : '');
  }

  function resizeSlickButton() {
    $('.featured-content-slider').each(function() {
      var $thumbnailRef = $(this).find('.thumbnail-and-indicator');
      $(this).find('.slick-arrow').css({ height: $thumbnailRef.innerHeight()});
    })
  }

  function filterTermCheckboxes($parent, values) {
    var $termCheckboxes = $parent.find('input[name="glossaryTerm"]');
    if(values.length > 0) {
      $termCheckboxes.closest('li').hide();
      $termCheckboxes.each(function() {
        var $checkbox = $(this);
        var showIn = $checkbox.data('show');
        var showInList = showIn.toString().split(',');

        if(showInList.some(item => values.includes(item))) {
          $checkbox.closest('li').show();
        }
      })
    }
    else {
      $termCheckboxes.closest('li').show();
    }
  }

  function submitQuery(termCategories, glossaryTerms, postTypes, sort) {
    console.log(termCategories, glossaryTerms, postTypes, sort);
    const urlParams = new URLSearchParams(window.location.search);
    var defaultPostTypes = ["blog", "video"];
    var defaultTermCategories = ['gender-expression', 'gender-identity', 'sexual-orientation'];
    var defaultSort = 'title';
    var queryString = "";

    queryString += termCategories.length > 0 && !defaultTermCategories.every((p) => termCategories.includes(p)) ? `termCategory=${encodeURIComponent(JSON.stringify(termCategories))}` : '';
    queryString += glossaryTerms.length > 0 ? `&glossaryTerm=${encodeURIComponent(JSON.stringify([...new Set(glossaryTerms)]))}` : '';
    queryString += postTypes.length > 0 && !defaultPostTypes.every((p) => postTypes.includes(p)) ? `&postType=${encodeURIComponent(JSON.stringify(postTypes))}` :  `&postType=${encodeURIComponent(JSON.stringify(defaultPostTypes))}`;
    queryString += sort !== defaultSort ? `&sort=${sort}`: '';
    queryString += urlParams.get('term') !== null ? `&term=${urlParams.get('term')}` : '';

    redirectToQuery(queryString);
  }

  $('.mobile-filter input[name="termCategory"]').on('change', function() {
    var values = [];

    $('.mobile-filter input[name="termCategory"]:checked').each(function() {
      values.push($(this).val());
    });

    filterTermCheckboxes($('.mobile-filter'), values);
  })

  $('.main-filters input[name="termCategory"]').on('change', function() {
    var values = [];

    $('.main-filters input[name="termCategory"]:checked').each(function() {
      values.push($(this).val());
    });

    filterTermCheckboxes($('.desktop-filter'), values);
  })

  $('.submit-query.desktop-submit-query').on('click', function() {
    var termCategories = [];
    var postTypes = [];
    var glossaryTerms = [];
    var sort = $('.main-filters select[name="sortResults"]').val();

    $('.desktop-filter input[name="glossaryTerm"]:checked').each(function() {
      glossaryTerms.push($(this).val());
    });
    $('.main-filters input[name="postType"]:checked').each(function() {
      postTypes.push($(this).val());
    });
    $('.main-filters input[name="termCategory"]:checked').each(function() {
      termCategories.push($(this).val());
    });

    submitQuery(termCategories, glossaryTerms, postTypes, sort)
  });

  $('.submit-query.mobile-submit-query').on('click', function() {
    var termCategories = [];
    var postTypes = [];
    var glossaryTerms = [];
    var sort = $('.mobile-filter  select[name="sortResults"]').val();

    $('.mobile-filter  input[name="glossaryTerm"]:checked').each(function() {
      glossaryTerms.push($(this).val());
    });
    $('.mobile-filter  input[name="postType"]:checked').each(function() {
      postTypes.push($(this).val());
    });
    $('.mobile-filter  input[name="termCategory"]:checked').each(function() {
      termCategories.push($(this).val());
    });

    submitQuery(termCategories, glossaryTerms, postTypes, sort);
  });

  $('.reset-query').on('click', function(e) {
    e.preventDefault();
    var path = window.location.pathname;
    var newPath = path.includes('page') ? window.location.origin + path.substring(0, path.indexOf('page')) : window.location.origin + path;

    window.location = newPath;
  });

  $('.sort-button').on('click', function(e) {
    var sort = $('.main-filters select[name="sortResults"]').val();
    var params = new URLSearchParams(window.location.search)

    params.set('sort', sort);

    redirectToQuery(params.toString());
  });

  function heroSectionMods() {
    var $hero = $(".entry-content.prose > .wp-block-media-text.has-media-on-the-right:first-child, .page.type-page  > .wp-block-media-text.has-media-on-the-right:first-child");
    $hero.addClass('hero-section').removeClass('featured-playlist');
    $hero.find("h1, h2, p").removeAttr("style");
    $hero.find(".has-medium-font-size").removeClass("has-medium-font-size");
  }

  $(document).ready(function() {
    $('.search-form').attr('autocomplete','off').find('.search-field').attr('autocomplete','off');
    resizeSlickButton();
    heroSectionMods();
  });

  $(window).on('resize', function() {
    resizeSlickButton();
  });

  $(".megaNavTop-menu > li > a").on("click", function(e) {
    var $this = $(this);
    var $parent = $this.closest('li');
    var $submenu = $parent.find('.sub-menu-wrapper');
    var $backButton = $parent.closest('ul').find('.back-button-wrapper');

    if($(window).width() < 1440 && $submenu.length > 0 && !$this.hasClass('focused')) {
      e.preventDefault();
      $('.megaNavMiddle-menu').hide();
      $('.megaNavParallelogram-menu').hide();
      $('.megaNavTop-menu > li').hide();
      $parent.show();
      $this.addClass('focused')
      $submenu.show();
      $backButton.show();
    }
  });

  $('.megaNavTop-menu .back-button').on('click', function(e) {
    e.preventDefault();

    $('.megaNavMiddle-menu').show();
    $('.megaNavParallelogram-menu').show();
    $('.megaNavTop-menu > li').show();
    $('.megaNavTop-menu a.focused').removeClass('focused');
    $('.megaNavTop-menu .sub-menu-wrapper').hide();
    $(this).closest('.back-button-wrapper').hide();
  })

  $(".megaNavMiddle-menu > li > a").on("click", function(e) {
    var $this = $(this);
    var $parent = $this.closest('li');
    var $submenu = $parent.find('.sub-menu-wrapper');
    var $wrapper = $parent.closest('ul');
    var $backButton = $wrapper.find('.back-button-wrapper');

    if($(window).width() < 1440 && $submenu.length > 0 && !$this.hasClass('focused')) {
      e.preventDefault();
      $('.megaNavTop-menu').hide();
      $('.megaNavParallelogram-menu').hide();
      $('.megaNavMiddle-menu > li').hide();
      $parent.show();
      $wrapper.addClass('focused');
      $this.addClass('focused');
      $submenu.show();
      $backButton.show();
    }
  });

  $('.megaNavMiddle-menu .back-button').on('click', function(e) {
    e.preventDefault();

    $('.megaNavTop-menu').show();
    $('.megaNavParallelogram-menu').show();
    $('.megaNavMiddle-menu > li').show();
    $('.megaNavMiddle-menu a.focused').removeClass('focused');
    $('.megaNavMiddle-menu .sub-menu-wrapper').hide();
    $(this).closest('.back-button-wrapper').hide();
    $(this).closest('ul').removeClass('focused');
  });

  $('.share-button').click(function(e) {
    e.preventDefault();
    window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    return false;
  });

  $('#openMobileFilter').on('click', function(e) {
    e.preventDefault();
    $('.mobile-filter').addClass('show');
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
  })

  $('.close-filter').on('click', function(e) {
    e.preventDefault();
    $('.mobile-filter').removeClass('show');
    $('html, body').removeAttr('style');
  })

  $('a[data-popover="true"]').webuiPopover({
    content: function(){
      var $this = $(this);
      var content = $this.attr('data-contentElement');
      var html = $(content).html();

      return html;
    }
  });
});
