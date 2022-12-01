chrome.runtime.onInstalled.addListener(() => {
  let parent = chrome.contextMenus.create({
    id: 'parent-menu',
    title: 'Preencher formulário de adesão de plano',
  });
});

chrome.contextMenus.onClicked.addListener((info, tabs) => {
  chrome.scripting.executeScript({
    target: { tabId: tabs.id },
    function: renderFormFilled,
    args: [info.menuItemId],
  });
});

function renderFormFilled() {
  const nameInput = document.querySelector('[data-testid="nameInput"]');
  const cpfInput = document.querySelector('[data-testid="cpfInput"]');
  const cnpjInput = document.querySelector('[data-testid="cnpjInput"]');
  const phoneInput = document.querySelector('[data-testid="phoneInput"]');
  const emailInput = document.querySelector('[data-testid="emailInput"]');
  const zipCodeInput = document.querySelector('[data-testid="zipCodeInput"]');
  const zipNumberInput = document.querySelector('[data-testid="zipNumberInput"]');
  const companyNameInput = document.querySelector('[data-testid="companyNameInput"]');
  const tradingNameInput = document.querySelector('[data-testid="tradingNameInput"]');
  const complementInput = document.querySelector('[data-testid="complementInput"]');


  function generateCpf() {
    const validCpf = [
      '92379623040',
      '68850416024',
      '19953982090',
      '66715944067',
      '90882001060',
      '86838872005',
      '02285024037',
      '84327798061',
      '02303805066',
      '05705103093'
    ]

    return pickRandomFromArray(validCpf)
  }

  function generateCnpj() {
    const validCnpj = [
      '93836407000134',
      '22994482000185',
      '14123821000120',
      '06347737000161',
      '85869194000119',
      '18618142000182',
      '84223438000129',
      '47989809000151',
      '93989183000109',
      '23715555000115'
    ]

    return pickRandomFromArray(validCnpj)
  }

  function pickRandomFromArray(array) {
    return array[Math.floor(Math.random()*array.length)];
  }

  const now = new Date()

  if (nameInput) { 
    nameInput.value = 'John Example';
    nameInput.dispatchEvent(new Event('input', { bubbles: true }));
  }

  if(cpfInput) cpfInput.value = generateCpf()
  if(cnpjInput) cnpjInput.value = generateCnpj()
  if(phoneInput) phoneInput.value = '1131810250'
  if (emailInput) emailInput.value = 'john@example.com'
  
  if (zipCodeInput) {
    zipCodeInput.value = '04538-905'
    zipCodeInput.dispatchEvent(new Event('input', { bubbles: true }));
  }
  
  if (zipNumberInput) {
    zipNumberInput.value = '999'
    zipNumberInput.dispatchEvent(new Event('input', { bubbles: true }));
  }

  if (tradingNameInput) {
    tradingNameInput.value = 'Acme Inc.' 
    tradingNameInput.dispatchEvent(new Event('input', { bubbles: true }));
  }
  
  if(companyNameInput) companyNameInput.value = 'Acme'
  if(complementInput) complementInput.value = `Adquirido em ${now}`
}
