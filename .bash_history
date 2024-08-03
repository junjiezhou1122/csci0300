cd home
exit
sudo apt update
sudo apt install fortune
sudo apt install cowsay
cowsay "Hello, I'm a talking cow!"
cowsay -f tux "Linux is awesome!"
fortune | cowsay
cowsay -n "Look, I'm facing the other way!"
cowthink "What is the meaning of life?"
cowsay "陈冬冬是冬瓜"
cowsay -f tux "我是小冬瓜"
fortune
ssh-keygen -t ed25519
ls ~/.ssh
cat ~/.ssh/id_ed25519.pub
ssh -T git@github.com
git clone git@github.com:csci0300/cs300-s24-projects-junjiezhou1122.git
git clone https://github.com/csci0300/cs300-s24-labs.git
git clone https://github.com/csci0300/cs300-s24-projects.git
git clone https://github.com/csci0300/cs300-s24-section.git
git clone https://github.com/csci0300/cs300-lectures.git
ls
ls cs300-s24-labs
cd cs300-s24-labs/
cd lab0
gcc hello_world.c -o hello_world
./hello_world
git add hello_world.c
git add .
ls
cd cs300-s24-labs
ls
cd lab0
git add hello_world.c
git commit -m "Added tounge twister."
git push
cd
ls
git remote add origin https://github.com/junjiezhou1122/csci0300.git
git branch -M main
git push -u origin main
git remote add origin https://github.com/junjiezhou1122/csci0300.git
git remote set-url origin https://github.com/junjiezhou1122/csci0300.git
cd cs300-s24-labs/
git remote set-url origin https://github.com/junjiezhou1122/csci0300.git
git remote -v
git push -u origin main
git remote remove origin
git remote -v
git rm --cache client_folder
cd ..
git rm --cache client_folder
git init
git rm --cached client_folder
git remote add origin https://github.com/junjiezhou1122/csci0300.git
git branch -M main
git push -u origin main
git add .
