import { assertEquals, assertThrows} from "@std/assert";
import { correlation } from "./mod.ts";

Deno.test("Blank initialization", ()=>{
  const c = correlation([1, 2],[1, 2]);
  assertEquals(c, 1);
});

Deno.test("Validation", ()=>{
  assertThrows(() => correlation([0],[]));
  assertThrows(() => correlation([],[]));
});

Deno.test("Correlation", () => {
  const cases: Array<[Array<number>, Array<number>, number]> = [
    [[1, 2, 3], [1, 2, 3], 1],
    [[1, 2, 3], [3, 2, 1], -1],
    [[1, 2, 3], [1, 3, 2], 0.5],
    [[1, 2, 3], [3, 1, 2], -0.5],
  ];
  for (const t of cases) {
    assertEquals(correlation(t[0], t[1]), t[2]);
  }
});
