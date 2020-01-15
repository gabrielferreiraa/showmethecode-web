import { expect } from "chai"

import global from "./global"

describe("config/global", () => {
  test("should be a object", () => {
    expect(global).to.be.a("object")
  })

  test("should have 4 properties", () => {
    expect(Object.keys(global)).to.have.lengthOf(4)
  })

  describe("appName", () => {
    test("should have property", () => {
      expect(global).to.have.property("appName")
    })

    test("property should return a string", () => {
      expect(global.appName).to.be.a("string")
    })
  })

  describe("colors", () => {
    test("should have property", () => {
      expect(global).to.have.property("colors")
    })

    test("property should return a object", () => {
      expect(global.colors).to.be.a("object")
    })

    describe("primaryColor", () => {
      test("should have a property", () => {
        expect(global.colors).to.have.property("primaryColor")
      })

      test("property should return a string", () => {
        expect(global.colors.primaryColor).to.be.a("string")
      })

      test("property should return `#2ED096`", () => {
        expect(global.colors.primaryColor).to.be.equal("#2ED096")
      })
    })

    describe("secondaryColor", () => {
      test("should have a property", () => {
        expect(global.colors).to.have.property("secondaryColor")
      })

      test("property should return a string", () => {
        expect(global.colors.secondaryColor).to.be.a("string")
      })

      test("property should return `#908F8F`", () => {
        expect(global.colors.secondaryColor).to.be.equal("#908F8F")
      })
    })

    describe("darkColor", () => {
      test("should have a property", () => {
        expect(global.colors).to.have.property("secondaryColor")
      })

      test("property should return a string", () => {
        expect(global.colors.darkColor).to.be.a("string")
      })

      test("property should return `#515151`", () => {
        expect(global.colors.darkColor).to.be.equal("#515151")
      })
    })

    describe("github", () => {
      test("should have a property", () => {
        expect(global.colors).to.have.property("secondaryColor")
      })

      test("property should return a string", () => {
        expect(global.colors.github).to.be.a("string")
      })

      test("property should return `#333333`", () => {
        expect(global.colors.github).to.be.equal("#333333")
      })
    })

    describe("google", () => {
      test("should have a property", () => {
        expect(global.colors).to.have.property("secondaryColor")
      })

      test("property should return a string", () => {
        expect(global.colors.google).to.be.a("string")
      })

      test("property should return `#4285F4`", () => {
        expect(global.colors.google).to.be.equal("#4285F4")
      })
    })
  })

  describe("layout", () => {
    test("should have property", () => {
      expect(global).to.have.property("layout")
    })

    test("property should return a object", () => {
      expect(global.layout).to.be.a("object")
    })

    describe("borderRadius", () => {
      test("should have a property", () => {
        expect(global.layout).to.have.property("borderRadius")
      })

      test("property should return a string", () => {
        expect(global.layout.borderRadius).to.be.a("string")
      })

      test("property should return `5px`", () => {
        expect(global.layout.borderRadius).to.be.equal("5px")
      })
    })
  })

  describe("font", () => {
    test("should have property", () => {
      expect(global).to.have.property("font")
    })

    test("property should return a object", () => {
      expect(global.font).to.be.a("object")
    })

    describe("thin", () => {
      test("should have a property", () => {
        expect(global.font).to.have.property("thin")
      })

      test("property should return a string", () => {
        expect(global.font.thin).to.be.a("string")
      })

      test("property should return `Roboto-Thin`", () => {
        expect(global.font.thin).to.be.equal("Roboto-Thin")
      })
    })

    describe("light", () => {
      test("should have a property", () => {
        expect(global.font).to.have.property("light")
      })

      test("property should return a string", () => {
        expect(global.font.light).to.be.a("string")
      })

      test("property should return `Roboto-Light`", () => {
        expect(global.font.light).to.be.equal("Roboto-Light")
      })
    })

    describe("regular", () => {
      test("should have a property", () => {
        expect(global.font).to.have.property("regular")
      })

      test("property should return a string", () => {
        expect(global.font.regular).to.be.a("string")
      })

      test("property should return `Roboto-Regular`", () => {
        expect(global.font.regular).to.be.equal("Roboto-Regular")
      })
    })

    describe("medium", () => {
      test("should have a property", () => {
        expect(global.font).to.have.property("medium")
      })

      test("property should return a string", () => {
        expect(global.font.medium).to.be.a("string")
      })

      test("property should return `Roboto-Medium`", () => {
        expect(global.font.medium).to.be.equal("Roboto-Medium")
      })
    })

    describe("bold", () => {
      test("should have a property", () => {
        expect(global.font).to.have.property("bold")
      })

      test("property should return a string", () => {
        expect(global.font.bold).to.be.a("string")
      })

      test("property should return `Roboto-Bold`", () => {
        expect(global.font.bold).to.be.equal("Roboto-Bold")
      })
    })

    describe("black", () => {
      test("should have a property", () => {
        expect(global.font).to.have.property("black")
      })

      test("property should return a string", () => {
        expect(global.font.black).to.be.a("string")
      })

      test("property should return `Roboto-Black`", () => {
        expect(global.font.black).to.be.equal("Roboto-Black")
      })
    })
  })
})
