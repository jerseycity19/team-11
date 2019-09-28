import pandas as pd
import matplotlib.pyplot as plt
import sys

attr = sys.argv[1]
path = sys.argv[2]
abs_path = "{}/../test.csv".format(path)
split_string = abs_path.split('/', 8)
path_to_express = "{}/{}/{}/{}/{}/{}/{}/{}".format(split_string[0], split_string[1], split_string[2], split_string[3], split_string[4], split_string[5], split_string[6], split_string[7])
path_to_csv = "{}/test.csv".format(path_to_express)
# path_of_csv = '/mnt/c/Users/dshap/Documents/team-11/express/test.csv'
df = pd.read_csv(str(path_of_csv))
# colors = ["#1f77b4", "#ff7f0e", "#2ca02c"]
dup= df.pivot_table(index=[attr], aggfunc='size').to_frame()
dup.columns = [attr.title()] 
print(dup)
plot = dup.plot.pie(y = 0 ,autopct='%1.1f%%', shadow=True, startangle=20)
plt.savefig(attr.lower() + "-piechart.png")
# print(dup_gender[0])

