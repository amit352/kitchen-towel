import sys
import re
from splinter.browser import Browser

CLOASE_AFTER_TEST = False


def output(x):
    print(encoding(x))

def resultMsg(x):
        assert x == True
        print('pass')

def testLogin(desc, username, password, passwordconfirm, result):
    print (desc)
    browser.fill('email', username)
    browser.fill('pass', password)
    browser.fill('pass_confirm', passwordconfirm)
    browser.find_by_value('create').first.click()
    checkresult(result)

def checkresult(x):
    resultMsg(browser.is_text_present(x))

__testUrl = 'http://ubuntu1604-006.student.cs.uwaterloo.ca:19489/signup.html'

browser = Browser('chrome',headless=True)
browser.visit(__testUrl)

print 'test page:'+ browser.title

testLogin('no username', '','123456', '123456', 'please enter your email')
testLogin('no password', 'lyuboxin@gmail', '', '123456', 'please enter your password')
testLogin('no password', 'lyuboxin@gmail', '123456', '', 'please confirm your password')  
testLogin('no password confirm', 'lyuboxing@gmail', '123456', '234567', 'passwords did not match, please try again')

if CLOASE_AFTER_TEST:
    browser.quit()