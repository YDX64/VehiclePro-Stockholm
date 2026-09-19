# Security remediation — 2026-09-19

## Scope
Continue existing PR #4, https://github.com/YDX64/VehiclePro-Stockholm/pull/4 . Handoff/default branch baseline: `3bb7921dab6a415a7b7166959f68044320710625`. Historical Dependabot snapshot: 1 high alert in `yenisi/package-lock.json`, Browserslist GHSA-73wf-gq98-2v4g. Fresh and post-merge GitHub alert counts are not accessible through the available connector; do not infer them from npm audit.

## Changes
- Existing Dependabot update: Browserslist 4.24.2 to 4.28.9 and required browser-data dependencies.
- The manifest had Tailwind 4 while the application, PostCSS configuration, utilities and brand theme use the Tailwind 3 contract. Pin Tailwind 3.4.19 and generate the dependency lock using npm; preserve the existing styling and source rather than attempting an unnecessary visual migration. The complete prepared npm graph passes all-severity audit.
- Remove only the unused `index` callback argument in `Contact.tsx`; keep contact content, rendering and existing form behavior unchanged.
- Restore original libc selectors on unchanged native dependency versions, which npm 10 had stripped while preparing the Tailwind lock. No native package version was changed by this metadata repair.
- No files or user work were deleted. The tracked generated TypeScript cache was excluded from commits, not reset or removed.

## Verification
Prepared compatibility patch: clean locked install, npm audit at all severities, Vite production build, independent TypeScript, generated brand-color/responsive CSS checks, PHP syntax check, and real Chromium tests at 375px/1280px passed. Browser checks verified contact fields, four department options, brand color and responsive columns; all external requests were blocked and no form was submitted.

Committed candidate before metadata repair passed run https://github.com/YDX64/VehiclePro-Stockholm/actions/runs/35450806985 . The metadata-only repair also runs clean install/audit/build/type validation before a separate, tightly scoped publisher commits it. Current candidate validation is rerun by this documentation commit; inspect the latest PR check rather than assuming it has passed.

## Boundaries and next step
Merge only the exact current head after successful checks. No deployment was performed and live target/version/rollback/HTTP health are not verified. PHP syntax is not a PHP security audit. The generated browser evidence does not certify all application source as secure. Re-query default-branch Dependabot alerts using an alert-capable authorized connection after merge.
