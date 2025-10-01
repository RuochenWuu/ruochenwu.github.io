(function () {
  var THEME_STORAGE_KEY = 'color-theme';
  var LIGHT_LABEL = 'Lightroom';
  var DARK_LABEL = 'Darkroom';

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

  function getButtonLabel(theme) {
    return theme === 'dark' ? LIGHT_LABEL : DARK_LABEL;
  }

  function createIcon(theme) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var icon = document.createElementNS(xmlns, 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('aria-hidden', 'true');

    var path = document.createElementNS(xmlns, 'path');
    if (theme === 'dark') {
      path.setAttribute('d', 'M12 4.354a7.646 7.646 0 1 0 7.646 7.646A7.646 7.646 0 0 0 12 4.354zm0-2.354a10 10 0 1 1-10 10 10 10 0 0 1 10-10z');
    } else {
      path.setAttribute('d', 'M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z');
    }
    path.setAttribute('fill', 'currentColor');
    icon.appendChild(path);
    return icon;
  }

  function updateButton(button) {
    var theme = getCurrentTheme();
    var targetTheme = theme === 'dark' ? 'light' : 'dark';
    button.setAttribute('data-theme-target', targetTheme);

    var label = button.querySelector('.theme-toggle__label');
    if (label) {
      label.textContent = getButtonLabel(theme);
    }

    var iconContainer = button.querySelector('.theme-toggle__icon');
    if (iconContainer) {
      iconContainer.innerHTML = '';
      iconContainer.appendChild(createIcon(targetTheme));
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

    var icon = document.createElement('span');
    icon.className = 'theme-toggle__icon';
    button.appendChild(icon);

    var label = document.createElement('span');
    label.className = 'theme-toggle__label';
    button.appendChild(label);

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
