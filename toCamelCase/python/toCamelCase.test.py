import toCamelCase
import unittest

class Test_TestToCamelCase (unittest.TestCase):
    def test_toCamelCase(self):
        self.assertEqual(toCamelCase(''),'')

if __name__ == '__main__':
    unittest.main()