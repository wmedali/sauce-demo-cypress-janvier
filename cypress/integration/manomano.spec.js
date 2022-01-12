describe("Sauce Demo Authentication tests", function () {
  it("Intercept Mano Mano Suggestions", () => {
    cy.intercept(
      {
        method: "POST",
        url: "**/queries?**",
      },
      { fixture: "manomanosuggestion.json" }
    ).as("serachQuery");
    cy.visit("https://www.manomano.fr/");
    cy.get(".didomi-continue-without-agreeing").click();
    cy.get(".SearchForm_input__IgmDX").type("Samire");
  });
});
