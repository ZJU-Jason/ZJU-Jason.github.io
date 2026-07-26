/* =============================================
   个人简历网站 - JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {

  /* ---- 导航栏滚动效果 ---- */
  const header = document.getElementById('site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });

  /* ---- 移动端菜单切换 ---- */
  const toggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggle) {
    toggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      const icon = toggle.querySelector('i');
      if (navLinks.classList.contains('open')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });
  }

  /* ---- 点击导航链接后关闭菜单 ---- */
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
      const icon = toggle.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });

  /* ---- 滚动渐入动画 (Intersection Observer) ---- */
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // 降级：直接显示所有元素
    fadeElements.forEach(function(el) {
      el.classList.add('visible');
    });
  }

  /* ---- 技能栏动画 - 滚动到视口时触发 ---- */
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  if ('IntersectionObserver' in window) {
    const skillObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.style.width;
          bar.style.width = '0%';
          setTimeout(function() {
            bar.style.width = width;
          }, 200);
          skillObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    skillBars.forEach(function(bar) {
      skillObserver.observe(bar);
    });
  }

  /* ---- 平滑滚动 (兼容 Safari) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80; // 导航栏高度
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ---- 动态年份更新 ---- */
  const yearElements = document.querySelectorAll('.current-year');
  yearElements.forEach(function(el) {
    el.textContent = new Date().getFullYear();
  });

});