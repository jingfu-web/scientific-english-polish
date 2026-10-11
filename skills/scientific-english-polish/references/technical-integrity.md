# Technical meaning and LaTeX

## Meaning invariants

Before and after editing, compare:

- All vs. some; each vs. one common; at least one vs. exactly one.
- If, only if, and if and only if; necessary vs. sufficient.
- And vs. or; negation and its scope; conditional vs. unconditional statements.
- Positive vs. nonnegative; strict vs. non-strict inequalities; finite vs. bounded.
- Feasible vs. optimal; minimum vs. minimal; local vs. global; estimated vs. guaranteed.
- Can, may, typically, and under the stated assumptions vs. always or must.
- Every value, unit, denominator, percentage baseline, indexing range, and comparison condition.

For `P if Q`, the direction is Q implies P; for `P only if Q`, P implies Q. A definition may conventionally use `if` to introduce a defining condition, but this is not a global license to replace `iff`. Preserve the author's mathematical relation and flag ambiguity.

The statements `for every x there exists y` and `there exists y for every x` need not mean the same thing. Reordering quantifiers to improve English can invalidate a result. Likewise, pointwise finite bounds do not automatically establish one uniform bound. Raise an author query rather than silently repair a definition.

Do not claim a proof is valid just because its English reads well. Separate proof exposition from proof checking. A technical issue can be reported during a language pass without rewriting the result or supplying a new proof.

## Symbols and exposition

Use `denote` for assigning notation and `represent` for representation when the distinction helps, without treating either as an automatic substitution. Distinguish a set, an element, its cardinality, a scalar, a vector, and a function's value. A notation assignment is not always a new scientific definition.

Define unfamiliar symbols near first use; recommend a notation table when density warrants it. Do not rename symbols in an isolated excerpt if that may break the rest of the paper. A symbol should not silently acquire a second meaning in the same scope.

Use words to ease the reading of mixed mathematical prose when doing so preserves scope. Keep compact symbolic formulas where they are clearer. A helpful paraphrase should explain the same claim, not substitute a stronger or weaker one.

## LaTeX preservation

Preserve math environments, macros, `\label`, `\ref`, `\eqref`, and `\cite` keys. Do not normalize source code based on PDF text extraction: superscripts, bars, subscripts, minus signs, and ligatures may have been lost.

Treat a display as part of its surrounding sentence. A continuing `where` clause normally starts lowercase; punctuation should reflect sentence structure. Distinguish text hyphens, ranges, and mathematical minus signs. Do not force `\emptyset` over a valid `\varnothing` or modify package-dependent syntax merely for visual preference.

Check prose edits around equations without changing equation contents by default. When a mathematical correction is explicitly requested, explain it separately and check dependent references. If source is insufficient or visually ambiguous, ask for the relevant source rather than reconstruct a formula from guesswork.
