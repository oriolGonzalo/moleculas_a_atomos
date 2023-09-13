import { parseMolecule } from "./parseMolecule";

describe("parseMolecule", () => {
    it.only("Should parse water", () => {
        expect(parseMolecule("H2O")).toEqual({ H: 2, O: 1 });
    });
    it("Should parse magnesium hydroxide: Mg(OH)2", () => {
        expect(parseMolecule("Mg(OH)2")).toBe({ Mg: 1, O: 2, H: 2 });
    });
    it("Should parse Fremy's salt: K4[ON(SO3)2]2", () => {
        expect(parseMolecule("K4[ON(SO3)2]2")).toBe({ K: 4, O: 14, N: 2, S: 4 });
    });
});