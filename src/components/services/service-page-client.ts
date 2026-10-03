function selectTab(root: HTMLElement, tab: HTMLButtonElement, syncStage = true) {
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const stageField = document.querySelector<HTMLSelectElement>('#project-stage');
  root.classList.remove('is-show-all');
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', selected ? 'true' : 'false');
    item.tabIndex = selected ? 0 : -1;
    const panelId = item.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel || panel.closest('[data-tabset]') !== root) return;
    panel.classList.toggle('is-selected', selected);
    if (selected) panel.removeAttribute('hidden');
    else panel.setAttribute('hidden', '');
  });
  const stage = tab.dataset.projectStage;
  if (syncStage && stage && stageField && stageField.value !== stage) stageField.value = stage;
}

function setupTabsets() {
  const stageField = document.querySelector<HTMLSelectElement>('#project-stage');
  document.querySelectorAll<HTMLElement>('[data-tabset]').forEach((root) => {
    const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
    if (!tabs.length) return;
    root.classList.add('is-enhanced');
    const initial = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') ?? tabs[0];
    selectTab(root, initial, false);
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => selectTab(root, tab));
      tab.addEventListener('keydown', (event) => {
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        selectTab(root, tabs[next]);
        tabs[next].focus();
      });
    });
    root.querySelector<HTMLButtonElement>('[data-show-all]')?.addEventListener('click', () => {
      root.classList.add('is-show-all');
      root.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
        panel.removeAttribute('hidden');
        panel.classList.add('is-selected');
      });
      tabs.forEach((tab) => {
        tab.setAttribute('aria-selected', 'false');
        tab.tabIndex = -1;
      });
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-set-stage]').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.setStage;
      if (!value || !stageField) return;
      stageField.value = value;
      stageField.dispatchEvent(new Event('change', { bubbles: true }));
      button.setAttribute('aria-pressed', 'true');
      document.querySelectorAll<HTMLButtonElement>('[data-set-stage]').forEach((other) => {
        if (other !== button) other.removeAttribute('aria-pressed');
      });
    });
  });

  stageField?.addEventListener('change', () => {
    const value = stageField.value;
    if (!value) return;
    const tab = document.querySelector<HTMLButtonElement>(`[data-project-stage="${CSS.escape(value)}"]`);
    const root = tab?.closest<HTMLElement>('[data-tabset]');
    if (tab && root) selectTab(root, tab);
  });
}

function setupRail() {
  const groups = [...document.querySelectorAll<HTMLElement>('.service-group')];
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-chapter]')];
  const setCurrent = (id: string) => {
    links.forEach((link) => {
      if (id && link.dataset.chapter === id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  links.forEach((link) => {
    link.addEventListener('click', () => setCurrent(link.dataset.chapter || ''));
  });
  const middle = document.querySelector('.service-middle');
  if (!groups.length || !middle) return;
  const update = () => {
    const probe = window.innerHeight * 0.28;
    const middleBox = middle.getBoundingClientRect();
    if (middleBox.top > probe || middleBox.bottom < probe) {
      setCurrent('');
      return;
    }
    const active = groups.find((group) => {
      const box = group.getBoundingClientRect();
      return box.top <= probe && box.bottom > probe;
    });
    setCurrent(active?.id || '');
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

setupTabsets();
setupRail();
