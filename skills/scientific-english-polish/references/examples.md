# Safe editing examples

These are newly composed demonstrations, not quotations or verified research results. Apply the principle, not the wording, to actual drafts.

## Grammar and claim strength

Original: `The proposed method reduce the computation time and may improves robustness.`

Revision: `The proposed method reduces computation time and may improve robustness.`

Reason: Repair agreement and modal syntax; retain the uncertainty of `may`.

## Modifier attachment

Original: `Using the proposed algorithm, the control input is calculated.`

Revision: `The control input is calculated using the proposed algorithm.`

Reason: Avoid suggesting that the input itself uses an algorithm; no invented agent is required.

## Valid causal opener

Original: `Because the input is bounded, the estimate remains finite.`

Action: No grammatical correction is needed. Preserve the asserted relationship; assessing whether bounded input actually implies that result requires technical context.

## Safe numerical compression

Original: `In the tested cases, the proposed method reduces the mean computation time from 10 s to 8 s compared with the baseline method.`

Revision: `In the tested cases, the proposed method reduces mean computation time from 10 to 8 s relative to the baseline.`

Reason: Retain test scope, mean, baseline, and values. Do not say that computational complexity falls by 20%.

## Quantifier preservation

Original: `For each initial state, there exists a feasible control sequence.`

Revision: `A feasible control sequence exists for each initial state.`

Do not write: `A single control sequence is feasible for all initial states.`

## Ambiguous improvement

Original: `The controller improves the result by 12%.`

Conservative output: Keep the claim pending clarification rather than inventing a metric.

Author query: `12% 指哪个指标、相对哪个基线？这里表示相对变化还是百分点差？`

## Technical distinctions

Original: `The algorithm finds a feasible solution under Assumption 2.`

Action: Retain `feasible` and `under Assumption 2`; polishing does not justify `optimal` or removing the assumption.

## LaTeX

Original: `The results in \eqref{eq:bound} shows that $J\leq J_0$.`

Revision: `The results in \eqref{eq:bound} show that $J\leq J_0$.`

Reason: Only verb agreement changes. Preserve the inequality and reference key exactly.

## Existing reviewer reply

Original: `We will add this comparison in revised manuscript.`

Revision: `We will add this comparison to the revised manuscript.`

Reason: Preserve the future action; do not change to `We have added` without evidence of completion.
