(function () {
  var THEME_STORAGE_KEY = 'color-theme';
  var LIGHT_LABEL = 'Light';
  var DARK_LABEL = 'Dark';


  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      /* localStorage may be unavailable */
    }
  }

  function getCurrentTheme() {
    var current = document.documentElement.dataset.theme;
    return current === 'dark' ? 'dark' : 'light';
  }

  function updateButton(button) {
    var theme = getCurrentTheme();
    var targetTheme = theme === 'dark' ? 'light' : 'dark';

    button.setAttribute('data-theme-target', targetTheme);
    button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    button.classList.toggle('is-dark', theme === 'dark');

    var sr = button.querySelector('.theme-toggle__sr');
    if (sr) {
      sr.textContent = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

    }
  }

  function injectButton() {
    var nav = document.querySelector('.greedy-nav');
    if (!nav) {
      return null;
    }

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.setAttribute('aria-live', 'polite');
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', 'Toggle color mode');

    var sr = document.createElement('span');
    sr.className = 'theme-toggle__sr';
    sr.textContent = 'Switch to dark mode';
    button.appendChild(sr);

    var track = document.createElement('span');
    track.className = 'theme-toggle__track';

    var lightLabel = document.createElement('span');
    lightLabel.className = 'theme-toggle__label theme-toggle__label--light';
    lightLabel.textContent = LIGHT_LABEL;
    track.appendChild(lightLabel);

    var darkLabel = document.createElement('span');
    darkLabel.className = 'theme-toggle__label theme-toggle__label--dark';
    darkLabel.textContent = DARK_LABEL;
    track.appendChild(darkLabel);

    button.appendChild(track);

    var thumb = document.createElement('span');
    thumb.className = 'theme-toggle__thumb';
    thumb.setAttribute('aria-hidden', 'true');
    button.appendChild(thumb);

    var toggle = nav.querySelector('.greedy-nav__toggle');
    if (toggle && toggle.parentNode === nav) {
      nav.insertBefore(button, toggle);
    } else {
      nav.appendChild(button);
    }

    return button;
  }

  function setupToggle(button) {
    button.addEventListener('click', function () {
      var targetTheme = button.getAttribute('data-theme-target');
      if (!targetTheme) {
        targetTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
      }
      applyTheme(targetTheme);
      updateButton(button);
    });
  }

  function init() {
    var button = injectButton();
    if (!button) {
      return;
    }
    updateButton(button);
    setupToggle(button);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
