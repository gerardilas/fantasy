import { render } from "@testing-library/react";
import RenderProducts from ".";

describe("Render Products", () => {
    test("display product", () => {
        render(<RenderProducts products={Array("some", "thing")} />);
    });
});
