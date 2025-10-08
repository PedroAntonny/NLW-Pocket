const elements = {
  promptTitle: document.getElementById('prompt-title'),
  promptContent: document.getElementById('prompt-content'),
  titleWrapper: document.getElementById('title-wrapper'),
  contentWrapper: document.getElementById('content-wrapper'),
  btnOpen: document.getElementById('btn-open'),
  btnCollapse: document.getElementById('btn-collapse'),
  sidebar: document.querySelector('.sidebar'),
  app: document.querySelector('.app'),
}

function updateEditableWrapperState(element, wrapper) {
  const hasContent = element.textContent.trim().length > 0

  wrapper.classList.toggle('is-empty', !hasContent)
}

function updateAllEditableStates() {
  updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
  updateEditableWrapperState(elements.promptContent, elements.contentWrapper)
}

function attachAllEditableHandlers() {
  elements.promptTitle.addEventListener('input', () => {
    updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
  })

  elements.promptContent.addEventListener('input', () => {
    updateEditableWrapperState(elements.promptContent, elements.contentWrapper)
  })
}

function openSidebar() {
  elements.app.classList.remove('sidebar-closed')
}

function closeSidebar() {
  elements.app.classList.add('sidebar-closed')
}

function attachSidebarHandlers() {
  elements.btnOpen.addEventListener('click', openSidebar)
  elements.btnCollapse.addEventListener('click', closeSidebar)
}

function init() {
  attachAllEditableHandlers()
  attachSidebarHandlers()
  updateAllEditableStates()
}

init()
