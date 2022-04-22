# %%

from solution import encode
# from solution import decode
import codewars_test as test


@test.describe("Test encode function")
def tests_encode():
    @test.it("Should work with short word")
    def test_short_word():
        test.assert_equals(encode(
            "hey"), "000111111000111000000000000111111000000111000111000111111111111000000111")

    @test.it("Should work with long word")
    def test_long_word():
        test.assert_equals(encode("The Sensei told me that i can do this kata"), "000111000111000111000000000111111000111000000000000111111000000111000111000000111000000000000000000111000111000000111111000111111000000111000111000111111000111111111000000111111111000000111111000111111000000111000111000111111000111000000111000000111000000000000000000111111111000111000000000111111000111111111111000111111000111111000000000111111000000111000000000000111000000000000000000111111000111111000111000111111000000111000111000000111000000000000000000111111111000111000000000111111000111000000000000111111000000000000111000111111111000111000000000000111000000000000000000111111000111000000111000000111000000000000000000111111000000000111111000111111000000000000111000111111000111111111000000000111000000000000000000111111000000111000000000111111000111111111111000000111000000000000000000111111111000111000000000111111000111000000000000111111000111000000111000111111111000000111111000000111000000000000000000111111000111000111111000111111000000000000111000111111111000111000000000111111000000000000111")

    @test.it("Should work with numbers")
    def test_short_word():
        test.assert_equals(encode(
            "T3st"), "000111000111000111000000000000111111000000111111000111111111000000111111000111111111000111000000")

    @test.it("Should work with special characters")
    def test_short_word():
        test.assert_equals(encode(
            "T?st!%"), "000111000111000111000000000000111111111111111111000111111111000000111111000111111111000111000000000000111000000000000111000000111000000111000111")


@test.describe("Test decode function")
def tests_decode():
    @test.it("Should work with short word")
    def test_short_word():
        test.assert_equals(decode(
            "100111111000111001000010000111111000000111001111000111110110111000010111"), "hey")

    @test.it("Should work with long word")
    def test_long_word():
        test.assert_equals(decode("000111000111000111000100000111111000111000001000000111111000010111000111000100111000000000000100000111000111000000111111000111111000000111000111000111111000111111111000000111111111000000111111000110111000000111000111000111111000111000000111000000111000000000000000000111111111000111000000000111111000111111111111000111111000111111000000000111111000000111000001000000111000000000001000000111111000111111000111000111111000000111000111000000111000000000000000000111111111000111000000000111111000111000000000000111111000000010000111000111111111000111000000000100111000000000000000000111111000111000000111000000111000000000000000000111111000000000111111000111111000000000000111000111111000111111111000000000111000000000000010000111111000000111000000000111111000111111110111000000111000000000000000000111111111000111000000000111111000111000000000000111111000111000000111000111111111000000111111000000111000000000000000000111111000111000111111000111111000000000000111000111111111000111000000000111111000000000000111"), "The Sensei told me that i can do this kata")

    @test.it("Should work with numbers")
    def test_short_word():
        test.assert_equals(decode(
            "000111000111000111000010000000111111000000111111000111111111000000111111000111111111000111010000"), "T3st")

    @test.it("Should work with special characters")
    def test_short_word():
        test.assert_equals(decode(
            "000111000111000111000001000000111111110111111111000111111111000000111111000111111111000111000000000000111000000000000111000000111000000111000111"), "T?st!%")

# %%