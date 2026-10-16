/**
 * Non-Disclosure Agreement (NDA) Generator Engine
 * Produces structured Mutual and Unilateral NDAs in Markdown and HTML.
 */

class NdaEngine {
  constructor(config = {}) {
    this.config = {
      type: config.type || 'mutual', // 'mutual' | 'unilateral'
      disclosingParty: config.disclosingParty || 'Disclosing Party Inc.',
      disclosingAddress: config.disclosingAddress || '123 Market St, San Francisco, CA',
      receivingParty: config.receivingParty || 'Receiving Party LLC',
      receivingAddress: config.receivingAddress || '456 Tech Ave, New York, NY',
      purpose: config.purpose || 'evaluating a potential business partnership, financing, or corporate transaction',
      termYears: Number(config.termYears) || 2,
      governingLaw: config.governingLaw || 'State of Delaware',
      effectiveDate: config.effectiveDate || new Date().toISOString().split('T')[0]
    };
  }

  generateMarkdown() {
    const c = this.config;
    const isMutual = c.type === 'mutual';
    const title = isMutual ? 'MUTUAL NON-DISCLOSURE AGREEMENT' : 'UNILATERAL NON-DISCLOSURE AGREEMENT';

    return `# ${title}

This Non-Disclosure Agreement (the "Agreement") is entered into on **${c.effectiveDate}** (the "Effective Date") by and between:

- **${c.disclosingParty}**, with offices at ${c.disclosingAddress} ("${isMutual ? 'Party A' : 'Disclosing Party'}")
- **${c.receivingParty}**, with offices at ${c.receivingAddress} ("${isMutual ? 'Party B' : 'Receiving Party'}")

*(Collectively, the "Parties", or individually, a "Party").*

---

### 1. Purpose
The Parties desire to disclose confidential business, financial, technical, or operational information to each other solely for the purpose of **${c.purpose}** (the "Authorized Purpose").

### 2. Definition of Confidential Information
"Confidential Information" means all non-public information, whether oral, visual, or written, disclosed by a Party to the other Party that is marked as confidential or that reasonably should be understood to be confidential given the nature of the information and circumstances of disclosure. Confidential Information includes, without limitation: trade secrets, software code, product roadmaps, pitch decks, cap tables, financial forecasts, and customer contracts.

### 3. Exclusions from Confidentiality
Confidential Information does not include information that:
1. is or becomes publicly known through no breach of this Agreement by the Receiving Party;
2. was already in the rightful possession of the Receiving Party prior to disclosure without confidentiality restrictions;
3. is independently developed by the Receiving Party without reference to or reliance upon the Disclosing Party's Confidential Information; or
4. is rightfully obtained from a third party without restriction on disclosure.

### 4. Obligations of Confidentiality & Non-Use
The Receiving Party agrees to:
1. protect Disclosing Party's Confidential Information with at least the same degree of care it exercises with respect to its own confidential materials (and in no event less than reasonable care);
2. not use Confidential Information for any purpose other than the Authorized Purpose; and
3. restrict disclosure of Confidential Information solely to its employees, directors, advisors, and financing sources who have a need to know and are bound by confidentiality obligations at least as restrictive as this Agreement.

### 5. Term & Termination
This Agreement and the confidentiality obligations herein shall remain in effect for a period of **${c.termYears} years** from the Effective Date. Trade secrets shall remain protected for as long as they qualify as trade secrets under applicable law.

### 6. Governing Law & Jurisdiction
This Agreement shall be governed by, and construed in accordance with, the laws of the **${c.governingLaw}**, without regard to its conflict of law principles.

### 7. Remedies
The Parties acknowledge that any breach of this Agreement may cause irreparable harm for which monetary damages alone would be inadequate, and agree that the Disclosing Party shall be entitled to seek equitable relief, including injunctive relief, in addition to all other remedies available at law.

---

### SIGNATURES

**${c.disclosingParty}**  
Signature: _________________________________  
Name: ____________________________________  
Title: _____________________________________  
Date: _____________________________________  

**${c.receivingParty}**  
Signature: _________________________________  
Name: ____________________________________  
Title: _____________________________________  
Date: _____________________________________  
`;
  }

  generateHtml() {
    const md = this.generateMarkdown();
    // Convert basic markdown to clean HTML
    const htmlContent = md
      .replace(/^# (.*$)/gim, '<h1 style="font-size: 20px; border-bottom: 2px solid #334155; padding-bottom: 8px; margin-bottom: 16px;">$1</h1>')
      .replace(/^### (.*$)/gim, '<h3 style="font-size: 15px; margin-top: 16px; margin-bottom: 6px; color: #1e293b;">$1</h3>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/\n\n/gim, '</p><p style="margin-bottom: 10px; line-height: 1.6; font-size: 13px;">')
      .replace(/---/gim, '<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;">');

    return `<div style="font-family: Georgia, serif; max-width: 800px; margin: 0 auto; padding: 32px; background: #fff; color: #1e293b; line-height: 1.6;"><p style="margin-bottom: 10px; line-height: 1.6; font-size: 13px;">${htmlContent}</p></div>`;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { NdaEngine };
}
