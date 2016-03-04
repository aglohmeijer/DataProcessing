#!/usr/bin/python
# this is the python code I've used to add a second field to my CSV
# the conversion from CSV to JSOn I did via an online converter

import csv
import json

csvfile = open('gnicsv.csv', 'r')
f = open('pythondata', 'w')

def num_there(s):
	return any(i.isdigit() for i in s)

for row in csvfile:
	rows = row.split(",")
	if num_there(rows[1]):
		f.write(rows[0] + ",")
		f.write("GNI" + ",")
		f.write(rows[1])


