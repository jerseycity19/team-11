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

count = df[attr].value_counts().plot(kind='bar')

plt.savefig(attr.lower() + "-barchart.png", bbox_inches="tight")