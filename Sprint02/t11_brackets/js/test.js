describe("Check Brackets", function() {

    it("Is cheked", function() {
      assert.equal(checkBrackets('1)()(())2(()'), 2);
    });
    it("Is cheked", function() {
        assert.equal(checkBrackets(NaN), -1);    
      });
    it("Is cheked", function() {
        assert.equal(checkBrackets('(0)))1)'), 2);
    }); 
    it("Is cheked", function() {
        assert.equal(checkBrackets('(0)))8977hjljl)))1)'), 4);
    }); 
    it("Is cheked", function() {
        assert.equal(checkBrackets('(0)))8977hjljl)))1)'), 6);    
    }); 
    it("Is cheked", function() {
        assert.equal(checkBrackets(3 + 3), -1);
    });
    it("Is cheked", function() {
        assert.equal(checkBrackets("))"), 1);
    }); 
    it("Is cheked", function() {
        assert.equal(checkBrackets(")((((_)))))"), 2);
    }); 
    it("Is cheked", function() {
        assert.equal(checkBrackets(")((((_)))))"), 2);
    });
    it("Is cheked", function() {
        assert.equal(checkBrackets(")((((_))"), 3);
    }); 
    it("Is cheked", function() {
        assert.equal(checkBrackets(")((((_))"), 2);
    });
    it("Is cheked", function() {
        assert.equal(checkBrackets(")(_))"), 2);
    });
    it("Is cheked", function() {
        assert.equal(checkBrackets(")(_))"), 1);
    });
    
  });