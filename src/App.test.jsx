import { describe, expect, test } from "vitest";
import { getByText, render, screen, waitFor } from '@testing-library/react'
import App from "./App";
import PokeInfo from "./components/PokeInfo";

describe("Testing Everything inside App Component", () => {
    test("App mounts properly", () => {
        render(<App />)
    })
})