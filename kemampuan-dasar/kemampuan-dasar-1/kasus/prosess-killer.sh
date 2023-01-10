#!/bin/bash

# Meminta nama program yang akan ditutup
echo -n "Masukkan nama program yang ingin ditutup: "
read -r program

# Mencari PID dari program tersebut
pid=$(ps -e | grep "$program" | awk '{print $1}')

# Mengecek apakah program tersebut sedang berjalan
if [ -n "$pid" ]; then
  # Menghentikan program tersebut
  kill -9 "$pid"
  echo "Program $program (PID $pid) berhasil ditutup."
else
  echo "Program $program tidak ditemukan."
fi
