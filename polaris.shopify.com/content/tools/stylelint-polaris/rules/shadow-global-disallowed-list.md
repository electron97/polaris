---
title: shadow/global-disallowed-list
description: Disallows use of legacy shadow Sass APIs.
keywords:
  - stylelint
  - shadow
  - shadow rules
---

import RulePreamble from '../_preamble.md';
import RulePostamble from '../_postamble.md';

# {frontmatter.title}

<Lede>{frontmatter.description}</Lede>

<RulePreamble category="shadow" />

```diff
// Don't
- @type map $depth-data: $shadows-data;
```

<RulePostamble />
