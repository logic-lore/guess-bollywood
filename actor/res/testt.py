_x = """ Shah Rukh Khan
 DEEPIKA PADUKONE
 Ranveer Singh
 JACQUELINE FERNANDEZ
 Akshay Kumar
 KANGANA RANAUT
 Salman Khan
 ANUSHKA SHARMA
 Prabhas
 SONAM KAPOOR
 Hrithik Roshan
 SHRADDHA KAPOOR
 Sanjay Dutt
 KATRINA KAIF
 Ajay Devgn 
 PRIYANKA CHOPRA
 Yash
 Urvashi Rautela
 Riteish Deshmukh
 Alia Bhatt
 Aamir Khan
 Aditi Rao Hydari
 Tiger Shroff 
 Parineeti Chopra
 Amitabh Bachchan
 Sara Ali Khan
 Ranbir Kapoor
 Bhumi Pednekar
 Shahid Kapoor
 Tapsee Pannu
 Ayushmann Khurrana
 Nidhhi Agerwal
 Saif Ali Khan
 Kajal Aggarwal
 Varun Dhawan
 Ileana D'Cruz
 Anupam Kher
 Disha Patani
 Abhishek Bachchan 
 Kiara Advani 
 Uday Chopra
 Kriti Sanon
 Jr NTR
 Nora Fatehi
 Ram Charan
 Adah Sharma
 Mithun Chakraborty 
 Nargis Fakhri
 Vicky Kaushal 
 Nushrat Bharucha
 Akshaye Khanna
 Shruti Haasan
 Arjun Kapoor 
 Kainaat Arora
 John Abraham
 Yami Gautam
 Diljit Dosanjh
 Ayesha Takia
 Rajinikanth
 Nimrat Kaur
 Bobby Deol
 Riya Sen
 Arjun Rampal
 Rani Mukerji 
 Kartik Aaryan
 Neha Sharma
 Anil Kapoor 
 Amy Jackson
 Sushant Singh Rajput
 Esha Gupta
 Emraan Hashmi
 Asin Thottumkal
 Arshad Warsi 
 Bipasha Basu
 R Madhavan
 Shriya Pilgaonkar
 Sidharth Malhotra
 Amrita Rao
 Rajkummar Rao
 Dia Mirza
 Irrfan Khan
 Kim Sharma
 Vivek Oberoi
 Rimi Sen
 Nana Patekar 
 Mallika Sherawat
 Imran Khan
 Sonakshi Sinha
 Sunny Deol
 Neha Dhupia
 Shreyas Talpade
 Huma Qureshi 
 Sunny Singh Nijjar
 Minissha Lamba
 Farhan Akhtar 
 Sonalee Kulkarni
 Allu Arjun
 Isha Koppikar
 Tusshar Kapoor
 Tamanna Bhatiya
 Kunal Kemmu
 Shriya Saran
 Aftab Shivdasani
 Aarti Chhabria
 Manoj Bajpayee
 Genelia DSouza
 Naseeruddin
 Celina Jaitly
 Govinda
 Bhoomika Chawla
 Abhay Deol
 Ameesha Patel
 Paresh Rawal
 Esha Deol
 Aditya Roy Kapur
 Daisy Shah
 Pulkit Samrat
 Amrita Arora
 Ishaan Khatter 
 Vaani Kapoor
 Randeep Hooda
 Zareen Khan
 Fawad Khan
 Sonnalli Seygall
 Rishi Kapoor
 Sneha Ullal
 Karan Singh Grover
 Lisa Haydon
 Angad Bedi
 Sana Khaan
 Fardeen Khan
 Mahira Khan
 Suniel Shetty
 Neetu Chandra
 Nawazuddin Siddiqui
 Sameera Reddy
 Darsheel Safary
 Tanushree Dutta
 Jitendra Kumar
 Preity Zinta
 Dhanush
 Vidya Balan
 Neil Nitin Mukesh
 Chitrangda Singh
 Ali Zafar 
 Karishma Tanna
 Andrew Garfield
 Manjari Phadnis
 Vidyut Jammwal
 Bruna Abdullah
 Darshan Kumaar
 Kareena Kapoor
 Dharmendra
 Maryam Zakaria
 Vir Das 
 Diana Penty
 Sharman Joshi
 Richa Pallod
 Parambrata Chatterjee  
 Gul Panag
 Kapil Sharma
 Parvathy Omanakuttan
 Jaaved Jaaferi 
 Konkona Sen Sharma
 Jimmy Sheirgill 
 Fatima Sana Shaikh
 Parvin Dabas
 Rhea Chakraborty
 Prabhu Dheva 
 Sobhita Dhulipala
 Ashish Chowdhry
 Gauhar Khan
 Siddharth
 Pallavi Sharda
 Divyendu Sharma 
 Mawra Hocane
 Himansh Kohli
 Sayani Gupta
 Devanmashu Sharma 
 Surveen Chawla
 Boman Irani
 Shazahn Padamsee
 Aayush Sharma 
 Preeti Jhangiani
 Ravi Kishan
 Anjana Sukhani
 Girish Taurani
 Mugdha Godse
 Zayed Khan 
 Priyanka Bose
 Tahir Raj Bhasin
 Saiyami Kher
 Danny Denzongpa
 Kalki Koechlin
 Sooraj Pancholi
 Radhika Apte
 Jackie Shroff 
 Sunny Leone
 Neil Bhoopalam
 Soha Ali Khan"""

splited = _x.split("\n")

import random

def produce(i_value):
    _val = splited[random.randint(0, (len(splited))-1)]
    if _val == i_value:
        return produce(i_value)
    else:
        return _val.strip()

cout=1
output_ = ""
for i in splited:
    output_+=f"""a++;
window["ans"+a] = "{i.strip()}"; //Ans{cout}
window["noans1"+a] = "{produce(i)}";
window["noans2"+a] = "{produce(i)}";
window["noans3"+a] = "{produce(i)}";
window["noans4"+a] = "{produce(i)}";

"""
    cout+=1

f = open('actorOutput.txt', 'a')
f.write(output_)
f.close()