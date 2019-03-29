import sys
import re
from splinter.browser import Browser

CLOASE_AFTER_TEST = False

def output(x):
    print(encoding(x))

def resultMsg(x):
        assert x == True
        print 'pass'

def testLogin(desc, address, beds,  distance, result):
    print desc
    browser.fill('address', address)
    browser.fill('beds', beds)
    browser.fill('Distance', distance)
    

    browser.find_by_value('search').first.click()
    checkresult(result)

def checkresult(x):
    resultMsg(browser.is_text_present(x))

__testUrl = 'http://ubuntu1604-006.student.cs.uwaterloo.ca:19489/homepage.html'

browser = Browser('chrome', headless = True)
browser.visit(__testUrl)

print 'test page:' + browser.title



testLogin('no beds', 'waterloo', '', '2', 'please enter your beds')
testLogin('no distance', 'waterloo', '1', '', 'please enter your distance')


if CLOASE_AFTER_TEST:
    browser.quit()

