$(document).ready(function () {
  jQuery.validator.addMethod("phoneno", function (t, e) {
    return t = t.replace(/\s+/g, ""), this.optional(e) || t.length > 9 && t.match(/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/)
  }, "Please specify a valid phone number"), $(".form-next").click(function (t) {
    var e = $("#sth-registration");
    if (e.validate({
        highlight: function (t) {
          $(t).parents(".text-field").addClass("error")
        },
        unhighlight: function (t) {
          $(t).parents(".text-field").removeClass("error")
        },
        errorPlacement: function (t, e) {
          $(e).parents(".text-field").append(t)
        },
        errorElement: "em",
        onkeyup: !1,
        rules: {
          app_source: {
            required: !0
          },
          team_name: {
            required: !0
          },
          company_name: {
            required: !0
          },
          idea_desc: {
            required: !0
          },
          participant_phone_1: {
            phoneno: !0,
            required: !0
          },
          participant_phone_2: {
            phoneno: !0,
            required: !0
          },
          participant_phone_3: {
            phoneno: !0,
            required: !0
          },
          participant_phone_4: {
            phoneno: !0,
            required: !0
          }
        },
        messages: {
          app_source: {
            required: "Please select a track"
          },
          team_name: {
            required: "Please enter a team name"
          },
          company_name: {
            required: "Please enter a company/college name"
          },
          idea_desc: {
            required: "Please enter a description"
          },
          participant_phone_1: {
            required: "Please enter a phone number"
          },
          participant_phone_2: {
            required: "Please enter a phone number"
          },
          participant_phone_3: {
            required: "Please enter a phone number"
          },
          participant_phone_4: {
            required: "Please enter a phone number"
          }
        }
      }), e.valid() === !0)
      if ($(".form-1").is(":visible")) {
        $(".form-1,.form-1-btn").hide();
        var i = $(".path-status");
        $("html, body").animate({
          scrollTop: ($(i).offset() || {
            top: 0 / 0
          }).top - 90
        }, 1e3), $(".form-2,.form-2-btn").show(), $(".path-status li[data-path='form-2']").addClass("active")
      } else if ($(".form-2").is(":visible")) {
      var i = $(".registration-container");
      $("html, body").animate({
        scrollTop: ($(i).offset() || {
          top: 0 / 0
        }).top - 90
      }, 500), $("#sth-registration").slideUp(), $(".path-status").hide(), setTimeout(function () {
        $(".thankyou-msg").fadeIn()
      }, 600)
    }
    t.preventDefault()
  }), $("#sth-registration").on("submit", function (t) {
    t.preventDefault();
    for (var e = ga.getAll(), i = 0; i < e.length; i++)
      if ("UA-48137190-1" == e[i].get("trackingId")) {
        var n = e[i].get("name");
        ga(n + ".set", {
          page: "/thank-you",
          title: "Save the Hacker - Thank You for registering"
        }), ga(n + ".send", "pageview", {
          page: "/thank-you?date=May/5-7/2017",
          title: "Save the Hacker - Thank You for registering"
        });
        break
      } return !1
  }), $("#sth-registration #sth-formSubmit").on("click", function () {
    $("#sth-registration").valid() && $("#sth-registration").submit()
  })
});