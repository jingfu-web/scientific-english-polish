---
name: scientific-english-polish
description: Revise and polish English scientific manuscripts while preserving technical meaning, mathematical logic, data, and citations. Use for academic English editing, Chinglish correction, paragraph coherence, abstract or introduction refinement, concise rewriting, and reviewer-response language polishing; supports Chinese explanations. Not a literature-search, experiment-design, or full peer-review workflow.
---

# Scientific English Polish

Improve existing scientific writing so that a reader can follow the reasoning without losing technical precision. This skill distills engineering writing materials by Guanrong Chen, Zhiwu Li, and MengChu Zhou; their personal conventions are not universal grammar rules.

## Establish scope with minimal friction

Use the supplied text, prior context, target section, word limit, and journal guidance. Do not require a questionnaire for a usable passage. If no editable text is supplied, ask for the passage or file. Preserve the existing English variety unless the user specifies another.

Default to standard polishing: correct grammar, remove unhelpful verbosity, and improve sentence connections while preserving the argument and paragraph order. Infer other modes from the request:

- Light proofreading: change only clear language errors and inconsistent mechanics.
- Deep polishing: reorganize sentences and, when authorized, paragraphs; explain substantive restructuring.
- Compression: meet the requested limit without deleting assumptions, limitations, evidence, or comparison conditions. If these cannot fit, explain the conflict instead of silently dropping them.
- Diagnostic review: identify issues and proposed remedies without rewriting everything.
- Chinese-to-English scientific expression: translate only when requested or when the supplied source is Chinese; flag technically ambiguous terms.
- Reviewer response: polish an existing response and keep comments, replies, and documented actions distinct.

## Protect meaning before editing

Preserve numbers, units, signs, ranges, variable names, algorithm names, citation keys, cross-reference labels, assumptions, negation, quantifier scope, uncertainty, and the strength of claims. Do not upgrade empirical evidence to proof, feasibility to optimality, or association to causation. Do not invent novelty, results, references, mechanisms, limitations, or completed manuscript changes.

Correct unambiguous language directly. If an edit would choose between different scientific meanings, retain a conservative version and place a focused author query outside the polished text. A suspected technical error is a flagged issue, not permission to change the science. Even deep polishing does not authorize new research claims.

Do not modify authorship, funding identifiers, or acknowledgements of actual contributions merely for style. Do not send, submit, or upload manuscripts as part of polishing.

## Read only the relevant references

- Sentence-level editing: [language-and-coherence.md](references/language-and-coherence.md).
- Titles, abstracts, introductions, methods, results, conclusions, captions, or response letters: [section-guidance.md](references/section-guidance.md).
- Equations, definitions, theorems, proofs, symbols, or LaTeX: [technical-integrity.md](references/technical-integrity.md).
- Conflicting advice, strict house style, or questions about source rules: [style-decisions.md](references/style-decisions.md).
- Examples of safe edits and author queries: [examples.md](references/examples.md).
- Provenance or source attribution: [source-map.md](references/source-map.md). The original PDFs are not required for ordinary use.

## Edit in a meaning-first sequence

1. Identify what each sentence claims and how it connects to surrounding sentences. For longer passages, maintain a small working list of established terms, abbreviations, notation, and style choices.
2. Repair broken clauses, subject–verb agreement, articles, references of pronouns, and misplaced modifiers. Then simplify the presentation. Retain necessary technical repetition instead of rotating synonyms.
3. Make actual logical relations explicit. Use a causal connector only where the text supports causation; a smooth transition must not create an unsupported inference.
4. Check the purpose of the section when relevant. Flag missing substantive information rather than manufacture it to fill a template.
5. Compare the revision against the source for meaning, qualifications, numbers, formulas, and attribution. Review every substantive change, not just surface fluency. Check an explicit word limit and state how words were counted if close to the limit.

For long documents, process coherent sections and preserve a shared terminology list. State exactly which sections were processed if coverage is incomplete. Never label an excerpt-only pass as a full-manuscript check.

## Deliver in a usable form

Default for a Chinese-speaking user: a clean English revision followed by concise Chinese explanations of important changes. Use the user's requested output language otherwise. Show a small original/revised/reason table only when helpful or requested; do not reproduce every punctuation fix. Keep author queries separate from copy-ready prose. If the user requests only the revision, omit explanations unless an unresolved ambiguity must be disclosed.

For LaTeX, return valid source preserving commands, math, labels, and citations; do not insert Markdown emphasis into it. When editing files, use a distinct revised copy by default unless in-place editing was requested, and verify the saved output. Rich document editing may use available document tools, but this skill itself has no dependency on them.

Report language editing separately from scientific verification. Do not claim to have checked cited papers, proved theorems, compiled LaTeX, or tracked Word changes unless those actions actually occurred.
