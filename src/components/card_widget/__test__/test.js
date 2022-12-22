import CardWidget from '../card_widget';
import { validatePaySystem, validateCreditCard } from '../alg';

test('testing vaidateCreditCard valid value', () => {
  const valid = '5437085548431769';
  const result = validateCreditCard(valid);
  expect(result).toBe(true);
});

test('testing vaidateCreditCard unvalid value', () => {
  const unvalid = '5571082966707';
  const result = validateCreditCard(unvalid);
  expect(result).toBe(false);
});

test('test validatePaySystem Visa', () => {
  const visaElectron = [
    '4913210309687484',
    '4917161232368013',
    '4917811043128838',
  ];

  visaElectron.forEach((item) => {
    const result = validatePaySystem(item);
    expect(result).toBe('visaElectron');
  });
});

test('test validatePaySystem Discover', () => {
  const discover = [
    '6011980957155366',
    '6011119885260556',
    '6011543047638644845',
  ];

  discover.forEach((item) => {
    const result = validatePaySystem(item);
    expect(result).toBe('discover');
  });
});

test('test validatePaySystem diners Carte Blanche', () => {
  const diners = [
    '30319061774764',
    '30400199121647',
    '30120826798639',
  ];
  diners.forEach((item) => {
    const result = validatePaySystem(item);
    expect(result).toBe('diners');
  });
});

test('test validatePaySystem Mastercard', () => {
  const mastercard = [
    '5552927478163152',
    '2720991898375949',
    '5235765455304554',
  ];
  mastercard.forEach((item) => {
    const result = validatePaySystem(item);
    expect(result).toBe('mastercard');
  });
});

test('test validatePaySystem JCB', () => {
  const mastercard = [
    '3532606527037563',
    '3542215713699745',
    '3532987341502150232',
  ];
  mastercard.forEach((item) => {
    const result = validatePaySystem(item);
    expect(result).toBe('jcb');
  });
});

test('test validatePaySystem Diners Club - International', () => {
  const diners = [
    '36036340758541',
    '36433709429014',
    '36068578965118',
  ];
  diners.forEach((item) => {
    const result = validatePaySystem(item);
    expect(result).toBe('diners');
  });
});

test('test validatePaySystem InstaPayment', () => {
  const instaPayment = [
    '6392089012085672',
    '6383852473399937',
    '6370958815126170',
  ];
  instaPayment.forEach((item) => {
    const result = validatePaySystem(item);
    expect(result).toBe('instaPayment');
  });
});

test('test validatePaySystem American Express', () => {
  const amex = [
    '347619444190952',
    '340983913905952',
    '377355263271317',
  ];
  amex.forEach((item) => {
    const result = validatePaySystem(item);
    expect(result).toBe('americanExpress');
  });
});

test('test validatePaySystem Diners Club - North America', () => {
  const diners = [
    '5462134976071560',
    '5575923757675498',
  ];
  diners.forEach((item) => {
    const result = validatePaySystem(item);
    expect(result).toBe('diners');
  });
});

test('test validatePaySystem Maestro', () => {
  const maestro = [
    '6762562004690958',
    '6761426701327275',
    '6763843813248637',
  ];
  maestro.forEach((item) => {
    const result = validatePaySystem(item);
    expect(result).toBe('maestro');
  });
});

test('test validatePaySystem Mir', () => {
  const mir = [
    '2201271433873197',
    '2202102746309299',
    '2204488318296669',
  ];
  mir.forEach((item) => {
    const result = validatePaySystem(item);
    expect(result).toBe('mir');
  });
});
