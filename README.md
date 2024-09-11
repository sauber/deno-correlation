# deno-correlation

Pearson Correlation Coefficient of two datasets

## Examples

```typescript
import { correlation } from "@sauber/correlation";

// Result is 1.0
const correlated: number = correlation([1, 2, 3], [1, 2, 3]);

// Result is -1.0
const negativeCorrelation: number = correlation([1, 2, 3], [3, 2, 1]);
```
