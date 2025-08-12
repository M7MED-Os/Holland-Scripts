//!!! Sherif Elsayed !!!

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function clickOptionByText(text) {
  try {
    const options = Array.from(document.querySelectorAll('mat-option'));
    const target = options.find(option => 
      option.textContent.trim().toLowerCase() === text.trim().toLowerCase()
    );
    if (target) {
      target.click();
      console.log(`✅ Selected: ${text}`);
      return true;
    }
    console.error(`❌ Option not found: ${text}`);
    return false;
  } catch (error) {
    console.error(`❌ Error selecting option "${text}":`, error);
    return false;
  }
}
async function selectGender() {
  try {
    const genderSelectors = [
      '#mat-select-6',
      'mat-select[aria-labelledby*="gender"]',
      'mat-select[formcontrolname="gender"]',
      'mat-select:first-of-type'
    ];

    for (const selector of genderSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        element.click();
        await delay(800);
        if (clickOptionByText('Male')) return true;
      }
    }
    console.error('Failed to select gender');
    return false;
  } catch (error) {
    console.error('Error selecting gender:', error);
    return false;
  }
}
async function selectNationality() {
  try {
    const nationalitySelectors = [
      '#mat-select-8',
      'mat-select[aria-labelledby*="nationality"]',
      'mat-select[formcontrolname="nationality"]',
      'mat-select:nth-of-type(2)'
    ];

    for (const selector of nationalitySelectors) {
      const element = document.querySelector(selector);
      if (element) {
        element.click();
        await delay(800);
        if (clickOptionByText('Egypt')) return true;
      }
    }
    console.error('Failed to select nationality');
    return false;
  } catch (error) {
    console.error('Error selecting nationality:', error);
    return false;
  }
}
async function fillField(selector, value, eventType = 'input', index = 0) {
  try {
    const elements = document.querySelectorAll(selector);
    if (elements.length > index) {
      const element = elements[index];
      element.value = value;
      element.dispatchEvent(new Event(eventType, { bubbles: true }));
      console.log(`✅ Filled field: ${selector}`);
      return true;
    }
    console.error(`❌ Field not found: ${selector}`);
    return false;
  } catch (error) {
    console.error(`❌ Error filling field ${selector}:`, error);
    return false;
  }
}
async function fillForm() {
  await fillField('input[placeholder="Enter your first name"]', 'SHERIF');
  await delay(500);
  await fillField('input[placeholder="Please enter last name."]', 'IBRAHIM');
  await delay(500);
  await selectGender();
  await delay(500);
  await fillField('input[placeholder="Please select the date"]', '23/08/1990', 'input', 0);
  await fillField('input[placeholder="Please select the date"]', '23/08/1990', 'change', 0);
  await delay(500);
  await selectNationality();
  await delay(500);
  await fillField('input[placeholder="Enter passport number"]', 'A42318997');
  await delay(500);
  await fillField('input[placeholder="Please select the date"]', '05/08/2032', 'input', 1);
  await fillField('input[placeholder="Please select the date"]', '05/08/2032', 'change', 1);
  await delay(500);
  await fillField('input[placeholder="44"]', '20');
  await delay(500);
  await fillField('input[placeholder="012345648382"]', '01127338018');
  await delay(500);
  await fillField('input[type="email"]', 'm7medosama112902@gmail.com');
  await delay(500);
  console.log('✅ تم محاولة ملء جميع حقول النموذج');
}
fillForm();