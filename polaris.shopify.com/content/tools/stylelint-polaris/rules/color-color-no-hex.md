---
title: color/color-no-hex
description: Disallows hex colors.
keywords:
  - stylelint
  - color
  - color rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="color" />

```diff
// Do
+ color: var(--p-color-text);
+ fill: var(--p-color-icon)
// Don't
- color: #202223;
- fill: #5c5f62;
```

<RulePostamble />
