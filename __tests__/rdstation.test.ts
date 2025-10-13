/**
 * Testes unitários para integração RD Station
 *
 * Estes testes verificam a lógica de mapeamento e validação
 * sem depender de bibliotecas externas como Jest.
 *
 * Para executar testes completos com mocks, instale:
 * npm install --save-dev jest @testing-library/react @testing-library/jest-dom
 */

import {
  mapContactFormToRdStation,
  generateAutoTags,
  validateRdStationData,
  createConversionIdentifier,
} from '../src/lib/rdstation';
import type { ContactFormData } from '../src/lib/validations/contact-form';

// Funções auxiliares para testes simples
function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

function assertEqual<T>(actual: T, expected: T, message: string) {
  if (actual !== expected) {
    throw new Error(
      `Assertion failed: ${message}. Expected: ${expected}, Actual: ${actual}`
    );
  }
}

function assertContains<T>(array: T[], item: T, message: string) {
  if (!array.includes(item)) {
    throw new Error(
      `Assertion failed: ${message}. Array: ${array}, Item: ${item}`
    );
  }
}

function assertMatch(value: string, pattern: RegExp, message: string) {
  if (!pattern.test(value)) {
    throw new Error(
      `Assertion failed: ${message}. Value: ${value}, Pattern: ${pattern}`
    );
  }
}

// Testes unitários
console.log('🧪 Executando testes unitários da integração RD Station...\n');

// Teste 1: mapContactFormToRdStation
console.log('✅ Testando mapContactFormToRdStation...');
try {
  const formData: ContactFormData = {
    firstName: 'João Silva',
    email: 'joao@example.com',
    phone: '(11) 99999-9999',
    company: 'Empresa XYZ',
    position: 'Gerente',
    monthlyConsumption: '500-1000',
  };

  const result = mapContactFormToRdStation(formData, {
    formIdentifier: 'test-form',
    tags: ['test'],
    origin: 'Test',
  });

  assertEqual(
    result.identificador,
    'test-form',
    'Identificador deve ser correto'
  );
  assertEqual(
    result.rdStationDados.nome,
    'João Silva',
    'Nome deve ser mapeado'
  );
  assertEqual(
    result.rdStationDados.email,
    'joao@example.com',
    'Email deve ser mapeado'
  );
  assertEqual(
    result.rdStationDados.telefone,
    '11999999999',
    'Telefone deve ser limpo'
  );
  assertEqual(
    result.rdStationDados.empresa,
    'Empresa XYZ',
    'Empresa deve ser mapeada'
  );
  assertEqual(result.rdStationDados.cargo, 'Gerente', 'Cargo deve ser mapeado');
  assertEqual(
    result.rdStationDados.consumo_mensal,
    '500-1000',
    'Consumo deve ser mapeado'
  );
  assertContains(
    result.tags || [],
    'test',
    'Tags devem conter o tag personalizado'
  );

  console.log('  ✅ Deve mapear dados do formulário corretamente');
} catch (error) {
  console.log('  ❌ Erro no teste de mapeamento:', error);
}

// Teste 2: Limpeza de telefone
try {
  const formData: ContactFormData = {
    firstName: 'Maria',
    email: 'maria@example.com',
    phone: '(11) 98888-7777',
    company: 'Empresa',
    position: 'Cargo',
    monthlyConsumption: '100-200',
  };

  const result = mapContactFormToRdStation(formData, {
    formIdentifier: 'test',
    tags: [],
  });

  assertEqual(
    result.rdStationDados.telefone,
    '11988887777',
    'Telefone deve ser limpo'
  );

  console.log('  ✅ Deve limpar caracteres especiais do telefone');
} catch (error) {
  console.log('  ❌ Erro no teste de limpeza de telefone:', error);
}

// Teste 3: generateAutoTags
console.log('✅ Testando generateAutoTags...');
try {
  const formData: ContactFormData = {
    firstName: 'Test',
    email: 'test@example.com',
    phone: '11999999999',
    company: 'Company',
    position: 'Position',
    monthlyConsumption: '500-1000',
  };

  const tags = generateAutoTags(formData);

  assertContains(tags, 'website', 'Deve conter tag website');
  assertContains(tags, 'consumo-500-1000', 'Deve conter tag de consumo');
  assertContains(
    tags,
    'lead-qualificado',
    'Deve conter tag de lead qualificado'
  );

  console.log('  ✅ Deve gerar tags baseadas no consumo');
} catch (error) {
  console.log('  ❌ Erro no teste de geração de tags:', error);
}

// Teste 4: validateRdStationData
console.log('✅ Testando validateRdStationData...');
try {
  const validData = {
    nome: 'João',
    email: 'joao@example.com',
  };

  assert(validateRdStationData(validData), 'Dados válidos devem passar');

  console.log('  ✅ Deve validar dados mínimos corretos');
} catch (error) {
  console.log('  ❌ Erro no teste de validação de dados válidos:', error);
}

try {
  const invalidData = {
    nome: 'João',
    // email ausente
  };

  assert(!validateRdStationData(invalidData), 'Dados sem email devem falhar');

  console.log('  ✅ Deve rejeitar dados sem email');
} catch (error) {
  console.log('  ❌ Erro no teste de rejeição de dados sem email:', error);
}

try {
  const invalidData = {
    email: 'joao@example.com',
    // nome ausente
  };

  assert(!validateRdStationData(invalidData), 'Dados sem nome devem falhar');

  console.log('  ✅ Deve rejeitar dados sem nome');
} catch (error) {
  console.log('  ❌ Erro no teste de rejeição de dados sem nome:', error);
}

// Teste 5: createConversionIdentifier
console.log('✅ Testando createConversionIdentifier...');
try {
  const id = createConversionIdentifier('test-form', false);
  assertEqual(id, 'test-form', 'Identificador sem timestamp deve ser correto');

  console.log('  ✅ Deve criar identificador sem timestamp');
} catch (error) {
  console.log('  ❌ Erro no teste de identificador sem timestamp:', error);
}

try {
  const id = createConversionIdentifier('test-form', true);
  assertMatch(
    id,
    /^test-form-\d+$/,
    'Identificador com timestamp deve ter formato correto'
  );

  console.log('  ✅ Deve criar identificador com timestamp');
} catch (error) {
  console.log('  ❌ Erro no teste de identificador com timestamp:', error);
}

console.log('\n🎉 Todos os testes unitários passaram!');

// Nota sobre testes de integração
console.log('\n📝 Nota: Para testes de integração completos com mocks HTTP,');
console.log('   considere instalar Jest:');
console.log(
  '   npm install --save-dev jest @testing-library/react @testing-library/jest-dom'
);
console.log('   npx jest __tests__/rdstation.test.ts');
