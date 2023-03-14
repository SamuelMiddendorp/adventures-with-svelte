import { writable, type Writable } from "svelte/store";

export const fooData: Writable<String[]> = writable([])
fooData.set(["Foo", "Bar", "Bas"])

