#!/bin/bash

#Menyimpan direktori target yang ditentukan dalam variabel 'target_dir'
# target_dir=$1

#Mencari file dengan ekstensi .java dalam direktori 'target_dir' dan direktori anak-anaknya
find $target_dir -name "*.java"     
    #Mendapatkan direktori dari file yang ditemukan
    dir=$(dirname "$file")
    #Menampilkan pesan
    echo "Ada file Java pada direktori $dir"


#saya membuat file java pada directory kasus,
#untuk memasatikan program berjalan bisa ketikan printah :
# bash cari-java.sh ../
#aris@aris-HuronRiver-Platform:~/Praxis/praxis-academy/kemampuan-dasar-1/latihan/kasus$ bash cari-java.sh ../
# hasil : 
#Ada file Java pada direktori ../kasus