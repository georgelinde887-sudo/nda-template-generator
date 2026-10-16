const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { NdaEngine } = require('../src/nda-engine');

describe('NDA Template Generator Engine Tests', () => {
  test('generates Mutual NDA markdown with custom parties and governing law', () => {
    const engine = new NdaEngine({
      type: 'mutual',
      disclosingParty: 'Acme Robotics Inc.',
      receivingParty: 'Apex Ventures Fund III',
      governingLaw: 'State of California',
      termYears: 3
    });

    const md = engine.generateMarkdown();
    assert.ok(md.includes('# MUTUAL NON-DISCLOSURE AGREEMENT'));
    assert.ok(md.includes('Acme Robotics Inc.'));
    assert.ok(md.includes('Apex Ventures Fund III'));
    assert.ok(md.includes('State of California'));
    assert.ok(md.includes('3 years'));
  });

  test('generates Unilateral NDA title when configured', () => {
    const engine = new NdaEngine({ type: 'unilateral' });
    const md = engine.generateMarkdown();
    assert.ok(md.includes('# UNILATERAL NON-DISCLOSURE AGREEMENT'));
  });

  test('generates styled HTML version', () => {
    const engine = new NdaEngine();
    const html = engine.generateHtml();
    assert.ok(html.includes('<h1'));
    assert.ok(html.includes('NON-DISCLOSURE AGREEMENT'));
  });
});
