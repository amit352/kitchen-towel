set -e
export PATH=`pwd`/driver:$PATH

echo $PATH

ls driver

python test.py
python test_addroom.py
python test_homepage.py
python test_signup.py
