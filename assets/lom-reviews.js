/* Lom Thai Review System - Filter & Scroll Animations */
(function() {
  'use strict';

  /* Review filter by tag */
  var filters = document.querySelectorAll('.lt-reviews__filter');
  var cards = document.querySelectorAll('.lt-review-card');

  filters.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filters.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var tag = btn.getAttribute('data-filter');
      cards.forEach(function(card) {
        if (tag === 'all' || card.getAttribute('data-tag') === tag) {
          card.classList.remove('lt-hidden');
        } else {
          card.classList.add('lt-hidden');
        }
      });
    });
  });

  /* Scroll-triggered fade-in for all .lt-fade-in elements */
  var fadeEls = document.querySelectorAll('.lt-fade-in');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('lt-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(function(el) { obs.observe(el); });
  }

  /* Sticky ATC for mobile */
  var stickyBar = document.querySelector('.lt-sticky-atc');
  var buyBtn = document.querySelector('.product-form__submit, .shopify-payment-button, .lt-premium-atc');
  if (stickyBar && buyBtn) {
    var stickyObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          stickyBar.classList.remove('lt-sticky-visible');
        } else {
          stickyBar.classList.add('lt-sticky-visible');
        }
      });
    }, { threshold: 0 });
    stickyObs.observe(buyBtn);

    /* Click sticky ATC → scroll to buy box or submit form */
    var stickyBtn = stickyBar.querySelector('.lt-sticky-atc__btn');
    if (stickyBtn) {
      stickyBtn.addEventListener('click', function() {
        var form = document.querySelector('product-form form, form[action*="/cart/add"]');
        if (form) {
          form.requestSubmit ? form.requestSubmit() : form.submit();
        } else {
          buyBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  }
})();
