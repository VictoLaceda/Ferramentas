@echo off
set /p dest_ip=Enter destination IP address:
set /p gateway=Enter gateway IP address:
set /p met=Metrica
route add %dest_ip% mask 255.255.255.255 %gateway% metric %met% 
