const $form = $('#feedback_form')
const $successMsg = $('.b_successSending')
const $date = $('.b_date')
const $currentYear = new Date().getFullYear()
const $header = $('header')
const $navbarMenu = $('#navbarMenu')

$(function () {
  $('.b_header .nav-link, .b_logo').on('click', function (e) {
    e.preventDefault()
    const $href = $(this).attr('href')
    $('html, body').animate(
      {
        scrollTop: $($href).offset().top - 160,
      },
      0
    )

    if ($(window).width() < 992) {
      $navbarMenu.collapse('hide')
      $('html, body').animate(
        {
          scrollTop: $($href).offset().top - 260,
        },
        0
      )
    }
    if ($(window).width() < 769) {
      $navbarMenu.collapse('hide')
      $('html, body').animate(
        {
          scrollTop: $($href).offset().top - 280,
        },
        0
      )
    }
    if ($(window).width() < 576) {
      $navbarMenu.collapse('hide')
      $('html, body').animate(
        {
          scrollTop: $($href).offset().top - 260,
        },
        0
      )
    }
  })

  $(window).on('load', function () {
    $(window)
      .scroll(function () {
        let windowBottom = $(this).scrollTop() + $(this).innerHeight()
        $('.fade').each(function () {
          let objectBottom = $(this).offset().top + $(this).outerHeight()
          if (objectBottom < windowBottom) {
            if ($(this).css('opacity') == 0) {
              $(this).fadeTo(100, 1)
            }
          }
        })
      })
      .scroll()
  })

  $form.validate({
    rules: {
      name: {
        required: true,
        minlength: 1,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: 'Это поле необходимо заполнить',
      },
      email: {
        email: 'Некорректно введен email',
        required: 'Это поле необходимо заполнить',
      },
      message: {
        required: 'Это поле необходимо заполнить',
      },
    },
    submitHandler: function () {
      $successMsg.show()
      $form.trigger('reset')
      setTimeout(() => {
        $successMsg.hide()
      }, 5000)

      // form.submit()
    },
  })

  $date.text($currentYear)

  $(document).click(function (e) {
    if (!$header.is(e.target) && $header.has(e.target).length === 0) {
      $navbarMenu.collapse('hide')
    }
  })
})
